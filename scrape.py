#!/usr/bin/env python3
"""
Scrape TU/e Research Portal student theses for items containing a keyword (default: "remmers"),
collect each item URL, and (if available) the corresponding PDF URL.

Outputs: CSV (default) and optionally JSON.

Usage examples:
  python tue_theses_remmers.py
  python tue_theses_remmers.py --keyword remmers --out results.csv --json results.json
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import time
from dataclasses import dataclass, asdict
from typing import Iterable, Optional
from urllib.parse import urljoin, urlparse, parse_qs, urlencode, urlunparse

import requests
from bs4 import BeautifulSoup


BASE_LISTING_URL = "https://research.tue.nl/en/studentTheses/?search=remmers&isCopyPasteSearch=false"
BASE_ORIGIN = "https://research.tue.nl"


@dataclass
class ThesisItem:
    title: str
    item_url: str
    pdf_url: str


def _default_headers() -> dict:
    # A realistic UA + accept headers often helps avoid 403s on portals.
    return {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        ),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,nl;q=0.8",
        "Connection": "keep-alive",
        "Referer": "https://research.tue.nl/",
    }


def build_search_url(listing_url: str, keyword: str) -> str:
    """
    The listing page already has 'search' and 'isCopyPasteSearch' query params.
    We rewrite 'search' to the keyword while keeping other params.
    """
    parts = urlparse(listing_url)
    qs = parse_qs(parts.query)
    qs["search"] = [keyword]
    # Keep isCopyPasteSearch if present; if not, set a sensible default.
    qs.setdefault("isCopyPasteSearch", ["false"])
    new_query = urlencode(qs, doseq=True)
    return urlunparse((parts.scheme, parts.netloc, parts.path, parts.params, new_query, parts.fragment))


def fetch(session: requests.Session, url: str, timeout: int = 30) -> str:
    r = session.get(url, timeout=timeout)
    r.raise_for_status()
    return r.text


def extract_thesis_links(html: str, base_url: str) -> set[str]:
    """
    Extract candidate thesis detail page links from a listing/search page.

    We keep this intentionally robust:
    - Any <a href> containing "/en/studentTheses/" (or "/nl/studentTheses/") and not a PDF.
    - Deduplicate.
    """
    soup = BeautifulSoup(html, "html.parser")
    links: set[str] = set()

    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if not href:
            continue

        abs_url = urljoin(base_url, href)

        # Filter to thesis detail pages.
        if ("/studentTheses/" in abs_url) and (not abs_url.lower().endswith(".pdf")):
            # Avoid linking back to listing itself.
            if abs_url.rstrip("/") == base_url.rstrip("/"):
                continue
            links.add(abs_url.split("#", 1)[0])

    return links


def find_next_page_url(html: str, current_url: str) -> Optional[str]:
    """
    Try a few common patterns for pagination:
    - <link rel="next" href="...">
    - <a rel="next" href="...">
    - <a class*="next" href="..."> or aria-label contains "Next"
    If none found, return None.
    """
    soup = BeautifulSoup(html, "html.parser")

    # rel=next in <link> or <a>
    tag = soup.find(lambda t: t.name in ("a", "link") and t.get("rel") and "next" in t.get("rel") and t.get("href"))
    if tag and tag.get("href"):
        return urljoin(current_url, tag["href"])

    # aria-label next
    a = soup.find("a", attrs={"aria-label": re.compile(r"next", re.I)}, href=True)
    if a:
        return urljoin(current_url, a["href"])

    # class contains next
    a = soup.find("a", class_=re.compile(r"next", re.I), href=True)
    if a:
        return urljoin(current_url, a["href"])

    return None


def crawl_listing_for_keyword(
    session: requests.Session,
    keyword: str,
    sleep_s: float = 0.4,
    max_pages: int = 50,
) -> list[str]:
    """
    Crawl the listing/search results pages and return a list of unique thesis detail URLs.
    """
    start_url = build_search_url(BASE_LISTING_URL, keyword)
    seen_pages: set[str] = set()
    to_visit: list[str] = [start_url]
    thesis_urls: set[str] = set()

    pages = 0
    while to_visit and pages < max_pages:
        url = to_visit.pop(0)
        if url in seen_pages:
            continue
        seen_pages.add(url)

        html = fetch(session, url)
        pages += 1

        thesis_urls |= extract_thesis_links(html, BASE_ORIGIN)

        next_url = find_next_page_url(html, url)
        if next_url and next_url not in seen_pages:
            to_visit.append(next_url)

        time.sleep(sleep_s)

    return sorted(thesis_urls)


def extract_title_and_pdf(session: requests.Session, thesis_url: str) -> ThesisItem:
    """
    From a thesis detail page:
    - title: <h1> typically
    - pdf_url: look for links ending in .pdf OR containing typical download patterns
    """
    html = fetch(session, thesis_url)
    soup = BeautifulSoup(html, "html.parser")

    # Title: typically the main H1
    h1 = soup.find("h1")
    title = h1.get_text(strip=True) if h1 else thesis_url.rsplit("/", 1)[-1].replace("-", " ")

    # PDF link heuristics
    pdf_candidates: list[str] = []
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if not href:
            continue
        abs_url = urljoin(thesis_url, href)

        lower = abs_url.lower()
        if lower.endswith(".pdf"):
            pdf_candidates.append(abs_url)
            continue

        # Common Pure portal patterns: /files/..., /download?..., mime=pdf, etc.
        if ("/files/" in lower and "pdf" in lower) or ("download" in lower and "pdf" in lower):
            pdf_candidates.append(abs_url)
            continue

    pdf_url = pdf_candidates[0] if pdf_candidates else ""
    return ThesisItem(title=title, item_url=thesis_url, pdf_url=pdf_url)


def write_csv(items: Iterable[ThesisItem], path: str) -> None:
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["title", "item_url", "pdf_url"])
        w.writeheader()
        for it in items:
            w.writerow(asdict(it))


def write_json(items: Iterable[ThesisItem], path: str) -> None:
    with open(path, "w", encoding="utf-8") as f:
        json.dump([asdict(it) for it in items], f, ensure_ascii=False, indent=2)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--keyword", default="remmers", help="Keyword to search for (default: remmers)")
    ap.add_argument("--out", default="tue_student_theses.csv", help="CSV output path")
    ap.add_argument("--json", default="", help="Optional JSON output path")
    ap.add_argument("--sleep", type=float, default=0.4, help="Sleep between requests (seconds)")
    ap.add_argument("--max-pages", type=int, default=50, help="Max listing pages to crawl")
    args = ap.parse_args()

    session = requests.Session()
    session.headers.update(_default_headers())

    thesis_urls = crawl_listing_for_keyword(
        session=session,
        keyword=args.keyword,
        sleep_s=args.sleep,
        max_pages=args.max_pages,
    )

    items: list[ThesisItem] = []
    for i, url in enumerate(thesis_urls, start=1):
        try:
            item = extract_title_and_pdf(session, url)
        except requests.HTTPError as e:
            # Keep the row but mark missing PDF/title if the portal blocks a page.
            item = ThesisItem(title="", item_url=url, pdf_url="")
            print(f"[{i}/{len(thesis_urls)}] ERROR fetching {url}: {e}")
        items.append(item)
        time.sleep(args.sleep)

    write_csv(items, args.out)
    print(f"Wrote {len(items)} rows to: {args.out}")

    if args.json:
        write_json(items, args.json)
        print(f"Wrote JSON to: {args.json}")


if __name__ == "__main__":
    main()

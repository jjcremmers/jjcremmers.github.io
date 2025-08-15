---
layout: projects
title: Student projects
permalink: /studentprojects/
description: An overview of
display_categories: [Bachelor, Master, Internship]
horizontal: false
---

<div class="studentprojects">
{% assign all_items = site.studentprojects %}

{% if site.enable_project_categories and page.display_categories %}
  {%- for category in page.display_categories -%}
    <h2 id="{{ category | downcase | replace: ' ', '-' }}" class="category">{{ category }}</h2>

    {%- assign categorized = all_items | where: "category", category -%}
    {%- assign sorted_items = categorized | sort: "importance" -%}

    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {%- for project in sorted_items -%}
            {% include projects_horizontal.liquid %}
          {%- endfor -%}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {%- for project in sorted_items -%}
          {% include projects.liquid %}
        {%- endfor -%}
      </div>
    {% endif %}
  {%- endfor -%}

{% else %}
  {%- assign sorted_items = all_items | sort: "importance" -%}
  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {%- for project in sorted_items -%}
          {% include projects_horizontal.liquid %}
        {%- endfor -%}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {%- for project in sorted_items -%}
        {% include projects.liquid %}
      {%- endfor -%}
    </div>
  {% endif %}
{% endif %}
</div>


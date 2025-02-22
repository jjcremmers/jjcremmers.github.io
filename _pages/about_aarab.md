## Marwan Aarab

{% assign selected_author = "Aarab" %}

<ul>
  {% for paper in site.publications %}
    {% if paper.author contains selected_author %}
      <li>
        <strong>{{ paper.title }}</strong><br>
        <em>{{ paper.author }}</em> <br>
        <a href="{{ paper.url }}">[PDF]</a> | <a href="{{ paper.doi }}">[DOI]</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

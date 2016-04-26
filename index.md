---
layout: default
class: home
---

{% for post in site.posts %}
{% include book.html %}
{% endfor %}
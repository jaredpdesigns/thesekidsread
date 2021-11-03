---
layout: base.njk
permalink:
	search: /search/:slug/
class: home flow__grid flow__align--v-start flow__gap--l flow__grid--columns-auto padding__all--l
---

{% for item in books %}

{% Book item %}

{% endfor %}
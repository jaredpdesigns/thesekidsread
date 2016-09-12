---
---

{% include_relative _partials/typekit.js %}
{% include_relative _partials/unveil.js %}

$(document).ready(function() {
  $('img').unveil(168,function() { $(this).load(function() { this.style.opacity = 1; } ); });
});

{% include_relative _partials/stayInWebApp.js %}

$(function() {
  $.stayInWebApp();
});
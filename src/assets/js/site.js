---
---

{% include_relative _partials/typekit.js %}
{% include_relative _partials/unveil.js %}
{% include_relative _partials/list.js %}

$(document).ready(function() {
  $('img').unveil(168,function() { $(this).load(function() { this.style.opacity = 1; } ); });
});

{% include_relative _partials/stayInWebApp.js %}

$(function() {
  $.stayInWebApp();
});

$(document).ready(function() {
  var options = {
    valueNames: [ 'book--title', 'book--author' ]
  };
  var userList = new List('booksearch', options);
});
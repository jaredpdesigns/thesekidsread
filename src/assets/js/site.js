---
---

{% include_relative _partials/typekit.js %}
{% include_relative _partials/unveil.js %}
{% include_relative _partials/list.js %}

$(document).ready(function() {
  $('img').unveil(240,function() {
    $(this).load(function() {
      $(this).parent().addClass('loaded');
    } );
  });
});

{% include_relative _partials/stayInWebApp.js %}

$(function() {
  $.stayInWebApp();
});

$(document).ready(function() {
  var options = {
    valueNames: [ 'book__title', 'book__author' ]
  };
  var userList = new List('booksearch', options);
});
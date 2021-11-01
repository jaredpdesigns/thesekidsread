module.exports = function (book) {
  return `
<a class="book flow__inline radius__s" href="/books/${book.slug}">
<figure class="type__align--center width__full">
<span class="flow__flex flow__align--h-center flow__align--v-center">
<img
  class="fancyHover flow__flex--shrink margin__left--auto margin__right--auto"
  loading="lazy" alt="Cover for ${book.title}"
  src="${book.img}${
    book.img.includes("https://images-na") ? "._SL240_.jpg" : ".jpg?w=240"
  }"
  height="160"
  width="160"
/>
</span>
<figcaption class="oomph__v--s padding__all--m">
<h3 class="type__size--l-l">${book.title}</h3>
<p class="color__type--base--ish type__size--m-m type__weight--semibold">By ${book.author.join(
    " & "
  )}</p>
</figcaption>
</figure>
</a>
`;
};

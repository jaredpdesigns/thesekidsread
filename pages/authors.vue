<template>
  <main v-if="books.length" :class="$options.name">
    <header class="padding__bottom--xxl padding__top--xxl type__align--center">
      <p class="color__type--base--mid type__family--display type__size--l-l">
        <strong>All Books by</strong>
      </p>
      <h1 class="color__type--brand">{{ $route.query.q }}</h1>
    </header>
    <section
      :class="[
        $options.name + '__wrap',
        'padding__bottom--l padding__left--m padding__right--m padding__top--l',
      ]"
    >
      <LazyBookTile v-for="(book, index) in books" :key="index" :book="book" />
    </section>
  </main>
  <main v-else :class="$options.name">
    <header class="padding__bottom--xxl padding__top--xxl type__align--center">
      <p class="color__type--base--mid">
        No results found for “<strong>{{ $route.query.q }}</strong>”</em>
      </p>
    </header>
  </main>
</template>
<script>
export default {
  name: "Authors",
  data() {
    return {
      books: this.$store.state.books.filter((book) =>
        book.author.some((item) => item.includes(this.$route.query.q))
      ),
    };
  },
};
</script>
<style lang="scss">
.Authors {
  &__wrap {
    align-items: start;
    display: grid;
    grid-gap: var(--size__m);
    @media (max-width: 28rem) {
      .BookTile__img {
        height: auto;
      }
    }
    @include breakpoint(xsl) {
      grid-template-columns: repeat(auto-fit, minmax(var(--width__xs), 1fr));
    }
    @include breakpoint(l) {
      grid-template-columns: repeat(auto-fit, minmax(var(--width__s), 1fr));
    }
    @include breakpoint(xl) {
      grid-template-columns: repeat(auto-fit, minmax(var(--width__m), 1fr));
    }
  }
}
</style>

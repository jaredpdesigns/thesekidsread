<template>
  <main :class="$options.name">
    <section
      :class="[
        $options.name + '__wrap',
        'padding__bottom--l padding__left--m padding__right--m padding__top--l',
      ]"
    >
      <LazyBookTile
        v-for="(book, index) in $store.state.books"
        :key="index"
        :book="book"
      />
    </section>
  </main>
</template>
<script>
export default {
  name: "Home",
  head() {
    return {
      title: "These Kids Read",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Our family reads great books together",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Our family reads great books together",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "Our family reads great books together",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.Home {
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

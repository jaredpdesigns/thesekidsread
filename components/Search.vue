<template>
  <section :class="$options.name">
    <section
      :class="[
        $options.name + '__input',
        'border__all color__border--base--light oomph__h--s padding__left--m padding__right--m',
      ]"
    >
      <Icon class="color__type--base--mid" name="search" />
      <input
        aria-label="Search for your favorite books"
        type="text"
        placeholder="Search…"
        v-model="search"
      />
      <button
        v-if="search"
        aria-label="Clear search term"
        class="color__type--base--mid"
        @click="search = ''"
      >
        <Icon name="cancel" />
      </button>
    </section>
    <section
      :class="[
        $options.name + '__results',
        search ? $options.name + '__results--active' : null,
        'border__bottom border__left border__right color__bg--contrast color__border--base--light shadow radius__bl--m radius__br--m type__align--center',
      ]"
    >
      <LazyBookTile
        v-for="(book, index) in booksSearched"
        :key="index"
        :book="book"
        :row="true"
      />
      <p
        v-if="search && !booksSearched.length"
        class="color__type--base--mid padding__all--m type__size--s-m"
      >
        No books found
      </p>
    </section>
  </section>
</template>
<script>
export default {
  name: "Search",
  computed: {
    booksSearched() {
      if (this.search) {
        return this.$store.state.books.filter(
          (book) =>
            book.description
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            book.title.toLowerCase().includes(this.search.toLowerCase()) ||
            book.author.some((item) =>
              item.toLowerCase().includes(this.search.toLowerCase())
            )
        );
      } else {
        return [];
      }
    },
  },
  data() {
    return {
      search: "",
    };
  },
  watch: {
    $route(to, from) {
      this.search = "";
    },
  },
};
</script>
<style lang="scss">
.Search {
  width: 100%;
  @include breakpoint(xsl) {
    max-width: var(--width__xs);
  }
  @include breakpoint(m) {
    max-width: var(--width__s);
  }
  &__input {
    @include smooth;
    align-items: center;
    border-radius: calc(var(--size__xl) / 2);
    display: flex;
    height: var(--size__xl);
    &:focus-within {
      border-color: var(--color__brand);
    }
    input {
      background-color: transparent;
      color: var(--color__base);
      font-family: var(--type__family--body);
      font-size: var(--type__size--m);
      line-height: var(--type__lineheight--l);
      width: 100%;
      &::placeholder {
        color: var(--color__base--mid);
      }
    }
    svg {
      flex-shrink: 0;
    }
    button {
      align-items: center;
      display: inline-flex;
    }
  }
  &__results {
    @include smooth;
    max-height: calc(100vh - var(--header) - var(--size__m));
    opacity: 0;
    overflow: hidden;
    overflow-y: auto;
    left: var(--size__m);
    position: fixed;
    right: var(--size__m);
    top: var(--header);
    transform: translateY(calc(var(--size__s) * -1));
    z-index: 99;
    @include breakpoint(xsl) {
      left: auto;
      max-width: calc(var(--width__s) + var(--size__m));
      width: 100%;
    }
    @include breakpoint(m) {
      max-width: calc(var(--width__s) + var(--size__l));
    }
    &--active {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>

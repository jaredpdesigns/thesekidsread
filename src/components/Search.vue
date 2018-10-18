<template>
  <section class="search">
    <label for="search" class="searchInput">
      <Icon name="search" :size="16"/>
      <input id="search" type="text" placeholder="Search…" v-model="search"/>
      <button @click="clearSearch" title="Clear search results"><Icon name="cancel" :size="14"/></button>
    </label>
    <ul v-if="search">
      <Book v-for="book in results" :key="book.title" :authors="book.author" :img="book.img" :slug="book.slug" :title="book.title" @click.native="clearSearch" />
    </ul>
  </section>
</template>
<script>
import { _ } from "vue-underscore";
import Book from "@/components/BookSearch.vue";
import Icon from "@/components/Icon.vue";
export default {
  name: "Search",
  components: { Book, Icon },
  computed: {
    books() {
      return this.$store.state.books;
    },
    results() {
      const array = this.books;
      let search = this.search.toLowerCase();
      if (this.search) {
        return _.filter(array, book =>
          Object.keys(book).some(key =>
            book[key]
              .toString()
              .toLowerCase()
              .includes(search)
          )
        );
      } else {
        return [];
      }
    }
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    clearSearch() {
      if (this.search) {
        return (this.search = "");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables";
.search {
  margin-top: rem(16);
  width: 100%;
  @include breakpoint(m) {
    margin-top: 0;
    max-width: rem(240);
  }
  button {
    @include smooth;
    color: var(--base-mid);
    height: rem(32);
    width: rem(32);
    &:focus {
      color: var(--base);
    }
  }
}
.searchInput {
  @include smooth;
  align-items: center;
  border: rem(1) solid var(--base-light);
  border-radius: rem(20);
  display: flex;
  height: rem(40);
  justify-content: space-between;
  padding: 0 rem(8);
  &:focus-within {
    border-color: var(--highlight);
  }
  > .icon {
    color: var(--base-upper);
  }
  input {
    font-family: inherit;
    height: rem(32);
    margin-left: rem(8);
    width: 100%;
  }
  button {
    @include smooth;
    align-items: center;
    color: var(--base-upper);
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;
    &:focus,
    &:hover {
      color: var(--base-mid);
    }
  }
}
.search ul {
  background-color: var(--contrast);
  border: rem(1) solid var(--base-light);
  border-radius: rem(16);
  box-shadow: 0 rem(16) rem(32) rem(-16) rgba(black, 0.25);
  left: rem(8);
  max-height: rem(256);
  overflow: hidden;
  overflow-y: auto;
  position: fixed;
  right: rem(8);
  top: rem(162);
  z-index: 100;
  @include breakpoint(xsl) {
    top: rem(120);
  }
  @include breakpoint(m) {
    left: 50%;
    max-width: rem(640);
    right: auto;
    top: rem(80);
    transform: translateX(-50%);
    width: 100%;
  }
}
</style>
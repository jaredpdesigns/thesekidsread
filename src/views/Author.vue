<template>
  <main>
    <Head
      :title="'Great books by ' + author + ' | These Kids Read'"
      :description="'A collection of great books by ' + author"
      :keywords="author"
      :url="'https://thesekidsread.jaredpendergraft.com/author/' + authorSlug"
    />
    <header>
      <h1 class="author">Great books by <span class="author__name">{{ author }}</span></h1>
    </header>
    <section class="books">
      <article v-for="book in filtered" :key="book.title">
        <Book :authors="book.author" :img="book.img" :slug="book.slug" :title="book.title" />
      </article>
    </section>
  </main>
</template>
<script>
import { _ } from "vue-underscore";
import Book from "@/components/BookHome.vue";
export default {
  name: "Author",
  components: { Book },
  computed: {
    author() {
      return this.authorFull;
    },
    books() {
      return this.$store.state.books;
    },
    filtered() {
      let array = this.books;
      let search = this.authorFull;
      return _.filter(array, book => {
        return _.flatten(book.author).indexOf(search) !== -1;
      });
    }
  },
  props: {
    authorSlug: "",
    authorFull: ""
  }
};
</script>
<style lang="scss" scoped>

header {
  padding: rem(32);
  text-align: center;
  h1 {
    font-weight: normal;
  }
}
.books {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: rem(16);
}
article {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
  padding: rem(16);
  @include breakpoint(s) {
    flex-basis: 50%;
    max-width: 50%;
  }
  @include breakpoint(l) {
    flex-basis: 25%;
    max-width: 25%;
  }
}
</style>
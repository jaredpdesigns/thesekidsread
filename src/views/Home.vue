<template>
  <main>
    <Head
      title="These Kids Read"
      description="We read great books together"
      keywords="these kids read, jared pendergraft, kids books, great book for kids"
      image="https://thesekidsread.com/img/social.jpg"
      url="https://thesekidsread.com"
    />
    <article v-for="book in books" :key="book.title">
      <Book :authors="book.author" :img="book.img" :slug="book.slug" :title="book.title" />
    </article>
  </main>
</template>
<script>
import Book from "@/components/BookHome.vue";
export default {
  name: "Home",
  components: { Book },
  computed: {
    books() {
      return this.$store.state.books;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables";
main {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
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
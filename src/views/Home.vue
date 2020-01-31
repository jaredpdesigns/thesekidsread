<template>
  <main>
    <Head
      title="These Kids Read"
      description="We read great books together"
      keywords="these kids read, jared pendergraft, kids books, great book for kids"
      image="https://thesekidsread.jaredpendergraft.com/img/social.jpg"
      url="https://thesekidsread.jaredpendergraft.com"
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
    flex-basis: calc(100%/2);
    max-width: calc(100%/2);
  }
  @include breakpoint(m) {
    flex-basis: calc(100%/3);
    max-width: calc(100%/3);
  }
  @include breakpoint(l) {
    flex-basis: calc(100%/4);
    max-width: calc(100%/4);
  }
  @include breakpoint(xxl) {
    flex-basis: calc(100%/6);
    max-width: calc(100%/6);
  }
}
</style>
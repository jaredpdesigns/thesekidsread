<template>
  <main>
    <Head v-for="book in filtered" :key="book.slug"
      :title="'“' + book.title + '” | These Kids Read'"
      :description="'“' + book.title + '” is a great book by ' + authorsJoined"
      :keywords="book.title + ',' + book.author"
      :image="book.img"
      :url="'https://thesekidsread.com/books/' + book.slug"
    />
    <Book v-for="book in filtered" :key="book.title" :authors="book.author" :buy="book.buy" :description="book.description" :img="book.img" :title="book.title"/>
    <aside v-if="related.length > 0">
      <h2>More great books by {{ authorsJoined }}</h2>
      <ul>
        <Related v-for="book in related" :key="book.title" :authors="book.author" :img="book.img" :slug="book.slug" :title="book.title" />
      </ul>
    </aside>
    <nav role="pagination">
      <router-link :to="bookPrev" :class="{'empty':!bookPrev}"><Icon name="arrow-left" :size="24"/></router-link>
      <router-link :to="bookNext" :class="{'empty':!bookNext}"><Icon name="arrow-right" :size="24"/></router-link>
    </nav>
  </main>
</template>
<script>
import { _ } from "vue-underscore";
import Book from "@/components/BookDetail.vue";
import Icon from "@/components/Icon.vue";
import Related from "@/components/BookRelated.vue";
export default {
  name: "Detail",
  components: { Book, Icon, Related },
  computed: {
    authors() {
      return _.flatten(_.pluck(this.filtered, "author"));
    },
    authorsJoined() {
      return this.authors.join(" & ");
    },
    books() {
      return this.$store.state.books;
    },
    filtered() {
      let array = this.books;
      let slug = this.$route.params.slug;
      return _.filter(array, { slug: slug });
    },
    related() {
      let array = this.books;
      let search = this.authors;
      let reduced = _.filter(array, book => {
        return _.contains(search, book.author[0]);
      });
      return _.difference(reduced, this.filtered);
    },
    bookIndex() {
      let array = this.books;
      let slug = this.$route.params.slug;
      return _.findIndex(array, { slug: slug });
    },
    bookNext() {
      let array = this.books;
      let current = this.bookIndex + 1;
      if (current < array.length) {
        return array[current].slug;
      } else {
        return "";
      }
    },
    bookPrev() {
      let array = this.books;
      let current = this.bookIndex - 1;
      if (current > -1) {
        return array[current].slug;
      } else {
        return "";
      }
    }
  }
};
</script>
<style lang="scss" scoped>

aside {
  background-color: var(--contrast);
  padding: rem(16);
  h2 {
    color: var(--base-mid);
    padding: rem(16);
    text-align: center;
  }
  ul {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: rem(16);
  }
  li {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 100%;
    @include breakpoint(xs) {
      + * {
        margin-top: rem(32);
      }
    }
    @include breakpoint(s) {
      flex-basis: 50%;
      max-width: 50%;
    }
    @include breakpoint(l) {
      flex-basis: 25%;
      max-width: 25%;
    }
  }
}
nav[role="pagination"] {
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: rem(16);
  position: fixed;
  right: rem(16);
  top: 50%;
  transform: translateY(-50%);
  a {
    @include smooth;
    align-items: center;
    background-color: var(--contrast);
    border: rem(1) solid var(--base-light);
    border-radius: 50%;
    box-shadow: 0 rem(8) rem(16) rem(-8) rgba(black, 0.25);
    color: var(--base-upper);
    display: inline-flex;
    height: rem(48);
    justify-content: center;
    width: rem(48);
    &.empty {
      cursor: none;
      opacity: 0;
      visibility: hidden;
    }
    &:not(.empty):focus,
    &:not(.empty):hover {
      color: var(--highlight);
      transform: scale(1.03125);
    }
  }
}
</style>
<template>
  <main :class="$options.name">
    <article
      :class="[
        $options.name + '__wrap',
        'padding__bottom--l padding__left--m padding__right--m padding__top--l type__align--center',
      ]"
    >
      <figure>
        <nav :class="[$options.name + '__nav', 'padding__all--m']">
          <nuxt-link
            :aria-label="
              bookPrev
                ? 'Read the previous book in the list of books'
                : 'Return to overview of all books'
            "
            class="button shadow"
            active-class
            exact-active-class
            :to="bookPrev ? '/books/' + bookPrev : '/'"
            ><Icon name="arrow-left"
          /></nuxt-link>
          <nuxt-link
            :aria-label="
              bookNext
                ? 'Read the next book in the list of books'
                : 'Return to overview of all books'
            "
            class="button shadow"
            active-class
            exact-active-class
            :to="bookNext ? '/books/' + bookNext : '/'"
            ><Icon name="arrow-right"
          /></nuxt-link>
        </nav>
        <span :class="$options.name + '__img'">
          <Icon class="color__type--base--light" name="book" :size="28" />
          <picture>
            <source
              sizes="(min-width: 79rem) 640px, (min-width: 47rem) 480px, (min-width: 29rem) 320px, 240px"
              :srcset="
                (book.img + '._SL320_.jpg 320w',
                book.img + '._SL480_.jpg 480w',
                book.img + '._SL640_.jpg 640w')
              "
            />
            <img
              :alt="book.title + ' cover'"
              class="border__all color__border--base--ghost radius--s shadow"
              loading="lazy"
              :src="book.img + '._SL240_.jpg'"
            />
          </picture>
        </span>
      </figure>
      <section :class="[$options.name + '__description', 'padding__all--m']">
        <section class="oomph__v--l width__l">
          <h1 class="color__type--brand">{{ book.title }}</h1>
          <h2 class="color__type--base--mid margin__top--s type__family--body">
            {{ "by " + book.author.join(" & ") }}
          </h2>
          <p class="type__align--left">{{ book.description }}</p>
          <a
            :aria-label="'Buy a copy of ' + book.title"
            class="button"
            :href="book.buy"
            rel="noopener"
            target="_blank"
            ><Icon class="margin__right--s" name="buy" />Buy Now</a
          >
        </section>
      </section>
    </article>
    <aside
      v-if="booksRelated.length"
      :class="[
        $options.name + '__related',
        'border__bottom border__top color__bg--brand--ghost color__border--brand--light padding__bottom--m padding__top--m type__align--center',
      ]"
    >
      <header class="padding__bottom--m padding__top--m width__ml">
        <h3 class="color__type--base--mid">
          More Books by {{ book.author.join(" & ") }}
        </h3>
      </header>
      <section :class="[$options.name + '__related--wrap', 'padding__all--m']">
        <LazyBookTile
          v-for="(book, index) in booksRelated"
          :key="index"
          :book="book"
        />
      </section>
    </aside>
  </main>
</template>
<script>
export default {
  name: "Detail",
  computed: {
    booksRelated() {
      let results = [];
      this.book.author.forEach((author) => {
        results.push(
          this.$store.state.books.filter((book) =>
            book.author.some(
              (item) => item.includes(author) && book !== this.book
            )
          )
        );
      });
      return [...new Set(results.flat())];
    },
    bookNext() {
      let index = this.$store.state.books.findIndex((element, index) => {
        if (element.slug === this.book.slug) {
          return true;
        }
      });
      index += 1;
      if (index < this.$store.state.books.length) {
        return this.$store.state.books[index].slug;
      } else {
        return null;
      }
    },
    bookPrev() {
      let index = this.$store.state.books.findIndex((element, index) => {
        if (element.slug === this.book.slug) {
          return true;
        }
      });
      index -= 1;
      if (index >= -0) {
        return this.$store.state.books[index].slug;
      } else {
        return null;
      }
    },
  },
  data() {
    return {
      book: this.$store.state.books.filter(
        (book) => book.slug === this.$route.params.slug
      )[0],
    };
  },
  head() {
    return {
      title: this.book.title + " | These Kids Read",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.book.description,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.book.description,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.book.description,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.Detail {
  --size: var(--width__xs);
  @include breakpoint(m) {
    --size: var(--width__s);
  }
  @include breakpoint(l) {
    --size: var(--width__m);
  }
  &__wrap {
    @media (orientation: landscape) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @include breakpoint(xl) {
      padding-bottom: var(--size__xxxl);
      padding-top: var(--size__xxxl);
    }
  }
  figure {
    align-self: start;
    position: relative;
  }
  &__nav {
    align-items: center;
    display: flex;
    left: calc(var(--size__m) * -1);
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100vw;
    z-index: 99;
  }
  &__img {
    align-items: center;
    display: inline-flex;
    height: var(--size);
    justify-content: center;
    position: relative;
    width: var(--size);
    img {
      @include smooth;
      max-height: var(--size);
      position: relative;
      @media (hover: hover) {
        &:hover {
          transform: perspective(var(--size)) rotateY(-7.5deg)
            translateY(calc(var(--size__s) * -1)) rotateX(3.75deg);
        }
      }
    }
    svg {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &__description {
    align-self: center;
    @media (orientation: landscape) {
      padding: var(--size__l);
      padding-right: var(--size__xxxl);
      padding-top: 0;
      text-align: left;
    }
    h1 {
      &:after,
      &:before {
        opacity: 0.5;
      }
      &:after {
        content: "\200a”";
      }
      &:before {
        content: "“\200a";
        @media (orientation: landscape) {
          margin-left: calc(var(--size__m) * -1);
        }
      }
    }
    h2 {
      font-weight: normal;
    }
    p {
      @media (orientation: portrait) {
        margin-left: auto;
        margin-right: auto;
      }
      max-width: 56ch;
    }
  }
  &__related {
    &--wrap {
      display: grid;
      grid-gap: var(--size__m);
      place-items: center;
      @include breakpoint(xsl) {
        grid-template-columns: repeat(auto-fit, minmax(var(--width__xs), 1fr));
      }
      @include breakpoint(l) {
        grid-template-columns: repeat(auto-fit, minmax(var(--width__s), 1fr));
      }
    }
  }
}
</style>

<template>
  <main :class="$options.name">
    <article>
      <header class="type__align--center">
        <picture>
          <source
            sizes="(min-width: 99rem) 1920px, (min-width: 63rem) 1280px, (min-width: 29rem) 640px, 320px"
            :srcset="
              (img + '?w=320&fm=webp 320w',
              img + '?w=640&fm=webp 640w',
              img + '?w=1280&fm=webp 1280w',
              img + '?w=1920&fm=webp 1920w')
            "
            type="image/webp"
          />
          <source
            sizes="(min-width: 99rem) 1920px, (min-width: 63rem) 1280px, (min-width: 29rem) 640px, 320px"
            :srcset="
              (img + '?w=640 640w',
              img + '?w=1280 1280w',
              img + '?w=1920 1920w')
            "
          />
          <img alt="Our smiling family" :src="img + '?w=320'" />
        </picture>
        <section
          class="oomph__v--l padding__bottom--xxl padding__left--l padding__right--l padding__top--xxl width__ml"
        >
          <h1 class="color__type--brand type__align--center">
            We read great books together
          </h1>
          <p>
            We try and go to the library as often as possible to find new—and
            favorite—books to sit back and sink into. Books are amazing
            transformative devices that expand our minds and we wouldn't be the
            same without them.
          </p>
          <p>
            Help us find new books by suggesting ones we haven't read or follow
            our journey online, and hopefully you'll find a good read for you
            and your kids. Happy reading!
          </p>
          <a
            class="button"
            href="mailto:thesekidsread@gmail.com?subject=You should read this book next…"
            >Suggest a Book<Icon class="margin__left--s" name="suggest"
          /></a>
        </section>
      </header>
      <section
        class="border__top color__bg--brand--ghost color__border--brand--light padding__bottom--xxl padding__top--xxl"
      >
        <section
          class="oomph__v--l padding__left--l padding__right--l width__ml"
        >
          <h2 class="color__type--base--mid">Jared (Dad)</h2>
          <p class="margin__top--m">
            Builds
            <a href="http://jaredpendergraft.com" rel="noopener" target="_blank"
              >web-things</a
            >
            and loves books with silly stories and great illustrations. His
            favorite authors include
            <nuxt-link :to="{ name: 'authors', query: { q: 'Oliver Jeffers' } }"
              >Oliver Jeffers</nuxt-link
            >
            and
            <nuxt-link :to="{ name: 'authors', query: { q: 'Luke Pearson' } }"
              >Luke Pearson</nuxt-link
            >.
          </p>
          <h2 class="color__type--base--mid">Allison (Mom)</h2>
          <p class="margin__top--m">
            Loves books that rhyme and have beautiful artwork. She’s drawn to
            the classics and often digs around at her mom’s house for books from
            her childhood to share with the kids.
          </p>
          <h2 class="color__type--base--mid">Avery</h2>
          <p class="margin__top--m">
            Is
            <a href="http://averymirabelle.com" rel="noopener" target="_blank"
              >already an artist</a
            >
            and loves comics—like
            <nuxt-link to="/books/smile">Smile</nuxt-link> and
            <nuxt-link to="/books/sisters">Sisters</nuxt-link>—and stories of
            adventure including <em>Hilda</em> and <em>Harry Potter</em>.
          </p>
          <h2 class="color__type--base--mid">Ezra</h2>
          <p class="margin__top--m">
            Is the
            <a href="http://ezrapendergraft.com" rel="noopener" target="_blank"
              >oldest</a
            >
            five-year-old I know and marvels at any book with a dinosaur or
            backhoe in it. He especially loves
            <nuxt-link
              to="/books/richard-scarry-s-cars-and-trucks-and-things-that-go"
              >Richard Scarry’s Cars and Trucks and Things That Go</nuxt-link
            >.
          </p>
        </section>
      </section>
    </article>
  </main>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      img:
        "https://images.ctfassets.net/cuehicrlqnvu/1z7fgfLDKO0IvaINQmcfmW/6e435f7f726b47b5ce1232fcd066f087/tkr-about.jpg",
    };
  },
  head() {
    return {
      title: "About Us | TheseKidsRead",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Who we are and why we love to read",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Who we are and why we love to read",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "Who we are and why we love to read",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.About {
  img {
    width: 100%;
  }
  p {
    text-align: left;
  }
  .width__ml {
    @include breakpoint(xl) {
      max-width: var(--width__l);
    }
  }
}
</style>

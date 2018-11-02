<template>
  <main>
    <Head
      title="About Us | These Kids Read"
      description="Learn more about the family behind the site"
      keywords="these kids read, jared pendergraft, kids books, great book for kids"
      image="https://thesekidsread.com/img/social.jpg"
      url="https://thesekidsread.com/about"
    />
    <article>
      <header>
        <section>
          <h1>We read great books together</h1>
          <p>We try and go to the library as often as possible to find new—and favorite—books to sit back and sink into. Books are amazing transformative devices that expand our minds and we wouldn't be the same without them.</p>
          <p>Help us find new books by suggesting ones we haven't read or follow our journey online, and hopefully you'll find a good read for you and your kids. Happy reading!</p>
        </section>
      </header>
      <section>
        <h3>Jared (Dad)</h3>
        <p>Builds <a href="http://jaredpendergraft.com" target="_blank">web-things</a> and loves books with silly stories and great illustrations. His favorite authors include <AuthorLink author="Oliver Jeffers">Oliver Jeffers</AuthorLink> and <AuthorLink author="Luke Pearson">Luke Pearson</AuthorLink>.</p>
        <h3>Allison (Mom)</h3>
        <p>Loves books that rhyme and have beautiful artwork. She’s drawn to the classics and often digs around at her mom’s house for books from her childhood to share with the kids.<p>
        <h3>Avery</h3>
        <p>Is <a href="http://averymirabelle.com" target="_blank">already an artist</a> and loves comics—like <router-link to="/books/smile">Smile</router-link> and <router-link to="/books/sisters">Sisters</router-link>—and stories of adventure including <em>Hilda</em> and <em>Harry Potter</em>.</p>
        <h3>Ezra</h3>
        <p>Is the <a href="http://ezrapendergraft.com" target="_blank">oldest</a> five-year-old I know and marvels at any book with a dinosaur or backhoe in it. He especially loves <router-link to="/books/richard-scarry-s-cars-and-trucks-and-things-that-go">Richard Scarry’s Cars and Trucks and Things That Go</router-link>.</p>
      </section>
    </article>
  </main>
</template>
<script>
import AuthorLink from "@/components/AuthorLink.vue";
export default {
  name: "About",
  components: { AuthorLink }
};
</script>
<style lang="scss" scoped>

article header {
  align-items: center;
  background-image: url("../assets/img/about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 9.5em);
  padding: rem(32);
  position: relative;
  text-shadow: 0 0.0625rem 0.125rem rgba(black, 0.5);
  @include breakpoint(xs-only) {
    background-position: 40% center;
  }
  @include breakpoint(xsl) {
    min-height: calc(100vh - 7em);
  }
  @include breakpoint(m) {
    min-height: calc(100vh - 4.5em);
  }
  &:before {
    background-color: var(--highlight);
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0.625;
    position: absolute;
    right: 0;
    top: 0;
  }
  section {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: rem(960);
    h1 {
      text-align: center;
    }
    > * + * {
      margin-top: rem(32);
    }
  }
}

article section {
  padding: rem(32);
  > * {
    margin-left: auto;
    margin-right: auto;
    max-width: rem(960);
    + * {
      margin-top: rem(16);
    }
    + h3 {
      margin-top: rem(32);
    }
  }
}
h3 {
  color: var(--base-mid);
}
p a {
  border-bottom: rem(1) solid;
  color: var(--highlight);
  &:focus,
  &:hover {
    color: var(--base-mid);
  }
}
</style>
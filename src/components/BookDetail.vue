<template>
  <section class="book">
    <figure>
      <Icon v-if="!loaded" name="book" :size="16"/>
      <transition name="fade">
        <img @load="onLoaded" v-show="loaded" :src="img" :alt="'Cover image for “' + title + '”'"/>
      </transition>
    </figure>
    <figcaption>
      <header>
        <h1 class="title">{{ title }}</h1>
        <p class="author">By <span class="author__name" v-for="author in authors" v-bind:key="author"><AuthorLink :author="author">{{ author }}</AuthorLink></span></p>
      </header>
      <p>{{ description }}</p>
      <footer>
        <p>
          <a class="button" :href="buy" target="_blank">
            Buy Now
            <Icon name="buy" :size="16"/>
          </a>
        </p>
      </footer>
    </figcaption>
  </section>
</template>
<script>
import AuthorLink from "@/components/AuthorLink.vue";
import Icon from "@/components/Icon.vue";
export default {
  name: "BookDetail",
  components: { AuthorLink, Icon },
  data() {
    return {
      loaded: false
    };
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  },
  props: {
    authors: "",
    buy: "",
    description: "",
    img: "",
    title: ""
  }
};
</script>
<style lang="scss" scoped>

.book {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: rem(1280);
  padding: rem(32);
  > * {
    flex-grow: 1;
    padding: rem(16);
    @include breakpoint(s) {
      flex-basis: 50%;
      flex-shrink: 0;
    }
  }
  figure {
    align-self: stretch;
    color: var(--base-light);
    text-align: center;
    img {
      max-height: rem(240);
      @include breakpoint(m) {
        max-height: rem(480);
        max-width: rem(480);
      }
    }
  }
  figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    > * {
      max-width: rem(640);
      width: 100%;
    }
    > * + * {
      margin-top: rem(24);
    }
  }
  .title:before {
    margin-left: rem(-12);
  }
  .author {
    font-size: rem(24);
    line-height: rem(32);
    margin-top: rem(8);
  }
  .button .icon {
    margin-left: rem(8);
  }
}
</style>
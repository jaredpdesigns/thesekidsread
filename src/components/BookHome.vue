<template>
  <section class="book">
    <router-link :to="'/books/' + slug">
      <figure>
        <Icon v-if="!loaded" name="book" :size="16"/>
        <transition name="fade">
          <img @load="onLoaded" v-show="loaded" :src="scale(img)" :alt="'Cover image for “' + title + '”'"/>
        </transition>
      </figure>
      <figcaption>
        <h3 class="title">{{ title }}</h3>
        <p class="author">By <span class="author__name" v-for="author in authors" v-bind:key="author">{{ author }}</span></p>
      </figcaption>
    </router-link>
  </section>
</template>
<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "BookHome",
  components: { Icon },
  data() {
    return {
      loaded: false
    };
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    },
    scale(thing) {
      if (thing.includes("SL480")) {
        return thing.replace("SL480", "SL360");
      } else if (thing.includes("w=480")) {
        return thing.replace("w=480", "w=360");
      }
    }
  },
  props: {
    authors: "",
    img: "",
    slug: "",
    title: ""
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables";
.book a {
  display: flex;
  flex-direction: column;
  text-align: center;
  &:focus,
  &:hover {
    figure {
      transform: translateY(rem(-8));
    }
  }
  figure {
    @include smooth;
    color: var(--base-light);
    img {
      max-height: rem(240);
    }
  }
  figcaption {
    padding: rem(16);
    padding-bottom: 0;
  }
}
</style>
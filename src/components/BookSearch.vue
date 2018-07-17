<template>
  <li class="book">
    <router-link :to="'/books/' + slug">
      <figure>
        <Icon v-if="!loaded" name="book" :size="12"/>
        <transition name="fade">
          <img @load="onLoaded" v-show="loaded" :src="scale(img)" :alt="'Cover image for “' + title + '”'"/>
        </transition>
      </figure>
      <figcaption>
        <h3 class="title">{{ title }}</h3>
        <p class="author">By <span class="author__name" v-for="author in authors">{{ author }}</span></p>
      </figcaption>
    </router-link>
  </li>
</template>
<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'BookSearch',
  components: { Icon },
  data() { return {
    loaded: false
  }},
  methods: {
    onLoaded() { this.loaded = true },
    scale(thing) {
      if(thing.includes('SL480')){
        return thing.replace('SL480','SL96')
      }
      else if(thing.includes('w=480')){
        return thing.replace('w=480','w=96')
      }
    }
  },
  props: {
    authors: '',
    img: '',
    slug: '',
    title: ''
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/variables';
.book {
  border-bottom: rem(1) solid var(--base-light);
  list-style: none;
  &:last-child { border-bottom: none; }
  a {
    @include smooth;
    align-items: center;
    display: flex;
    height: rem(64);
    width: 100%;
    &:focus, &:hover {
      background-color: var(--highlight-light);
    }
  }
  figure {
    color: var(--base-light);
    flex-shrink: 0;
    flex-basis: rem(64);
    padding: rem(8);
    text-align: center;
    img {
      max-height: rem(48);
      max-width: rem(48);
    }
  }
  figcaption {
    flex-grow: 1;
    flex-shrink: 1;
    padding: rem(8);
  }
  .title {
    font-size: rem(16);
    line-height: rem(16);
    &:before { margin-left: rem(-6); }
  }
  .author {
    font-size: rem(14);
    line-height: rem(16);
    margin-top: 0;
  }
}
</style>
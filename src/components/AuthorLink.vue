<template>
  <router-link :to="{ name: 'author', params: { authorSlug: slugify(author), authorFull: author }}">
    <slot/>
  </router-link>
</template>
<script>
export default {
  name: 'AuthorLink',
  methods: {
    slugify(thing) {
      let slug
      let lower = thing.toLowerCase()
      slug = lower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
      slug = slug.replace(/đ/gi, 'd')
      slug = slug.replace(/\s*$/g, '')
      slug = slug.replace(/\s+/g, '-')
      return slug
    }
  },
  props: {
    author: ''
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/variables';
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
      flex-shrink: 1;
    }
  }
  figure {
    text-align: center;
    img { max-height: rem(540); }
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
    > * + * { margin-top: rem(24); }
  }
  .title:before { margin-left: rem(-12); }
  .author {
    font-size: rem(24);
    line-height: rem(32);
    margin-top: rem(8);
  }
  .button .icon { margin-left: rem(8); }
}
</style>
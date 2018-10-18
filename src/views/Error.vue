<template>
  <main>
    <Head
      title="Oops! | These Kids Read"
      description="The book you’re looking for can’t be found."
      keywords="these kids read, jared pendergraft, kids books, great book for kids"
      image="https://thesekidsread.com/img/social.jpg"
      url="https://thesekidsread.com"
    />
    <article>
      <h1>Oops! Something went wrong.</h1>
      <p>Looks like the book you’re looking for wasn’t properly put away.</p>
      <router-link to="/" class="button">
        <Icon name="arrow-left" :size="16"/>
        Go Home
      </router-link>
    </article>
  </main>
</template>
<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "Error",
  components: { Icon }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables";
article {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 9.5em);
  padding: rem(32);
  @include breakpoint(xsl) {
    min-height: calc(100vh - 7em);
  }
  @include breakpoint(m) {
    min-height: calc(100vh - 4.5em);
  }
  h1 {
    color: var(--highlight);
  }
  > * + * {
    margin-top: rem(32);
  }
  .button .icon {
    margin-right: rem(8);
  }
}
</style>
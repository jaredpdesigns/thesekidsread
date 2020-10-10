<template>
  <footer
    :class="[
      $options.name,
      'border__top color__bg--contrast color__border--base--ghost padding__all--m type__align--center',
    ]"
  >
    <span class="color__type--base--mid type__family--display type__size--m-l">
      Made with <Icon name="heart" /> by
      <a href="https://jaredpendergraft.com" rel="noopener" target="_blank"
        >Jared Pendergraft</a
      >
    </span>
    <button
      class="color__type--base--mid margin__left--m margin__right--m type__family--display type__size--m-l"
      @click="setTheme"
    >
      <Icon class="margin__right--s" name="theme" />
      Change Theme
    </button>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    setTheme() {
      let root = document.getElementsByTagName("html")[0];
      if (root.getAttribute("data-theme") === "dark") {
        root.setAttribute("data-theme", "light");
        this.$store.dispatch("setTheme", "light");
      } else {
        root.setAttribute("data-theme", "dark");
        this.$store.dispatch("setTheme", "dark");
      }
    },
  },
};
</script>
<style lang="scss">
.Footer {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > span {
    a {
      @include smooth;
      font-weight: 600;
      &:focus,
      &:hover {
        color: var(--color__brand);
      }
    }
    svg {
      position: relative;
      top: var(--size__xxs);
    }
  }
  button {
    @include smooth;
    align-items: center;
    display: inline-flex;
    font-weight: 600;
    &:focus,
    &:hover {
      color: var(--color__brand);
    }
  }
}
</style>

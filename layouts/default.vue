<template>
  <Icon
    class="Loader color__type--brand"
    v-if="loading"
    name="book"
    :size="28"
  />
  <div v-else>
    <LazyHeader />
    <Nuxt />
    <LazyFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "og:url",
          property: "og:url",
          content: this.$store.state.domain + this.$route.path,
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: this.$store.state.domain + this.$route.path,
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: this.$store.state.domain + this.$route.path,
        },
      ],
    };
  },
  methods: {
    setInitialTheme() {
      let root = document.getElementsByTagName("html")[0];
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.setAttribute("data-theme", "dark");
        this.$store.dispatch("setTheme", "dark");
      } else {
        root.setAttribute("data-theme", "light");
        this.$store.dispatch("setTheme", "light");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.setInitialTheme();
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          this.setInitialTheme();
        });
      this.loading = false;
    });
  },
};
</script>
<style lang="scss">
.Loader {
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<template>
  <div id="app">
    <header role="main">
      <router-link to="/" class="logo" replace><Icon name="logo"/></router-link>
      <nav>
        <router-link to="/about">
          About
          <Icon name="book" :size="14"/>
        </router-link>
        <a href="mailto:thesekidsread@gmail.com?subject=You should read this book next…">
          Suggest
          <Icon name="suggest" :size="14"/>
        </a>
        <a class="social" href="https://twitter.com/thesekidsread" target="_blank" rel="noopener" title="Follow us on Twitter">
          <Icon name="twitter" :size="20"/>
        </a>
        <a class="social" href="https://www.facebook.com/thesekidsread/" target="_blank" rel="noopener" title="Follow us on Facebook">
          <Icon name="facebook" :size="20"/>
        </a>
        <button class="themeSwitch" @click="updateTheme">
          <Icon name="theme" :size="16"/>
        </button>
      </nav>
      <Search/>     
    </header>
    <router-view/>
  </div>
</template>
<script>
import Icon from "@/components/Icon.vue";
import Search from "@/components/Search.vue";
export default {
  components: { Icon, Search },
  computed: {
    dark() {
      return this.$store.state.dark;
    }
  },
  methods: {
    switchDark() {
      let root = document.getElementsByTagName("html")[0];
      root.classList.add("themeDark");
      this.$store.dispatch("updateTheme", true);
    },
    updateTheme() {
      let root = document.getElementsByTagName("html")[0];
      if (this.dark) {
        root.classList.remove("themeDark");
        this.$store.dispatch("updateTheme", false);
      } else {
        root.classList.add("themeDark");
        this.$store.dispatch("updateTheme", true);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let today = new Date();
      if (today.getHours() >= 18 || today.getHours() <= 6) {
        this.switchDark();
      }
    });
  }
};
</script>
<style lang="scss">
@import url("https://use.typekit.net/fbk7qer.css");
@import "assets/css/variables";

:root {
  --hue-base: 220;
  --hue-highlight: 175;
  --base: hsl(var(--hue-base), 12%, 12%);
  --base-mid: hsl(var(--hue-base), 12%, 50%);
  --base-upper: hsl(var(--hue-base), 12%, 75%);
  --base-light: hsl(var(--hue-base), 12%, 88%);
  --bg: hsl(var(--hue-base), 12%, 98%);
  --contrast: white;
  --highlight-dark: hsl(var(--hue-highlight), 100%, 32%);
  --highlight: hsl(var(--hue-highlight), 100%, 38%);
  --highlight-mid: hsl(var(--hue-highlight), 50%, 64%);
  --highlight-light: hsl(var(--hue-highlight), 50%, 96%);
}

:root.themeDark {
  --base-mid: hsl(var(--hue-base), 12%, 62%);
  --base-light: hsl(var(--hue-base), 12%, 25%);
  --base: white;
  --bg: hsl(var(--hue-base), 12%, 16%);
  --contrast: hsl(var(--hue-base), 12%, 8%);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
}

html {
  background-color: var(--bg);
  color: var(--base);
  font-family: "proxima-nova", sans-serif;
  height: 100%;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

::selection {
  background-color: var(--highlight);
  color: var(--contrast);
}

figure {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  img {
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }
}

h1,
h2,
h3,
h4 {
  font-family: "proxima-soft", sans-serif;
}

h1 {
  font-size: rem(30);
  line-height: rem(32);
}

h2 {
  font-size: rem(24);
  line-height: rem(32);
}

h3 {
  font-size: rem(22);
  line-height: rem(24);
}

h4,
p {
  font-size: rem(18);
  line-height: rem(32);
}
nav a,
input,
button {
  font-size: rem(16);
  line-height: rem(24);
}
input {
  appearance: none;
  &::placeholder {
    color: var(--base-upper);
  }
  &:focus::placeholder {
    color: var(--base-mid);
  }
}
button {
  appearance: none;
  background-color: transparent;
  cursor: pointer;
}
a {
  @include smooth;
  color: inherit;
  text-decoration: none;
  &:focus,
  &:hover {
    color: var(--highlight);
  }
}
.title {
  color: var(--highlight);
  &:after,
  &:before {
    opacity: 0.375;
  }
  &:after {
    content: "”";
  }
  &:before {
    content: "“";
  }
}
.author {
  color: var(--base-mid);
  font-family: "proxima-soft", sans-serif;
  margin-top: rem(4);
  &__name {
    font-weight: 600;
  }
  &__name + *:before {
    content: " & ";
    font-weight: normal;
  }
}
.book > a {
  text-decoration: none;
}
nav > * {
  color: var(--base-mid);
  font-family: "proxima-soft", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}
main {
  margin-top: rem(154);
  @include breakpoint(xsl) {
    margin-top: rem(112);
  }
  @include breakpoint(m) {
    margin-top: rem(72);
  }
}
.button {
  @include smooth;
  align-items: center;
  background-color: var(--highlight);
  border-radius: rem(8);
  color: white;
  display: inline-flex;
  padding: rem(8) rem(16);
  &:focus,
  &:hover {
    background-color: var(--highlight-dark);
    color: white;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in, transform 0.375s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(rem(-4));
}
</style>
<style lang="scss" scoped>
header[role="main"] {
  align-items: center;
  background-color: var(--contrast);
  border-bottom: rem(1) solid var(--base-light);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: rem(16);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  .logo {
    @include smooth;
    align-items: center;
    color: var(--highlight);
    display: inline-flex;
    justify-content: center;
    width: 100%;
    @include breakpoint(xsl) {
      width: auto;
    }
    &:focus {
      transform: scale(1.03125);
    }
  }
  nav {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    margin-top: rem(16);
    width: 100%;
    @include breakpoint(xsl) {
      margin-top: 0;
      width: auto;
    }
  }
  nav > * {
    @include smooth;
    align-items: center;
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;
    margin-right: rem(16);
    @include breakpoint(m) {
      margin-right: rem(32);
    }
    &:focus,
    &:hover {
      color: var(--highlight);
    }
    .icon {
      margin-left: rem(8);
      opacity: 0.75;
      &:focus,
      &:hover {
        opacity: 1;
      }
    }
    &.social,
    &.themeSwitch {
      height: rem(48);
      margin-right: 0;
      width: rem(48);
      .icon {
        margin-left: 0;
      }
    }
  }
}
</style>
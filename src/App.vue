<template>
  <div id="app">
    <header role="main">
      <router-link to="/" class="logo" replace><Icon name="logo"/></router-link>
      <nav>
        <router-link to="/about/">
          About
          <Icon name="book" :size="14"/>
        </router-link>
        <a href="mailto:thesekidsread@gmail.com?subject=You should read this book next…">
          Suggest
          <Icon name="suggest" :size="14"/>
        </a>
        <a href="#" target="_blank">
          <Icon name="twitter" :size="20"/>
        </a>
        <a href="#" target="_blank">
          <Icon name="facebook" :size="20"/>
        </a>
      </nav>
      <Search/>
    </header>
    <router-view/>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue'
import Search from '@/components/Search.vue'
export default {
  components: { Icon, Search }
}
</script>
<style lang="scss">
@import url("https://use.typekit.net/fbk7qer.css");
@import 'assets/css/variables';

:root {
  --hue: 175;
  --base: hsl(var(--hue),4%,12%);
  --base-mid: hsl(var(--hue),4%,50%);
  --base-upper: hsl(var(--hue),4%,75%);
  --base-light: hsl(var(--hue),4%,88%);
  --bg: hsl(var(--hue),4%,98%);
  --contrast: white;
  --highlight: hsl(var(--hue),100%,38%);
  --highlight-mid: hsl(var(--hue),50%,64%);
  --highlight-light: hsl(var(--hue),50%,96%);
}

*, *:before, *:after {
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

h1, h2, h3, h4 { font-family: "proxima-soft", sans-serif; }

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

h4, p {
  font-size: rem(18);
  line-height: rem(32);
}
nav a, input, button {
  font-size: rem(16);
  line-height: rem(24);
}
input {
  appearance: none;
  &::placeholder { color: var(--base-upper); }
  &:focus::placeholder { color: var(--base-mid); }
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
  &:focus, &:hover { color: var(--highlight); }
}
.title {
  color: var(--highlight);
  &:after, &:before { opacity: 0.375; }
  &:after { content: "”" }
  &:before { content: "“" }
}
.author {
  color: var(--base-mid);
  font-family: "proxima-soft", sans-serif;
  margin-top: rem(4);
  &__name {
    font-weight: 600;
  }
  &__name + *:before {
    content: ' & ';
    font-weight: normal;
  }
}
.book > a {
  text-decoration: none;
}
nav a {
  color: var(--base-mid);
  font-family: "proxima-soft", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}
main {
  margin-top: rem(154);
  @include breakpoint(xsl) { margin-top: rem(112); }
  @include breakpoint(m) { margin-top: rem(72); }
}
.button {
  @include smooth;
  align-items: center;
  background-color: var(--highlight);
  border-radius: rem(8);
  color: var(--contrast);
  display: inline-flex;
  padding: rem(8) rem(16);
  &:focus, &:hover {
    background-color: var(--highlight-mid);
    color: var(--contrast);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in, transform 0.375s ease-in;
}

.fade-enter, .fade-leave-to  {
  opacity: 0;
  transform: translateY(rem(-4));
}
</style>
<style lang="scss" scoped>
@import 'assets/css/variables';
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
    @include breakpoint(xsl) { width: auto; }
    &:focus {
      transform: scale(1.03125);
    }
  }
  nav {
    align-items: center;
    display: inline-flex;
    @include breakpoint(xs-only) { margin-top: rem(16); }
  }
  nav a {
    align-items: center;
    display: inline-flex;
    margin: 0 rem(16);
    .icon {
      margin-left: rem(8);
      opacity: 0.75;
    }
    &:focus &:hover {
      .icon { opacity: 1; }
    }
  }
}
</style>
import { books } from "./data/books";
let dynamicBooks = () => {
  return new Promise((resolve) => {
    resolve(books.map((book) => `books/${book.slug}`));
  });
};

export default {
  target: "static",
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "These Kids Read",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Our family reads great books together",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "jared pendergraft, these kids read, jared pendergraft, kids books, great book for kids",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "These Kids Read",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Our family reads great books together",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://thesekidsread.jaredpendergraft.com/",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/img/social.jpg",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "photo",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "jaredpdesigns",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "These Kids Read",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: "Our family reads great books together",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://thesekidsread.jaredpendergraft.com/",
      },
      {
        hid: "twitter:image:src",
        property: "twitter:image:src",
        content: "https://thesekidsread.jaredpendergraft.com/img/social.jpg",
      },
      {
        name: "theme-color",
        content: "#00C2B2",
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black translucent",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "These Kids Read",
      },
      {
        name: "msapplication-TileImage",
        content: "/img/icons/msapplication-icon-144x144.png",
      },
      {
        name: "msapplication-TileColor",
        content: "#00C2B2",
      },
      {
        name: "google-site-verification",
        content: "6huOtU9q3PYnk3Rt1yJsCLU6uHn6NnwwmI2oZf_aYNk",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://thesekidsread.jaredpendergraft.com",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "alternate icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "mask-icon",
        href: "/img/icons/safari-pinned-tab.svg",
        color: "#00C2B2",
      },
      { rel: "manifest", href: "/manifest.json" },
      {
        rel: "apple-touch-icon",
        href: "/img/icons/apple-touch-icon-152x152.png",
      },
      {
        rel: "preconnect",
        href: "https://use.typekit.net",
      },
      {
        rel: "preload",
        href: "https://use.typekit.net/fbk7qer.css",
        as: "style",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/fbk7qer.css",
      },
      {
        rel: "preconnect",
        href: "https://www.google-analytics.com",
      },
      {
        rel: "preload",
        href: "https://www.googletagmanager.com/gtag/js?id=UA-58477499-1",
        as: "script",
        crossorigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://www.google.com",
      },
      {
        rel: "preload",
        href: "/js/google-analytics.js",
        as: "script",
        crossorigin: "anonymous",
      },
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-58477499-1",
        defer: true,
      },
      {
        src: "/js/google-analytics.js",
        defer: true,
      },
    ],
  },

  css: [
    "@/assets/css/reset.scss",
    "@/assets/css/helpers.scss",
    "@/assets/css/base.scss",
  ],
  styleResources: {
    scss: ["@/assets/css/variables.scss"],
  },

  plugins: ["@/plugins/vue-plugins.js"],

  components: true,

  modules: ["@nuxtjs/style-resources", "@nuxtjs/sitemap"],

  generate: {
    routes: dynamicBooks,
    fallback: true,
  },

  sitemap: {
    hostname: "https://thesekidsread.jaredpendergraft.com",
    gzip: true,
    routes: dynamicBooks,
  },
};

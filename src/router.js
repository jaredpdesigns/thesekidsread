import Vue from "vue";
import Router from "vue-router";
const About = () => import("@/views/About");
const Author = () => import("@/views/Author");
const Book = () => import("@/views/Book");
const Error = () => import("@/views/Error");
const Home = () => import("@/views/Home");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Error
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/books/:slug",
      name: "book",
      component: Book
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/author/:authorSlug",
      name: "author",
      component: Author,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

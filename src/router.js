import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Author from './views/Author.vue'
import Book from './views/Book.vue'
import Home from './views/Home.vue'
import Error from './views/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'error',
      component: Error
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books/:slug',
      name: 'book',
      component: Book
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/author/:authorSlug',
      name: 'author',
      component: Author,
      props: true
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
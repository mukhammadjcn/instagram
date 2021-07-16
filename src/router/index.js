import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})

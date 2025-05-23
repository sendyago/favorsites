import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: require('../views/home/index.vue').default
  },
  {
    path: '/about',
    name: 'about',
    component: require('../views/AboutView.vue').default
  },
  {
    path: '/*', redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

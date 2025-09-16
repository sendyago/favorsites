import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: require('../views/home/index.vue').default
    },
    {
        path: '/home/view',
        component: require('../views/home/index.vue').default
    },
    {
        path: '/*',
        redirect: '/'
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
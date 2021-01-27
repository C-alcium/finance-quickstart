import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/commonterms',
        name: 'Common Terms',
        component: () => import(/* webpackChunkName: "common-terms" */ '../views/CommonTerms.vue')
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import(/* webpackChunkName: "faq" */ '../views/PageNotFound.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

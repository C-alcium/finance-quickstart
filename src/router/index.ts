import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export interface RouteConfiguration {
    includeInMenu: boolean;
}

export type ConfiguredRouteRecord = RouteConfiguration & RouteRecordRaw 

const routes: Array<ConfiguredRouteRecord> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        includeInMenu: true
    },
    {
        path: '/commonterms',
        name: 'Common Terms',
        component: () => import(/* webpackChunkName: "common-terms" */ '../views/CommonTerms.vue'),
        includeInMenu: true
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue'),
        includeInMenu: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import(/* webpackChunkName: "faq" */ '../views/PageNotFound.vue'),
        includeInMenu: false
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

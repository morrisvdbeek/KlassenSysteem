import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/views/HomePage.vue'
import Contact from '@/views/ContactPage.vue'
import Login from '@/views/LoginPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    } 
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

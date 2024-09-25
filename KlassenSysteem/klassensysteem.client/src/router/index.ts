import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Contact from '@/views/ContactPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
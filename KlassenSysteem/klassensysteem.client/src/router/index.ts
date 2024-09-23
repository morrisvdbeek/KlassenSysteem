import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import About from '@/views/AboutPage.vue'
import Contact from '@/views/ContactPage.vue'
import Registration from '@/views/RegistrationPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
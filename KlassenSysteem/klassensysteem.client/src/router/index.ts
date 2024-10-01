import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/RegistrationPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';
import Login from '@/views/LoginPage.vue';
import Register from '@/views/RegistrationPage.vue';
import Dashboard from '@/views/DashboardPage.vue';
import Lessons from '@/views/LessonPage.vue';  

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
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/lessons',
        name: 'Lessons',
        component: Lessons,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

import axios from 'axios';

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token) {
            next('/login');
        } else {
            try {
                const response = await axios.get('https://localhost:7152/api/Login/validate-token', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    next();
                } else {
                    next('/login');
                }
            } catch (error) {
                next('/login');
            }
        }
    } else {
        next();
    }
});

export default router;

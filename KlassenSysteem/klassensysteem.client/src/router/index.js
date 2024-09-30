import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';
import Login from '@/views/Login.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
<<<<<<< Updated upstream
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
=======
>>>>>>> Stashed changes
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
//# sourceMappingURL=index.js.map
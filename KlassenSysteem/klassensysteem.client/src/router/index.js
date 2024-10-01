import { createRouter, createWebHistory } from 'vue-router';
import Contact from '@/views/ContactPage.vue';
import Home from '@/views/HomePage.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
//# sourceMappingURL=index.js.map
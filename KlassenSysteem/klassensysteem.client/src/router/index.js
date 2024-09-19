import { createRouter, createWebHistory } from 'vue-router';
import About from '@/views/AboutPage.vue';
import Contact from '@/views/ContactPage.vue';
const routes = [
    {
        path: '/about',
        name: 'About',
        component: About
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
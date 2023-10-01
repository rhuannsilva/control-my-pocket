import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    
    {
        path: '/register',
        name: 'Home',
        component: () => import('./views/register.vue')
    },
    {
        path: '/',
        name: 'Login',
        component: () => import('./views/login.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./views/dashboard.vue')
    },
    {
        path: '/create-expense',
        name: 'Expense',
        component: () => import('./views/form.vue')
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
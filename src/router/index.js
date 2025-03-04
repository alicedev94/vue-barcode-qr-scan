import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import OtherModuleView from '../views/OtherModuleView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/module/:id',
        name: 'OtherModule',
        component: OtherModuleView,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');

            if (!token) {   // validate rol for example
                next({ name: 'Home' });
            } else {
                next();
            }
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 

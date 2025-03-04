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
        path: '/other-module',
        name: 'OtherModule',
        component: OtherModuleView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 
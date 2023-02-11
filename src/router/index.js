import {
    createRouter,
    // 函数用来创建一个路由实例
    createWebHashHistory
    // 用来创建一个基于哈希路由的历史对象
} from 'vue-router'

import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFound from '~/pages/404.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }

]

// 这段代码定义了一个路由器，该路由器使用createWebHashHistory()创建的历史记录对象和给定的路由（routes）来定义路由。
// createWebHashHistory()创建的历史记录对象会把URL的片段存储在window.location.hash中，以支持前进和后退按钮和书签。
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
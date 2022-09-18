import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Post from './pages/Post.vue'
import Profile from './pages/Profile.vue'
import Product from './pages/Product.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: Home, name:'home' },
        { path: '/about', component: About, name:'about' },
        // { path: '/posts/:slug', component: Post, name:'' },
        { path: '/posts/:postId(\\d+)', component: Post, name:'single' },
        { path: '/@:username', component: Profile, name:'profile' },
        { path: '/products/:productId?', component: Product, name:'product' },
        { path: '/:match(.*)', component: NotFound, name:'404' },
    ]
})

export default router

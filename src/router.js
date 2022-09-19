import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Post from './pages/Post.vue'
import Profile from './pages/Profile.vue'
import Product from './pages/Product.vue'
import NotFound from './pages/NotFound.vue'
import HomeLayout from './layouts/HomeLayout.vue'
import AdminLayout from './layouts/AdminLayout.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes:  [
      {
        path: '/',
        component: HomeLayout,
        children: [
          {
            path: '',
            component: Home,
            name: 'home',
            alias: ['/home']
          },
          {
            path: 'about',
            component: About,
            name: 'about' 
          },
          {
            path: 'posts',
            component: Post,
            name: 'post-index' 
          },
          {
            path: 'posts/:postId(\\d+)',
            component: Post,
            name: 'posts-show',
            props: true
          },
          {
            path: 'products/:productId?',
            component: Product,
            name: 'products-show',
          },
        ]
      },
      {
        path: '/admin',
        component: AdminLayout,
        children: [
          {
            path: '@:username', // /admin/@tofiq
            component: Profile,
            alias: ['@:username/profile', ':username/posts'] // /admin/@tofiq/profile - /admin/tofiq/posts
          },
        ]
      },
      {
        path: '/404',
        component: NotFound
      },
      {
        path: '/:match(.*)',
        redirect: '/404'
      }
    ]
})

export default router

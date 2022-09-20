import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Post from './pages/Post.vue'
import Login from './pages/Login.vue'
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
            path: 'auth/login',
            component: Login,
            name: 'login',
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


router.beforeEach((to, from, next) => {
  if (to.name === 'products-show') {
    // return '/auth/login'
    // return { name: 'login' }
    
    // return next('/auth/login')
    return next({ name: "login" })
  }

  if (to.name === 'posts-show') {
    // return false
    return next(false)
  }
  return next()
})



// router.beforeResolve()
// router.afterEach()


export default router

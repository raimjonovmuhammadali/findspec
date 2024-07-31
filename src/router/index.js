import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categorys',
      name: 'categorys',
      component: () => import('../views/CategorysView.vue')
    },
    {
      path: '/categorys/:id',
      name: 'categorys:id',
      component: () => import('../views/categorys/[id].vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/JobsView.vue')
    },
    {
      path: '/signup',
      name:'signup',
      component: () => import('../views/auth/SignupView.vue')
    },
    {
      path: '/signin',
      name:'signin',
      component: () => import('../views/auth/SigninView.vue')
    },
    {
      path: '/profile',
      name:'profile',
      component: () => import('../views/user/ProfileView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/spec/:id',
      name: 'spec',
      component: () => import('../views/spec/[id].vue')
    },
    {
      path: '/lang',
      name: 'lang',
      component: () => import('../views/LangView.vue')
    },
    {
      path: '/messages',
      name:'messages',
      component: () => import('../views/user/MessagesView.vue')
    }
  ]
})

export default router

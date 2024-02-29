import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MeView from '@/views/MeView.vue'
import MessageView from '@/views/MessageView.vue'
import FindView from '@/views/FindView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/me',
      name: 'me',
      component: MeView
    },
    {
      path: '/find',
      name: 'find',
      component: FindView
    },
    {
      path: '/chat',
      name: 'chat',
      component: MessageView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

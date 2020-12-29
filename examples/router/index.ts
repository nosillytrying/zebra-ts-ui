import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../pages/home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: home
  },
  {
    path: '/button',
    component: () => import('../pages/button.vue')
  },
  {
    path: '/layout',
    component: () => import('../pages/layout.vue')
  },
  {
    path: '/color',
    component: () => import('../pages/color.vue')
  },
  {
    path: '/radio',
    component: () => import('../pages/radio.vue')
  },
  {
    path: '/notify',
    component: () => import('../pages/notify.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

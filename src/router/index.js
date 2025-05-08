import {
  createRouter,
  createWebHistory
} from 'vue-router'


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/home',
      name: 'home',
      component: () => import('@/components/home.vue'),
    },
    {
      path: '/zujian2',
      name: 'zujian2',
      component: () => import('@/view/zujian4.vue'),
    },
    {
      path: '/shouji',
      name: 'shouji',
      component: () => import('@/components/shouji.vue'),
    }
  ]
})

export default router
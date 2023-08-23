import { createRouter, createWebHashHistory } from 'vue-router'
import IntroView from '@/views/IntroView.vue'
import CvView from '@/views/CvView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IntroView
    },
    {
      path: '/cv',
      name: 'cv',
      component: CvView
    }
  ]
})

export default router

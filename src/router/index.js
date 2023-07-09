import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/admin-panel',
      name: 'admin-panel',
      props: { cybersec_block: 1 },
      component: () => import('../views/AdminPanelView.vue'),
    },
    {
      path: '/neutralization',
      name: 'neutralization',
      props: { cybersec_block: 2 },
      component: () => import('../views/NeutralizationView.vue'),
    },
    {
      path: '/monitoring',
      name: 'monitoring',
      props: { cybersec_block: 3 },
      component: () => import('../views/MonitoringView.vue'),
    },
  ],
})

router.afterEach((to, from) => {
  AOS.init()
})

export default router

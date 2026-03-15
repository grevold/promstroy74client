import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      //
      component: () => import('@/pages/Layouts/ShopLayout.vue'),
      children: [
        {
          path: '',
          name: 'shop-main',
          component: () => import('@/pages/MainPage/MainPage.vue'),
          meta: { requiresAuth: false },
        },
        {
          path: 'catalog',
          name: 'catalog',
          component: () => import('@/pages/CatalogPage/CatalogPage.vue'),
          meta: { requiresAuth: false },
        },
      ],
    },
  ],
})

export default router

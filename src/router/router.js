import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    redirect: to => "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/template01',
    name: 'template01',
    component: () => import('@/views/template01/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/template02',
    name: 'template02',
    component: () => import('@/views/template02/index.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

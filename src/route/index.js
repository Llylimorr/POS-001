import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path:'/products',
    name:'Product',
    component:()=> import('../views/Product.vue')
  },
  {
    path: '/pos',
    name: 'Pos',
    component: ()=> import('../views/Pos.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
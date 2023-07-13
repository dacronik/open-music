import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pop from '@/views/Pop.vue'
import Rock from '@/views/Rock.vue'
import Rap from '@/views/Rap.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pop',
    component: Pop
  },
  {
    path: '/rock',
    component: Rock
  },
  {
    path: '/rap',
    component: Rap
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

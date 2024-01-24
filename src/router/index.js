import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/Home',
      name: 'HomeView',
      
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/AddView',
      name: 'addview',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/ListView',
      name: 'listview',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/ModifyView',
      name: 'modifyview',
      component: ()=>import('../views/ModifyView.vue')
    }
  ]
})


export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
 
  {
    path: '/biblioteca',
    name: 'biblioteca',
    // route level code-splitting
    // this generates a separate chunk (biblioteca.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "biblioteca" */ '../views/Biblioteca.vue')
  },
  {
    path: '/psicopedagogia',
    name: 'psicopedagogia',
    // route level code-splitting
    // this generates a separate chunk (psicopedagogia.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "psicopedagogia" */ '../views/Psicopedagogia.vue')
  },
  {
    path: '/circulares',
    name: 'circulares',
    // route level code-splitting
    // this generates a separate chunk (circulares.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "circulares" */ '../views/Circulares.vue')
  },
  {
    path: '/ceal',
    name: 'ceal',
    // route level code-splitting
    // this generates a separate chunk (ceal.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ceal" */ '../views/Ceal.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

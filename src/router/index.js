import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientIndex from '../views/client/Index.vue'
import ClientList from '../views/client/List.vue'
import ClientGame from '../views/client/Game.vue'
import ClientLogin from '../views/client/Login.vue'
import ClientReg from '../views/client/Reg.vue'
import ClientShop from '../views/client/Shop.vue'
import ClientAbout from '../views/client/About.vue'
import AdminLogin from '../views/admin/Login.vue'
import AdminIndex from '../views/admin/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'clientIndex',
    component: ClientIndex
  },
  {
    path: '/list*',
    name: 'clientList',
    component: ClientList
  },
  {
    path: '/game/*',
    name: 'clientGame',
    component: ClientGame
  },
  {
    path: '/login',
    name: 'clientLogin',
    component: ClientLogin
  },
  {
    path: '/reg',
    name: 'clientReg',
    component: ClientReg
  },
  {
    path: '/shop',
    name: 'clientShop',
    component: ClientShop
  },
  {
    path: '/about',
    name: 'clientAbout',
    component: ClientAbout
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/index',
    name: 'adminIndex',
    component: AdminIndex
  },
  {
    path: '/admin',
    name: 'adminIndex',
    component: AdminIndex
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

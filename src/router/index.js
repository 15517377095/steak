import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientIndex from '../views/client/Index.vue'
import ClientList from '../views/client/List.vue'
import ClientGame from '../views/client/Game.vue'
import ClientLogin from '../views/client/Login.vue'
import ClientReg from '../views/client/Reg.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

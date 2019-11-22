import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientIndex from '../views/client/Index.vue'
import ClientList from '../views/client/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'clientIndex',
    component: ClientIndex
  },
  {
    path: '/list',
    name: 'clientList',
    component: ClientList
  },
  {
    path: '/list*',
    name: 'clientList',
    component: ClientList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

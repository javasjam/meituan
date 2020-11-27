import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router

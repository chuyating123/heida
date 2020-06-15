import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Advanced from '../views/Advanced'
import Finance from '../views/Finance'
import Record from '../views/Record'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Advanced',
    name: 'Advanced',
    component: Advanced
  },
  {
    path: '/Finance',
    name: 'Finance',
    component: Finance
  },
  {
    path: '/Record',
    name: 'Record',
    component: Record
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Test from '../views/Test.vue'
import Baby from '../views/Baby'
import Error from '../views/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    component: Home,
    name:'Home',
    children:[
      {
      path:'/Home/Baby',
      component:Baby
      }
    ]
  },
  {
    path:'/Detail',
    component:Detail,
  },
  {
    path:'/Test',
    component:Test,
    name:'Test',
    alias:'/abc'
  },
  {
    path:"/",
    redirect:'/Home'
  },{
    path:"*",
    component:Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

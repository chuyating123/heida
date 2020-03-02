import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from './../views/Movie'
import Music from './../views/Music'
import Book from './../views/Book'
import Photo from './../views/Photo'

Vue.use(VueRouter)

const routes = [
  {
    path:"/Movie",
    component:Movie,
    name:"Movie"
  },
  {
    path:"/Music",
    component:Music,
    name:"Music"
  },
  {
    path:"/Book",
    component:Book,
    name:"Book"
  },
  {
    path:"/Photo",
    component:Photo,
    name:"Photo"
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

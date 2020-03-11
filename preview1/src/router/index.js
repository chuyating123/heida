import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie'
import Music from '../views/Music'
import Book from '../views/Book'
import Photo from '../views/Photo'
import MovieDetail from '../views/MovieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path:"/Movie",
    name:"Movie",
    component:Movie
  },
  {
    path:"/Music",
    name:"Music",
    component:Music
  },
  {
    path:"/Book",
    name:"Book",
    component:Book
  },
  {
    path:"/Photo",
    name:"Photo",
    component:Photo
  },
  {
    path:"/MovieDetail",
    name:"MovieDetail",
    component:MovieDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

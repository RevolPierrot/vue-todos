import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from "@/components/Test";
import Authors from "@/components/Authors";
import Default from "@/components/Default";
import Movies from "@/components/Movies";
//...findet die Pade via @/src o.a. ../src//

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/authors',
    name: 'Author',
    component: Authors
  },
  {
    path: '/movies',
    name: 'Movie',
    component: Movies
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path :'*',
    component: Default
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

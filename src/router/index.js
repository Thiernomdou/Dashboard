import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashbord from '../views/Dashbord.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashbord',
    component: Dashbord
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (projects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/team',
    name: 'Team',
    // route level code-splitting
    // this generates a separate chunk (team.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

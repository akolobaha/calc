import Vue from 'vue'
import VueRouter from 'vue-router'
import cAgeDiff from '../components/calculators/time/c-age-diff.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'Dates delta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
		//component: () => import(/* webpackChunkName: "about"  '../views/About.vue'*/)
		component: cAgeDiff
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

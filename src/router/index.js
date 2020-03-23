import Vue from 'vue'
import VueRouter from 'vue-router'
import cAgeDiff from '../components/calculators/time/c-age-diff.vue'
import cPercent from '../components/calculators/numbers/c-percent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'Разница дат',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
		//component: () => import(/* webpackChunkName: "about"  '../views/About.vue'*/)
		component: cAgeDiff
	},
	{
		path: '/percent',
		name: 'Процент от числа',
		component: cPercent
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

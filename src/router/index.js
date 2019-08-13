import Vue from 'vue'
import Router from 'vue-router'
// @符号指的是src这个目录
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
		}, {
			path: '/city',
      name: 'City',
      component: City
		}]
})

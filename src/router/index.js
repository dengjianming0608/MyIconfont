import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import HomePage from '../components/homepage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/homepage',
      component: HomePage
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

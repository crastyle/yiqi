import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/login/login.vue'
//@import
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/',name: 'Login',component: Login}//@register
  ]
})

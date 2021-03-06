// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// rem
import './flexble.js'
// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "./styles/reset-ui.scss"
import resource from './resource'
import base from './base'
import { bus } from './bus'

import "vconsole"

Vue.config.productionTip = false

Vue.use(MintUI)

// 静态文件路径前缀
Vue.prototype.$preStatic = 'http://localhost:8080/static'

resource.interceports()

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入全局样式表
import './assets/css/global.css'
import './assets/iconfont/iconfont.js'
import './assets/logofont/icon.css'
Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

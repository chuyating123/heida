import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import js from './assets/js/rem'
import css from './assets/css/common.css'
import Avanced_font from './assets/Advanced-font/iconfont.css'
import Finance_font from './assets/Finance-font/iconfont.css'
import jiecheng_font from './assets/jiecheng-font/iconfont.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(VueRouter)
Vue.use(VueResource)
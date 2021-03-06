import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import js from './assets/js/rem'
import css from './assets/css/common.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

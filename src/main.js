import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.scss'
import util from './assets/js/util'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

document.getElementsByTagName("html")[0].className += " js";
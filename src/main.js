import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/js/jquery-ui.min.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

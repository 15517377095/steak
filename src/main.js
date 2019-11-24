import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// BootStrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//MDUI
import 'mdui/dist/css/mdui.min.css'
import 'mdui/dist/js/mdui.min.js'

// jQuery UI
import './assets/js/jquery-ui.min.js'

// jquery-validation
import 'jquery-validation/dist/jquery.validate.min.js'

// pace.js
import './assets/css/paceThemes/orange/pace-theme-minimal.css'
import './assets/js/pace.min.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

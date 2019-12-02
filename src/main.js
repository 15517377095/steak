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

// Muse-UI
import MuseUI from 'muse-ui/dist/muse-ui'
import 'muse-ui/dist/muse-ui.css'

// jQuery UI
import './assets/js/jquery-ui.min.js'

// jquery-validation
import 'jquery-validation/dist/jquery.validate.min.js'

// pace.js
import './assets/css/paceThemes/orange/pace-theme-minimal.css'
import './assets/js/pace.min.js'

// element ui
import ElementUI from 'element-ui/lib/index.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://101.200.132.176:8080/'
// axios.defaults.baseURL = 'http://localhost:8088/'
axios.defaults.withCredentials = true

Vue.prototype.$http = axios;

Vue.use(MuseUI);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

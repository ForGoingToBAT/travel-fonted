import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'popper.js'
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './vuex/store'
import Base64 from './util/Base64.js'

Vue.prototype.$Base64 = Base64;
Vue.prototype.$axios = axios

Vue.use(VueAxios, axios,Vuex)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

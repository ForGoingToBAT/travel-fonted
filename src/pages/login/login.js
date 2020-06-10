import Vue from 'vue'
import login from './login.vue'
import VueRouter from 'vue-router'
var router = new VueRouter()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#login',
	components: { login },
	template: '<login/>',
})

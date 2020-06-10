import Vue from 'vue'
import site from './site.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#site',
  components: { site },
  template: '<site/>'
})

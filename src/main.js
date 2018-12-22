import Vue from 'vue'
import App from './App.vue'

import mathjaxToolbar from './plugin/index.js'
Vue.use(mathjaxToolbar)

new Vue({
  el: '#app',
  render: h => h(App)
})

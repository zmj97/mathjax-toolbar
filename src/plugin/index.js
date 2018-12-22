'use strict';

import mathjaxToolbar from './mathjaxToolbar.vue'

const VueMathjaxToolbar = {
  install (Vue) {
    Vue.component('mathjax-toolbar', mathjaxToolbar)
  }
}

export default VueMathjaxToolbar
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../../vendor/bootstrap/js/bootstrap'
import '../../vendor/prettify'

Vue.config.productionTip = false
_386 = {
  fastLoad: process.env.NODE_ENV === 'development'
}

import '../../../node_modules/highlight.js/styles/xt256.css'

import '../../vendor/bootstrap/css/bootstrap.css'
import '../../vendor/bootstrap/css/bootstrap-responsive.css'
import '../../vendor/docs/docs.css'
import '../../vendor/prettify.css'

import '../../styles/global.less'
import { getLangQuery, i18n } from './utils/i18n'

window.lang = getLangQuery()

Vue.use(i18n)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

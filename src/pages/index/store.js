import Vue from 'vue'
import Promise from 'promise-polyfill';
if (!window.Promise) {
  window.Promise = Promise;
}
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})

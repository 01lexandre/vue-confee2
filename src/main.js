import Vue from 'vue'
import App from './app/Main.vue'
import router from './router'
import store from './vuex'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

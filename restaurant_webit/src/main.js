// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './registerServiceWorker'
Vue.config.productionTip = false
require('./assets/js/mainapp.js')
require('./assets/css/app.css')
require('./assets/css/mini-dark.min.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

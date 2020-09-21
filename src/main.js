import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import julietteService from './util/juliette'
import storageManager from './util/storageManager'

import VueTouch from 'vue-touch';
Vue.use(VueTouch);


import './assets/scss/main.scss'
import './assets/scss/nav.scss'
import './assets/scss/kachel.scss'
import './assets/scss/textSeite.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css'

Vue.config.productionTip = false
Vue.$julietteService = julietteService
Vue.$storageManager = storageManager

Object.defineProperty(Vue.prototype, '$julietteService', {
  get() {
    return julietteService
  }
})

Object.defineProperty(Vue.prototype, '$storageManager', {
  get() {
    return storageManager
  }
})

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  storageManager.test()
}

new Vue({
  created() {
    const html = document.documentElement
    html.setAttribute('lang', 'de')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/scss/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

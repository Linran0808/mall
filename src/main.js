import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
=======
import store from './store'
>>>>>>> origin/master

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  render: h => h(App),
  router
=======
  router,
  store,
  render: h => h(App)
>>>>>>> origin/master
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//解决移动端300ms延迟
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

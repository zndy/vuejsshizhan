import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from '@/event-bus2'

Vue.config.productionTip = false
Vue.use(Bus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

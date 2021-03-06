import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ColorPicker from './../packages/index'
Vue.use(ColorPicker)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

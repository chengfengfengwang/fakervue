import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import 'amfe-flexible';

//import fakervue from 'fakervue'
import 'fakervue/dist/fakervue.css'
import fakervue from 'fakervue'
Vue.use(fakervue)
//import myPlugin from './components/index'
//Vue.use(myPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

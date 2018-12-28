import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
Vue.use(Mint);
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './router/router.config'
const router=new VueRouter({
  routes
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

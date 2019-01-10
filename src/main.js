import Vue from 'vue'
import App from './App.vue'

//引入Mint-ui组件
import Mint from 'mint-ui'
Vue.use(Mint);

//配置axios
import Axios from 'axios'
//配置公共URL
//Axios.defaults.baseURL='https://localhost:8080/static/newList.json'
Vue.prototype.$axios=Axios;//放到原型链上全局使用

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './router/router.config'

const router=new VueRouter({
  routes
})

//引入vuex
import store from './store/index.js'

//引入自己定义的div和a组件
import MYDIV from './components/common/my-div'
import MYA from './components/common/my-a'

//注册全局组件
Vue.component(MYDIV.name,MYDIV);
Vue.component(MYA.name,MYA);


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

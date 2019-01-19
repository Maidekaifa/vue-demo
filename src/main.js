import Vue from 'vue'
import App from './App.vue'

//全局引入Mint-ui组件并挂载
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

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

//引入自己定义的组件
import MYDIV from './components/common/my-div'
import MYA from './components/common/my-a'
import NavBar from './components/common/navbar'

//注册全局组件
Vue.component(MYDIV.name,MYDIV);
Vue.component(MYA.name,MYA);
Vue.component(NavBar.name,NavBar);


//定义moment全局日期过滤器
import Moment from 'moment'
//{{'xxx' | covertTime('YYYY-MM-DD')}}		格式一
//{{'xxx' | covertTime('YYYY年MM月DD日')}}		格式二 	********由于格式可能不会固定，所以传两个参数data和formatStr**********
Vue.filter('covertTime',function(data,formatStr){
	return Moment(data).format(formatStr);
})


//引入vuePreview图片预览器
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

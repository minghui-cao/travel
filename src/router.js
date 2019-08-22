import Vue from 'vue'
import Router from 'vue-router'
//导入主要
import Header from './components/home/header.vue'
//导入城市
import City from './components/city/city.vue'
//导入详情页
import Detail from './components/detail/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Header},
    {path:'/city',component:City},
    {path:'/detail',component:Detail}
    
  ]
})

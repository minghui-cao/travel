import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import  './assets/js/rem.js'
import './assets/js/tap.js'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import axios from 'axios'
import store from './store.js'

//配置公共的请求头
axios.defaults.baseURL = 'http://127.0.0.1:5050';
axios.interceptors.response.use(function (res) {
  return res.data;
}, function (error) {
  console.log(error)
});
Vue.prototype.$http=axios
//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

//解决移动端300毫秒延迟事件
fastClick.attach(document.body)
//轮播图
Vue.use(VueAwesomeSwiper)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

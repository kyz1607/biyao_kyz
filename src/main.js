import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/css/swiper.min.css';
import '../static/css/reset.css';

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

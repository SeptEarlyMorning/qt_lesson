// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/iconfont.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import axios from 'axios';
// import QS from 'qs';
import api from '@/api';

// axios.defaults.baseURL = '/api';
// Vue.prototype.$axios = axios;
// Vue.prototype.qs = QS;
Vue.prototype.$api = api;

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
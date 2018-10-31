/**
 * @file 项目入口
 *
 * @author bigcui
 * 2017年8月31日
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import interceptors from './common/interceptors';
import $ from 'n-zepto';
// import logger from './common/logger';

import 'swiper/dist/css/swiper.css';
import '@/common/common.css';

import Element from 'element-ui'

Vue.use(Element);
// See SDK documentation for language specific usage.




// 页面添加这个 shange=true 就可打开这个功能
// import mask from 'grids-mask';
// mask.make();

window.$ = window.Zepto = $;


Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
interceptors(axios.interceptors);
// 将axios挂载到prototype上，在组件中可以直接使用this.$ajax访问
Vue.prototype.$http = axios;





new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});

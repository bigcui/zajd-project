/**
 * @file 测试环境变量
 *
 * @author bigcui
 * 2017年8月31日
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
function getAbsolutePath () {
  let path = location.pathname
  return path.substring(0, path.lastIndexOf('/') + 1)
}
export default new Router({
    // mode: 'history',
    // base:getAbsolutePath(),
    routes: [{
        path: '/',

        component: () => System.import('@/pages/index/index.vue')
    },
     {
       path: '*',
       name:'404',
       component:() => System.import('@/pages/index/index.vue')
    },
    {    // 首页
        path: '/index',
        component: () => System.import('@/pages/index/index.vue')
    },
     {    // 股阿奴我们
        path: '/aboutus',
        component: () => System.import('@/pages/aboutUs/index.vue')
    },
    {    // 新闻资讯
        path: '/news',
        component: () => System.import('@/pages/news/index.vue')
    },
    {    // 工程案例
        path: '/case',
        component: () => System.import('@/pages/case/index.vue')
    },
    {    // 国内业绩
        path: '/achievement',
        component: () => System.import('@/pages/achievement/index.vue')
    },
    {    // 公司业务
        path: '/corporateBusiness',
        component: () => System.import('@/pages/corporateBusiness/index.vue')
    },
    {    // 产品介绍
        path: '/productInfo',
        component: () => System.import('@/pages/productIntroduce/index.vue')
    },

   ]

});

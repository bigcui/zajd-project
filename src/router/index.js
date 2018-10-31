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
     {    // 公司介绍
        path: '/introduce',
        component: () => System.import('@/pages/introduce/index.vue')
    },
    {    // 新闻资讯
        path: '/news',
        component: () => System.import('@/pages/news/index.vue')
    },
    {    // 工程案例
        path: '/case',
        component: () => System.import('@/pages/case/index.vue')
    },
    {    // 产品服务
        path: '/product',
        component: () => System.import('@/pages/product/index.vue')
    },
    {    // 联系我们
        path: '/contact',
        component: () => System.import('@/pages/contact.vue')
    },
    {    // 联系我们
        path: '/newDetail',
        component: () => System.import('@/pages/newDetail/index.vue')
    },
    {    // 联系我们
        path: '/caseDetail',
        component: () => System.import('@/pages/caseDetail/index.vue')
    },
   
   ]

});

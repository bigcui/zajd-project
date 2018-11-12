/**
 * @file 根组件
 *
 * @author bigcui
 * 2017年8月31日
 */

<template>
<div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
    @import './common/common.css';
</style>
<style>
    html, body {
        background-color: #fff;
    }
    #app{
        min-width:1210px;
        margin: 0 auto;
    }
</style>

<template>
<section class="list">
        <h2>导航</h2>
       <div> <router-link to="index">首页</router-link></div>
       <div> <router-link to="letter">写信</router-link></div>
       <div> <router-link to="news">新闻</router-link></div>
       <div> <router-link to="guide">办事指导</router-link></div>
       <div> <router-link to="search">搜索</router-link></div>
       <div> <router-link to="service">服务</router-link></div>
       <div> <router-link to="query">查询</router-link></div>
       <div> <router-link to="detail">详情</router-link></div>
</section>
</template>
<script>

</script>
<style lang="less" scope>
    .list{
        div{
           
            a{
                display:block;
                width:100%;
                text-indent:30px;
                line-height:40px;
            }
        }
    }
</style>
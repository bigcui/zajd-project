/**
 * @file Hello 组件
 *
 * @author bigcui
 * 2017年8月31日
 */

<template>
    <div class="new-item" @click="goto(detail.id)">
        <span>{{detail.date}}</span>
        <h3>
            {{detail.title}}
        </h3>
        <p class="">
            {{detail.des}}
        </p>
    
    </div>
</template>

<script>
    export default {
        props: ['detail'],
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                content: ''
            };
        },
        methods: {
            goto(id) {
                 this.$router.push({
                 'path':'newDetail',
                  'query':{
                      'id':id
                  }
             })
            }
        }
    };
</script>

<style lang="less" scoped>
    .new-item {
        border-bottom: 1px solid #E0E0E0;
        padding: 20px 0;
        position:relative;
        span{
            font-size: 14px;
            color: #999999;
             line-height: 20px;
             position:absolute;
             right:0;
             top:0;
        }
        h3 {
            line-height: 20px;
            font-size: 14px;
            color: #333333;
            font-weight: bold;
            margin-bottom:18px;
        }
        p {
            font-size: 14px;
            line-height: 20px;
            color: #333333;
        }
    }
</style>

/**
 * @file Hello 组件
 *
 * @author bigcui
 * 2017年8月31日
 */

<template>
    <div class="new-item" @click="goto(detail.id)">
        <div class="new-img"><img :src="detail.img" alt=""></div>
        <div class="new-date">{{detail.date}}</div>
        <div class="new-line"></div>
        <p class="">
            <span class="ico-s"></span>{{detail.des}}
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
        float: left;
        width: 270px;
        margin-right: 40px;
        padding-bottom: 92px;
        cursor: pointer;
        .new-date{
            font-family: PingFangSC-Semibold;
            font-size: 14px;
            line-height: 20px;
            margin-top: 20px;
            color: #999999;
            text-indent: 20px;
        }
        .new-img{
            width: 270px;
            height: 160px;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .new-line{
            background: #EEEEEE;
            border-radius: 100px;
            margin-top: 20px;
            margin-bottom: 18px;
        }
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

            font-family: PingFangSC-Semibold;
            font-size: 14px;
            color: #1F1F1F;
            line-height: 20px;
            text-indent: 35px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

        &:before{
                content: '';
               vertical-align: middle;
                display: inline-block;
                line-height: 20px;
                margin-right: 2px;
                width: 14px;
                height: 20px;
                background:url("../assets/image/icon_news_arrow.png") no-repeat 0px center ;
                background-size: 14px 14px;
            }
        }
    }
</style>

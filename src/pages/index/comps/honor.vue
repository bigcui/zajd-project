<template>


<section class="honor-part max-width2">
    <c-title>
        公司荣誉
        <span style="color:#999">Company style</span>
    </c-title>
    <div class="honor-part">
        <section class="honor-items">
            <div class="s-item" @click="goto()">
                <span> 资质荣誉 </span>
                <img :src="imglist.zz" alt="">
            </div>
            <div class="s-item" @click="goto()">
                <span> 办公环境 </span>
                <img :src="imglist.bg" alt="">
            </div>
            <div class="s-item s-img" @click="goto()">
                <span> 服务支持 </span>
                <img :src="imglist.fuwu" alt="">
            </div>
            <div class="s-item s-items-active" @click="goto()">
                <span> 在线招聘 </span>
                <img :src="imglist.zhao" alt="">
            </div>
        </section>
        <section class="honor-video">
            <video width="400" height="300" controls    >
                <source src="http://www.runoob.com/try/demo_source/movie.ogg" type="video/ogg">
                <source src="http://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
                <source src="http://www.runoob.com/try/demo_source/movie.webm" type="video/webm">
                <object data="http://www.runoob.com/try/demo_source/movie.mp4" width="320" height="240">
                    <embed width="400" height="300" src="ttp://www.runoob.com/try/demo_source/movie.swf">
                </object>
         </video>

        </section>
    </div>
</section>



</template>

<script>
import cTitle from '@/components/head.vue';
import imgBangong from '@/assets/img/banner-bangong.png';
import imgFuwu from '@/assets/img/banner-fuwu.png';
import imgZhao from '@/assets/img/banner-zhao.png';
import imgZz from '@/assets/img/banner-zz.png';
import $ from 'n-zepto';
import data from './news.js';

export default {

    components: {
        cTitle
    },

    data() {
        return {
            title: '业务办理',
            listData: data.list,
            imglist: {
                zz: imgZz,
                bg: imgBangong,
                fuwu: imgFuwu,
                zhao: imgZhao
            }
        };
    },
    created() {},
    methods: {
        loadMore() {},
        goto(str) {
            alert('go~');
            // window.location.href = str;
        }

    }
};
</script>

<style scoped lang='less'>
.honor-part {
    clear: both;
    overflow: hidden;
     padding-bottom:10px;
    .s-item {
        position: relative;
        float: left;
        overflow: hidden;
        width: 100px;
        height: 300px;
        cursor: pointer;
        span {
            position: absolute;
            top: 89px;
            left: 38px;
            width: 24px;
            font-size: 24px;
            line-height: 33px;
            text-align: center;
            color: #fff;
        }

    }
    .s-img img {
        margin-left: -300px;

    }
    .s-items-active {
        width: 490px;
    }
    .honor-video{
        float:right;
        width:400px;
    }
    .honor-items{
        width:790px;
        height:300px;
        float:left;
    }
}
</style>

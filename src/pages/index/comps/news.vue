<template>
    <section class="lun-wrapper">
     <div  class="lun-wrapper2">
         <div class="swiperbox">
             <span class="t-title">NEWS</span>
             <div class="marquee_box">
                 <ul class="marquee_list" :style="{ top: -num + 'px'}" :class="{marquee_top:num}">
                     <!-- 当显示最后一条的时候（num=0转换布尔类型为false）去掉过渡效果-->
                     <li v-for="(item, index) in marqueeList" class="c-line-clamp1" @click="goto(item.ID)">
                         {{item.N_TITLE}}
                     </li>
                 </ul>
             </div>
             <div class="s-nav" @click="goto('')">公告清单</div>
         </div>

     </div>


</section></template>

<script>
    import cTitle from '@/components/title';
    import cdata from './news.js';
    let marqueetimer = null;

    export default {

        components: {
            cTitle
        },

        data() {
            return {
                title: '业务代理',
                num: 0,
                marqueeList: []
            };
        },
        created: function () {
            this.loadMore();
        },
        methods: {
            loadMore(cid) {


                this.marqueeList = cdata.data;
                this.showMarquee(this.num);
                // this.$http({
                //     method: 'get',
                //     url,
                //     params
                // }).then(res => {
                //
                //     if (res.error_code === 0) {
                //
                //         if (res.data.TOTAL === '0') {
                //             this.numLock = true;
                //         }
                //         else {
                //             this.marqueeList = res.data.data;
                //             this.showMarquee(this.num);
                //         }
                //     }
                //     else {
                //         console.log(res, '数据错误');
                //     }
                // });
            },
            showMarquee: function (num) {
                this.marqueeList.push(this.marqueeList[0]);
                var max = this.marqueeList.length;
                var that = this;
                marqueetimer = setInterval(function () {
                    num++;
                    if (num >= max) {
                        num = 0;
                    }
                    that.num = num * 30;
                }, 2000);
            },
            goto(id) {

               // window.location.href = location.href.split('#')[0] + '#/detail?id=' + id;

            }

        }
    };
</script>

<style scoped lang='less'>
    .lun-wrapper{
        height: 100px;
        width: 100%;
        position: absolute;
        top: 560px;
        z-index:22;
    }
    .lun-wrapper2{
        height: 100px;
        padding-right: 100px;

    }
    .s-nav{
        width: 117px;
        height: 28px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: #ffffff;
        position: absolute;
        right: 39px;
        top: 35px;
        border: 1px solid #3274D5;
        background: url("../../../assets/image/icon_news_list.png") no-repeat 10px center;
        background-size: 12px 12px;
    }
    .swiperbox {
        position: relative;
        height: 65px;
        background: #171739;
        padding-left: 175px;
        padding-right: 156px;
        padding-top: 35px;
        .t-title {
            position: absolute;
            left: 117px;
            line-height: 30px;
            font-size: 14px;
            color: #3274D5;
        }
        .t-title:after {
            content: "  ";
            position: absolute;
            top: 8px;
            left: 61px;
            width: 1px;
            height: 14px;
            background-color: #3274D5;
        }
    }
    .marquee {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        color: #ffffff;
        background: #171739;
        align-items: center;
    }

    .marquee_title {
        height: 40px;
        /*关键样式*/
        font-size: 14px;
    }

    .marquee_box {
        position: relative;
        display: block;
        /*关键样式*/
        margin-left: 24px;
        overflow: hidden;
        width: 100%;
        height: 30px;
        ul {
            width: 100%;
        }
    }

    .marquee_list {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
    }

    .marquee_top {
        transition: top .5s;
    }


    /*关键样式*/

    .marquee_list li {
        width: 100%;
        height: 30px;
        /*关键样式*/
        font-size: 14px;
        /*关键样式*/
        line-height: 30px;
        color: #ffffff;
    }

    .message {
        position: relative;
        padding: 0 13px 9px 13px;
        background: #fff;
        .icon {
            margin-right: 8px;
        }
        .news {
            overflow: hidden;
            height: auto;
            .title {
                font-size: 14px;
                line-height: 22px;
                color: #d69d29;
            }
            .from {
                margin-top: 5px;
                font-size: 12px;
                color: #b2b2b2;
            }
        }
        .part {
            float: left;
        }
        .focus-btn {
            position: absolute;
            top: 16px;
            right: 13px;
            width: 72px;
            height: 26px;
            border: 1px solid #1d8fe1;
            line-height: 26px;
            text-align: center;
            color: #1d8fe1;
            border-radius: 2px;
        }
        .news-list {
            font-size: 14px;
            line-height: 22px;
        }
    }
</style>

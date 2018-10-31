<template>
    <section class="service-page">
        <c-title :title="title" :lock="true" :line="true"> </c-title>
        <section class="navlist">
            <div class="c-row">
                <div class="c-span3 c-center" @click="goto('http://www.bjgaj.gov.cn/rkgl/ ')">
                    <div class="icon-wrap"><i class="icon iconfont icon-service_photo"></i></div>
                    <p>户籍业务</p>
                </div>
                <div class="c-span3 c-center" @click="goto('http://bj.122.gov.cn/')">
                    <div class="icon-wrap"><i class="icon iconfont icon-service_card"></i></div>
                    <p>驾驶员审核</p>
                </div>
                <div class="c-span3 c-center" @click="goto('http://bj.122.gov.cn/')">
                    <div class="icon-wrap"><i class="icon iconfont icon-service_wheel"></i></div>
                    <p>驾驶证业务</p>
                </div>
            </div>
            <div class="c-row">
                <div class="c-span3 c-center" @click="goto('http://bj.122.gov.cn/')">
                    <div class="icon-wrap"><i class="icon iconfont icon-service_clock"></i></div>
                    <p>预约车务手续业务</p>
                </div>
                <div class="c-span3 c-center" @click="goto('http://www.bjgaj.gov.cn/lshj/')">
                    <div class="icon-wrap"><i class="icon iconfont icon-service_admin"></i></div>
                    <p>律师预约会见</p>
                </div>
                <div class="c-span3 c-center" @click="goto('http://bj.122.gov.cn/')">
                    <div class="icon-wrap"><i class="icon iconfont icon-service_car"></i></div>
                    <p>机动车业务</p>
    
                </div>
    
            </div>
            <div class="c-row">
                <div class="c-span3 c-center" @click="goto('http://www.bjgaj.gov.cn/jjcrj/index.jsp')">
                    <div class="icon-wrap "><i class="icon iconfont icon-service_location"></i></div>
                    <p>出入境业务</p>
                </div>
                <div class="c-span3">
    
                </div>
                <div class="c-span3">
                </div>
    
            </div>
    
        </section>
        <section class="content-list content-line">
            <div class="c-row c-item">
                <div class="c-span3" @click="goto('http://www.bjgaj.gov.cn/bjj/crj/apply.jsp?t=1530429804509')">
                    <div class="icon-btn c-center first-child">
                        京籍证件办<br> 理网上办理
    
                    </div>
                </div>
                <div class="c-span3" @click="goto('http://www.bjgaj.gov.cn/fjj/crj/apply.jsp')">
                    <div class="icon-btn c-center mid-child">
                        非京籍证件办<br> 理预申请受理
    
                    </div>
                </div>
    
                <div class="c-span3" @click="goto('http://www.bjgaj.gov.cn/bjj/book/book_findBRForward')">
                    <div class="icon-btn c-center last-child">
                        京籍证件办<br> 理预约查询
                    </div>
                </div>
    
            </div>
            <div class="c-row">
                <div class="c-span3" @click="goto('http://www.bjgaj.gov.cn/fjj/book/book_findBRForward')">
                    <div class="icon-btn c-center first-child">
                        非京籍证件<br> 办理预约查询
    
                    </div>
                </div>
                <div class="c-span3" @click="goto('http://www.bjgaj.gov.cn/fjj/certificate/recheckForward')">
                    <div class="icon-btn c-center mid-child">
                        非京籍证件办<br> 理复核结果查询
    
                    </div>
                </div>
    
                <div class="c-span3" @click="goto('http://www.bjgaj.gov.cn/fjj/certificate/queryForward')">
                    <div class="icon-btn c-center last-child">
                        非京籍证件<br> 办理申请查询
                    </div>
                </div>
    
            </div>
            <div class="arrow"></div>
        </section>
    
    </section>
</template>

<script>
    import cTitle from '@/components/title';
    export default {
    
        components: {
            cTitle
        },
    
        data() {
            return {
                title: '个人业务'
            };
        },
        created() {
    
        },
        methods: {
            loadMore() {
    
            },
            goto(str) {
                window.location.href = str;
            }
    
        }
    };
</script>

<style scoped lang='less'>
    .service-page {
        .arrow {
            -webkit-transform: scale(.5);
            transform: scale(0.5);
        }
        .first-child {
            margin: 0 4px 0 10px;
        }
        .mid-child {
            margin: 0 7px 0 7px;
        }
        .last-child {
            margin: 0 10px 0 4px;
        }
        //  .c-row:last-child{
        //     margin-left:12px;
        // }
        @px: rotate(-45deg);
        .arrow {
            position: absolute;
            left: 17%;
            z-index: 10;
            background: #fff;
            top: -8.98px
        }
        .arrow:after {
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            border-top: 1px solid #54baea;
            border-right: 1px solid #54baea;
            transform: @px;
            -ms-transform: @px;
            /* IE 9 */
            -moz-transform: @px;
            /* Firefox */
            -webkit-transform: @px;
            /* Safari 和 Chrome */
            -o-transform: @px;
        }
        .icon-btn {
            position: relative;
        }
        .icon-btn:before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            top: 0;
            left: 0;
            border: 1px solid #54baea;
            border-radius: 3px;
            -webkit-transform-origin: 0 0;
            -moz-transform-origin: 0 0;
            -ms-transform-origin: 0 0;
            -o-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scale(0.5, 0.5);
            -ms-transform: scale(0.5, 0.5);
            -o-transform: scale(0.5, 0.5);
            transform: scale(0.5, 0.5);
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        .navlist {
            padding: 0 5px;
            padding-bottom: 5px;
            p {
                font-size: 12px;
            }
            i {
                font-size: 32px;
                color: #1d7aa6;
            }
            .icon-wrap {
                height: 32px;
                margin-top: 10px;
                overflow: hidden;
            }
        }
        .content-list {
            padding-top: 10px;
            position: relative;
            margin: 0 12.5px;
            padding-bottom: 10px;
            .c-center {
                // border: 1px solid #54baea;
                font-size: 12px;
                margin-bottom: 5px;
                line-height: 20px;
                border-radius: 3px;
                padding: 5px 0;
            }
        }
        .content-line:after {
            content: "  ";
            position: absolute;
            right: 0;
            top: 0px;
            height: 1px;
            width: 100%;
            background-color: #54baea;
            -webkit-transform: scaleY(.5);
            transform: scaleY(0.5);
        }
    }
</style>

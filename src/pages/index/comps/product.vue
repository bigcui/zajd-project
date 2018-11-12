<template>
    <section class="product-part">
        <c-title :content="titleData">

        </c-title>
        <div class="info-part-content">
            <ul>
                <li>
                    <div class="case-item" @click="goto">
                        <img src="../../../assets/image/pic_cases_1.png" alt="">
                        <p class="case-title"><span>-</span>全模铸式中压总线</p>
                        <p class="case-des">铜总线·铝总线</p>
                    </div>
                </li>
                <li>
                    <div class="case-item" @click="goto">
                        <img src="../../../assets/image/pic_cases_2.png" alt="">
                        <p class="case-title"><span>-</span>全模铸式低压总线</p>
                        <p class="case-des">铜总线·铝总线</p>
                    </div>
                </li>
                <li>
                    <div class="case-item" @click="goto">
                        <img src="../../../assets/image/pic_cases_3.png" alt="">
                        <p class="case-title"><span>-</span>T-Line 插入式动力分电盘</p>
                        <p class="case-des">具有最新及符合市场使用需求之特色</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="case-item" @click="goto">
                        <img src="../../../assets/image/pic_cases_4.png"    alt="">
                        <p class="case-title"><span>-</span>变配电及楼宇电气优化咨询</p>
                        <p class="case-des">变配电及楼宇电气优化咨询</p>
                    </div>
                </li>
                <li>
                    <div class="case-item" @click="goto">
                        <img src="../../../assets/image/pic_cases_5.png" alt="">
                        <p class="case-title"><span>-</span>变配电设计</p>
                        <p class="case-des">变配电设计</p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
</template>

<script>
    import cTitle from '@/components/header.vue';

    export default {

        components: {
            cTitle

        },

        data() {
            return {
                titleData: {
                    name: '产品&服务',
                    title: 'Product & Service',
                    des: '铸安精电拥有最好的浇铸母线产品与优质的设计、咨询服务。'
                }
            };
        },
        mounted() {

        },
        methods: {

            loadMore() {
            },
            goto(str) {
                alert('click')
            }

        }
    };
</script>

<style scoped lang='less'>

    .product-part {
        margin: 0 auto;
        height: 758px;
        padding-bottom: 50px;
        background: #EFF3F7;
        overflow: hidden;
        height: auto;
        li{
            float: left;
            margin-right: 15px;
            margin-bottom: 29px;

        }
        li:last-child{

            margin-right: 0px;

        }
        .info-part-content{
            width: 1200px;
            margin: 0 auto;
            .case-item{
                width: 390px;

                img{
                    width: 100%;
                    min-height: 160px;

                }
                .case-title{
                    margin-top: 16px;
                    span{
                        margin-right: 5px;
                        color: #1A509D;
                    }
                    font-family: PingFangSC-Semibold;
                    font-size: 18px;
                    color: #1F1F1F;
                    line-height: 25px;
                }
                .case-des{
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #666666;
                    line-height: 20px;
                    margin-top: 5px;
                }
            }
        }
    }
</style>

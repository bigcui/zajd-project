<template>
    <section class="point-part">
        <div class="info-part-content">
            <ul>
                <li>
                    <div class="case-item">
                        <div class="case-logo"><img src="../../../assets/image/pic_fire.png" alt=""></div>
                        <div class="case-title">防火</div>
                        <p class="case-des des-01">防火通过（CNS14286，<br>
                            IEC60331）认证</p>
                    </div>
                    <div class="item-line">

                    </div>
                </li>
                <li>
                    <div class="case-item">
                        <div class="case-logo"><img src="../../../assets/image/pic_water.png" alt=""></div>
                        <div class="case-title">防水</div>
                        <p class="case-des des-02">中低压皆经过IP68<br>
                            防尘防水测试</p>
                    </div>
                    <div class="item-line">

                    </div>
                </li>
                <li>
                    <div class="case-item">
                        <div class="case-logo"><img src="../../../assets/image/pic_corrosion.png" alt=""></div>
                        <div class="case-title">防腐蚀</div>
                        <p class="case-des des-03">具防腐蚀特性</p>
                    </div>
                    <div class="item-line">

                    </div>
                </li>
                <li>
                    <div class="case-item">
                        <div class="case-logo"><img src="../../../assets/image/pic_burst.png" alt=""></div>
                        <div class="case-title">防爆</div>
                        <p class="case-des des-04">防爆认证符合EN 50028 <br>编号EEx m II</p>
                    </div>
                    <div class="item-line">

                    </div>
                </li>
                <li>
                    <div class="case-item">
                        <div class="case-logo"><img src="../../../assets/image/pic_electromagnetism.png" alt=""></div>
                        <div class="case-title">电磁干扰</div>
                        <p class="case-des des-05">具有电磁干扰特性</p>
                    </div>
                    <div class="item-line">

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

    .point-part {
        margin: 0 auto;
        padding-top: 120px;
        padding-bottom: 70px;
        background: #ffffff;
        overflow: hidden;
        height: auto;
        li{
            float: left;
            margin: 0 75px;

        }
        li:first-child{

            margin-left: 0px;

        }
        li:last-child{

            margin-right: 0px;

        }
        .info-part-content{
            width: 1100px;
            margin: 0 auto;
            .case-item{
                text-align: center;
                position: relative;
                padding-bottom: 48px;
                .case-logo{
                    width: 100px;
                    height: 100px;
                    overflow: hidden;
                    img{ width: 100%}
                }
                .case-title{
                    margin-top: 10px;
                    font-family: PingFangSC-Semibold;
                    font-size: 18px;
                    color: #1F1F1F;
                    line-height: 25px;
                }
                .case-des{
                    position: absolute;

                    left: 0;
                    bottom: 0;
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #999999;
                    line-height: 20px;
                    margin-top: 8px;
                }
                .des-01{
                    width: 157px;
                    height: 40px;
                    left: -29px;
                }
                .des-02{
                    width: 114px;
                    height: 40px;
                    left: -7px;
                }
                .des-04{
                    width: 150px;
                    height: 40px;
                    left: -25px;
                }
                .des-03{
                    width: 84px;
                    height: 40px;
                    left: 8px;
                    bottom: 0px;
                }
                .des-05{
                    width: 112px;
                    height: 40px;
                    left: -6px;
                    bottom: 0px;
                }
            }
        }
    }
</style>

<template>
    <section class="info-part">
        <c-title :content="titleData">

        </c-title>
        <div class="info-part-content">
            <div class="video-area">视频</div>
            <div class="info-content">
                <div class="title-area">
                    <div class="title-a title-top">
                        <h2>北京铸安精电科技有限公司</h2>
                        <p class="des">BEIJING ZHUANJINGDIAN Technology Co.,Ltd</p>
                    </div>
                    <div class="middle-line"></div>
                    <div class="title-b title-top">
                        <h2>安达康科技股份有限公司北京代表处</h2>
                        <p class="des">ANDAKANG Technology Corporation BEIJING</p>
                    </div>
                </div>
                <div class="content-info">
                    <p>安达康科技以服务全球的角度，努力推展提升用电品质的全模铸式汇流排。</p>
                    <p>自1988年起，经过不断的累计技术与经验，安达康创造出领先业界的国际一流品牌全模铸式汇流排。</p>
                    <p>
                        TECOBAR符合多项国际标准，获得国际上业界一致肯定，产品与国际趋势接轨，实现节能、环保、降耗。TECOBAR全模铸式汇流排取代传统电缆和母线，且改变传统装甲式汇流排的弱点，具有绝佳的电气特性及机械强度，达到保护等级IP68及机械强度IK10。</p>
                    <p>TECOBAR以抗腐蚀、防爆、防潮、优良绝缘及散热特性使产品达到零事故率，节省庞大保修维护费用，获得全球客 户一致口碑推荐。</p>
                    <p>TECOBAR全模铸式汇流排适用在最严苛的环境条件下，无故障使用年限五十年以上，永久免维护。</p>
                </div>

            </div>
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
                    name: '公司简介',
                    title: 'Introduction',
                    des: ''
                }
            };
        },
        mounted() {

        },
        methods: {

            loadMore() {
            },
            goto(str) {

                if (str == '#') {
                    $('body,html').scrollTop(2000);
                    return false;
                }

                window.location.href = str;
            }

        }
    };
</script>

<style scoped lang='less'>

    .info-part {
        padding-top: 50px;
        width: 1210px;
        margin: 0 auto;
        padding-bottom: 80px;
        .info-part-content {
            height: 270px;
            position: relative;
            .title-area {
                height: auto;
                overflow: hidden;

            }
            .video-area {
                width: 480px;
                height: 270px;
                position: absolute;
                left: 0;
                top: 0;
            }
            .info-content {
                margin-left: 512px;
                height: 270px;

            }
            .title-a {

            }
            .title-b {

            }
            .title-top {
                float: left;
            }
            .middle-line {
                width: 20px;
                height: 42px;
                margin: 0 31px;
                float: left;
                position: relative;

            }
            .middle-line:after {
                content: '';
                display: inline-block;
                /* width: 35px; */
                position: absolute;
                height: 35px;
                left: 8px;
                top: 3px;
                /* margin-top: 2px; */
                /* margin-left: 6px; */
                border-left: 1px solid #1A509D;
                -webkit-transform: rotate(35deg);
                -moz-transform: rotate(35deg);
                -ms-transform: rotate(35deg);
                -o-transform: rotate(35deg);
                transform: rotate(35deg);
            }
            h2 {

                color: #1A509D;
                font-family: PingFangSC-Semibold;
                font-size: 20px;
                line-height: 28px;
            }

            p.des {
                color: #1A509D;
                font-family: DIN-Bold;
                font-size: 12px;
                line-height: 14px;
                margin-top: 4px;
            }
            .content-info {
                margin-top: 24px;

                p {
                    color: #666;
                    font-size: 14px;
                    line-height: 24px;
                }
            }
        }
    }
</style>

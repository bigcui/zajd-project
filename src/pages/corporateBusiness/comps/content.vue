<template>
    <section class="s-content">
        <div class="s-wrapper">
            <div class="s-nav">
                <div class="s-nav-title">公司业务 <span>Business</span></div>
                <ol>
                    <li :class="{'cur':curId === 0}" @click="curId=0">变配电及楼宇电气优化咨询</li>
                    <li :class="{'cur':curId === 1}" @click="curId=1">配电设计</li>

                </ol>
            </div>
            <div class="s-innercontent">
                <section v-show="curId===0" class="s-item">
                    <div class="sc-title">
                        变配电及楼宇电气优化咨询
                    </div>
                    <div class="sc-content">
                        <div class="sc-image">
                            <img src="../../../assets/image/pp-01.png"  width="840" alt="">
                        </div>
                        <div class="sc-des">
                            <strong>安达康科技股份有限公司:</strong>台湾东元电机公司集团于1982年引进领先世界之全模铸式汇流排制造商:比利时(荷商)Eta- com betobar-r之全模铸式汇流排。本产品拥有绝佳的电气特性及机械强度:耐火、防水、抗腐蚀、环保、体积小、免维护等特性;皆比传统式装甲型母线和电缆更加优异，故深获业界好评并采用。 1999年10月，台安电机公司与Eta-com公司合资成立安达康科技股份有限公司，导入Eta-com汇流排生产技术并拥有完全知识产权至今。产品覆盖范围遍及亚洲、欧洲、美洲、非洲及国内市场等，适用于各种气候带、沿海及各种复杂环境，业界领先、品质优异。产品行销至今零故障率。我们将继续努力、精益求精、不断创新，为客户打造世界一流汇流排电气产品。
                        </div>
                    </div>

                </section>

                <section v-show="curId===1" class="s-item">
                    <div class="sc-title">
                        公司资质
                    </div>
                    <div class="sc-content">
                        <div class="sc-image">
                            <img src="../../../assets/image/pic_company.png"  width="840" alt="">
                        </div>
                        <div class="sc-des">
                            台湾东元电机公司集团于1982年引进领先世界之全模铸式汇流排制造商:比利时(荷商)Eta- com betobar-r之全模铸式汇流排。本产品拥有绝佳的电气特性及机械强度:耐火、防水、抗腐蚀、环保、体积小、免维护等特性;皆比传统式装甲型母线和电缆更加优异，故深获业界好评并采用。 1999年10月，台安电机公司与Eta-com公司合资成立安达康科技股份有限公司，导入Eta-com汇流排生产技术并拥有完全知识产权至今。产品覆盖范围遍及亚洲、欧洲、美洲、非洲及国内市场等，适用于各种气候带、沿海及各种复杂环境，业界领先、品质优异。产品行销至今零故障率。我们将继续努力、精益求精、不断创新，为客户打造世界一流汇流排电气产品。
                        </div>
                    </div>
                </section>
                <section v-show="curId===2" class="s-item">
                    <div class="sc-title">
                        公司地图
                    </div>
                    <div class="sc-content">
                        <div class="sc-image">
                            <img src="../../../assets/image/pic_company.png"  width="432" alt="">
                        </div>
                        <div class="sc-des">
                            <strong>安达康科技股份有限公司:</strong>台湾东元电机公司集团于1982年引进领先世界之全模铸式汇流排制造商:比利时(荷商)Eta- com betobar-r之全模铸式汇流排。本产品拥有绝佳的电气特性及机械强度:耐火、防水、抗腐蚀、环保、体积小、免维护等特性;皆比传统式装甲型母线和电缆更加优异，故深获业界好评并采用。 1999年10月，台安电机公司与Eta-com公司合资成立安达康科技股份有限公司，导入Eta-com汇流排生产技术并拥有完全知识产权至今。产品覆盖范围遍及亚洲、欧洲、美洲、非洲及国内市场等，适用于各种气候带、沿海及各种复杂环境，业界领先、品质优异。产品行销至今零故障率。我们将继续努力、精益求精、不断创新，为客户打造世界一流汇流排电气产品。
                        </div>
                    </div>
                </section>
                <section v-show="curId===3" class="s-item">
                    <div class="sc-title">
                        公司应聘
                    </div>
                    <div class="sc-content">
                        <div class="sc-image">
                            <img src="../../../assets/image/pic_company.png"  width="432" alt="">
                        </div>
                        <div class="sc-des">
                            <strong>安达康科技股份有限公司:</strong>台湾东元电机公司集团于1982年引进领先世界之全模铸式汇流排制造商:比利时(荷商)Eta- com betobar-r之全模铸式汇流排。本产品拥有绝佳的电气特性及机械强度:耐火、防水、抗腐蚀、环保、体积小、免维护等特性;皆比传统式装甲型母线和电缆更加优异，故深获业界好评并采用。 1999年10月，台安电机公司与Eta-com公司合资成立安达康科技股份有限公司，导入Eta-com汇流排生产技术并拥有完全知识产权至今。产品覆盖范围遍及亚洲、欧洲、美洲、非洲及国内市场等，适用于各种气候带、沿海及各种复杂环境，业界领先、品质优异。产品行销至今零故障率。我们将继续努力、精益求精、不断创新，为客户打造世界一流汇流排电气产品。
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>
<script>
    export default {

        components: {},

        data() {
            return {
                tilte: '关于我们',
                curId:0
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
    .s-content {
        .s-wrapper {
            width: 1200px;
            margin: 0 auto;
            min-height: 600px;
            overflow: hidden;
            height: auto;
            padding-bottom: 100px;
        }
        .sc-title{
            border-left: 3px solid #1A509D;
            height: 80px;
            line-height: 80px;
            text-indent: 20px;
            font-family: PingFangSC-Semibold;
            font-size: 30px;
            color: #1F1F1F;
            margin-top: 70px;
        }
        .sc-content{
            height: auto;
            overflow: hidden;
            margin-top: 24px;
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #1F1F1F;
            width: 840px;
            line-height: 27px;
            .sc-des{

                height: auto;

                font-size: 15px;
                color: #1F1F1F;
                line-height: 27px;
                margin-left: 20px;
            }

        }

        .s-innercontent {
            float: left;
            width: 900px;
            min-height: 600px;
        }
        .s-nav {
            float: right;
            width: 300px;
            height: 70px;
            line-height: 70px;
            li {
                background: #F5F9FC;
                border-left: 1px solid #DFE9F3;
                border-right: 1px solid #DFE9F3;
                border-bottom: 1px solid #DFE9F3;
                cursor: pointer;
                text-indent: 24px;
                background: url("../../../assets/image/icon_arrow_right.png") no-repeat 270px center;
            }
            li:first-child{
                border-top: 1px solid #DFE9F3;
            }
            .cur{
                border-left: 1px solid #1A509D;
                background-color: #DFE9F3;
            }
            &-title {
                font-family: PingFangSC-Semibold;
                font-size: 18px;
                color: #FFFFFF;
                text-indent: 24px;
                background: #000131;
                font-family: PingFangSC-Semibold;
                font-size: 18px;
                color: #FFFFFF;
                span {
                    font-family: DIN-Regular;
                    font-size: 14px;
                    color: #3274D5;
                }
            }
        }
    }
</style>

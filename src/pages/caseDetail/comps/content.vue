<template><section class="infroduce-content max-width2">
    <c-left-nav v-model="num" :list="list"></c-left-nav>
    <div class="s-content" v-if="num==0">
        <c-detail :detail="details"></c-detail>
    </div>
    <div class="s-content"  v-if="num==1">
        <p>
            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。
        </p>
        
    </div>
    <div class="s-content"  v-if="num==2">
       
        <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4019536220,2237632415&fm=173&app=25&f=JPEG?w=218&h=146&s=F106D71509D2CCD25E2478C70300E0E0" alt="">
        <p>
            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。
        </p>
        <p>
            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。
        </p>
        <p>
            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。
        </p>
    </div>
</section></template>

<script>
//  S
import cLeftNav from '@/components/leftNav.vue';
import cDetail from './img-item.vue';
export default {

    components: {
        cLeftNav,
        cDetail
    },

    data() {
        return {
            num: 0,
            details:{
                img:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4019536220,2237632415&fm=173&app=25&f=JPEG?w=218&h=146&s=F106D71509D2CCD25E2478C70300E0E0',
                name:'重要'
            },
            list: [{
                title: '中高压',
                des: 'des sdssd  sdds',
                id: '01'
            },
                {
                    title: '低压',
                    des: 'des sdds',
                    id: '01'
                },
                {
                    title: '各种高低压',
                    des: 'des dsds',
                    id: '01'
                }
            ]
        };
    },
    created() {},
    mounted() {
          
    },
    methods: {

        loadMore() {}

    }
};
</script>

<style scoped lang='less'>
.infroduce-content {
    padding-top: 20px;
    height:auto;
    overflow:auto;
    min-height:600px;
    .title{
        font-size: 24px;
        color: #333333;
        line-height:33px;
        
        p{
            font-size: 12px;
            color: #333333;
            line-height:17px;
            margin-top:10px;
        }
    }
    .s-content {
        float:right;
        width: 980px;
        p {
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0;
            color: #333;
           margin-bottom:20px ;
        }
        img{
            
        }
    }
}
</style>

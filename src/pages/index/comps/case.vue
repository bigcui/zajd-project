<template>
    <section class="product-part">
        <c-title :content="titleData">

        </c-title>
        <div class="info-part-content">
            <ul>
                <li>
                    <p> <span class="point-index"></span>阳江核二电厂启变隔离开个与汇流排工程 </p>
                </li>
                <li>
                    <p> <span class="point-index"></span>青岛东元压缩机厂低压汇流排 </p>
                </li>
                <li>
                    <p> <span class="point-index"></span>上海氯纶化工低压汇流排 </p>
                </li>
                <li>
                    <p> <span class="point-index"></span>延长石化供水配电系统低压汇流排 </p>
                </li>
                <li>
                    <p> <span class="point-index"></span>上海亚东石化低压汇流排 </p>
                </li>
                <li>
                    <p> <span class="point-index"></span>上海外高桥造船厂低压汇流排 </p>
                </li>
                <li>
                    <p> <span class="point-index"></span>广州新塘漂染工业环境保护综合治理热电厂</p>
                </li>
            </ul>

        </div>
        <div class="check-more">查看更多</div>
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
                    name: '国内业绩',
                    title: 'Cases',
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
                alert('click')
            }

        }
    };
</script>

<style scoped lang='less'>

    .product-part {
        margin: 0 auto;
        height: 758px;
        padding-bottom: 80px;
        background: #EFF3F7;
        overflow: hidden;
        height: auto;
        .t-header{
            margin-bottom: 16px;
        }
        ul{
            padding-top: 58px;
            height: 246px;
            overflow-y: auto;
        }
        li{
            p{
                width: 530px;
            }
            line-height: 20px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #666666;
            margin-bottom: 8px;
        }
        li:last-child{
            margin-right: 0px;
        }
        .point-index{
            background: #1A509D;
            width: 4px;
            height: 4px;
            border-radius: 10px;
            vertical-align: middle;
            display: inline-block;
            margin-right: 16px
        }
        .check-more{
            border: 1px solid #1A509D;
            width: 300px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: url("../../../assets/image/icon_arrow_right.png") no-repeat 272px center;
            background-size: 12px 12px;
            margin: 0 auto;
        }
        .info-part-content{
            width: 1120px;
            height: 347px;
            margin: 0 auto;
            background: url("../../../assets/image/pic_map.png") no-repeat  right 0;
            background-size: 587px 347px;

        }
    }
</style>

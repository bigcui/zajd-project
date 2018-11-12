<template>
    <section class="apply-part">
        <c-title :content="titleData">

        </c-title>
        <div class="ext-des">
            TECOBAR全模铸式汇流排适用在最严苛的环境条件下，包括石油化工行业、沿海高盐雾地区、高温高寒高湿<br/>
            地区、发电厂、科研机构、精密仪器场所、数据中心、医院、办公大楼及住宅项目。
        </div>
        <div class="info-part-content">
            <ul>
                <li class="t-item">
                    <img src="../../../assets/image/Rectangle-01.png" alt="">
                    <p>
                        <span class="name">工业</span>
                        <span class="title">Industry</span>
                    </p>
                </li>
                <li class="t-item">
                    <img src="../../../assets/image/Rectangle-02.png" alt="">
                    <p>
                        <span class="name">高楼</span>
                        <span class="title">Tall Building</span>
                    </p>
                </li>
                <li class="t-item">
                    <img src="../../../assets/image/Rectangle-03.png" alt="">
                    <p>
                        <span class="name">电厂</span>
                        <span class="title">Power Plant</span>
                    </p>
                </li>
                <li class="t-item">
                    <img src="../../../assets/image/Rectangle-04.png" alt="">
                    <p>
                        <span class="name">机场</span>
                        <span class="title">Airport</span>
                    </p>
                </li>

            </ul>
            <ul>
                <li class="b-item">
                    <img src="../../../assets/image/Rectangle-05.png" alt="">
                    <p>
                        <span class="name">化学工业</span>
                        <span class="title">Chemical Industry</span>
                    </p>
                </li>
                <li class="b-item">
                    <img src="../../../assets/image/Rectangle-06.png" alt="">
                    <p>
                        <span class="name">高科技厂房及资料中心</span>
                        <span class="title">Workshop</span>
                    </p>
                </li>
                <li class="b-item">
                    <img src="../../../assets/image/Rectangle-07.png" alt="">
                    <p>
                        <span class="name">石化业</span>
                        <span class="title">Petrifaction</span>
                    </p>
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
                    name: '应用领域',
                    title: 'Application',
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

    .apply-part {
        margin: 0 auto;
        width: 1200px;
        padding-bottom: 100px;
        overflow: hidden;
        height: auto;
        .ext-des{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #1F1F1F;
            line-height: 26px;
            text-align: center;
            margin-top: -1px;
        }
        .t-header{
            margin-bottom: 16px;
        }
        ul:last-child{
            margin-top: 15px;
        }
        ul:first-child{
            margin-top: 34px;
        }
        ul{
            overflow: hidden;
            li{
                position: relative;
                float: left;
                height: 360px;
            }
            li:last-child{
               margin-right: 0;
            }
            img{
                width: 100%;
            }
            p{
                position: absolute;
                left: 0;
                bottom: 18px;
                padding-left: 20px;
            }
            .t-item{
                width: 300px;
            }
            .b-item{
                width: 390px;
                margin-right: 15px;
                height: 220px;
            }
            .name{
                display: block;
                font-family: PingFangSC-Semibold;
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #FFFFFF;
                line-height: 22px;
                margin-bottom: 4px;
            }
            .title{
                display: block;
                font-family: DIN-Regular;
                font-size: 14px;
                color: #FFFFFF;
                line-height: 17px;
            }
        }


    }
</style>

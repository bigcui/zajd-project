<template>
    <section class="apply-part">
        <c-title :content="titleData">

        </c-title>

        <div class="info-part-content">
            <p class="des">TECOBAR全模铸式汇流排适用在最严苛的环境条件下，包括石油化工行业、沿海高盐雾地区、高温 <br>
                高寒高湿地区、发电厂、科研机构、精密仪器场所、数据中心、医院、办公大楼及住宅项目。</p>
            <ul>
                <li>
                    <div><img class='slogan'src="../../../assets/image/pic_slogan.png" alt="">
                     <span></span>
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

<template>
    <section class="down-part">
        <c-title :content="titleData"></c-title>
        <div class="info-part-content">
            <ul>
                <li>
                    <div class="case-item" @click="goto">
                        <div class="case-img">
                            <img src="../../../assets/image/icon_download_video.png" alt="">
                        </div>
                        <p class="case-title">公司动画</p>
                        <p class="case-down">下载</p>
                    </div>
                </li>
                <li>
                    <div class="case-item" @click="goto">
                        <div  class="case-img">
                            <img height="" src="../../../assets/image/icon_download_PDF.png" alt="">
                        </div>
                        <p class="case-title">产品PDF资料</p>
                        <p class="case-down">下载</p>
                    </div>
                </li>
                <li>
                    <div class="case-item" @click="goto">
                        <div class="case-img">
                            <img src="../../../assets/image/icon_download_document.png" alt="">
                        </div>
                        <p class="case-title">技术文档</p>
                        <p class="case-down">下载</p>
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
                    name: '资料下载',
                    title: 'Document',
                    des: '铸安精电产品介绍相关文档下载' +
                        '。'
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

    .down-part {
        margin: 0 auto;
        height: 758px;
        padding-bottom: 50px;
        background: #ffffff;
        overflow: hidden;
        height: auto;
        li{
            float: left;
            margin-right: 220px;
            margin-bottom: 29px;

        }
        li:last-child{
            margin-right: 0px;
        }
        .info-part-content{
            width: 920px;
            margin: 0 auto;
            height: 100%;
            overflow: hidden;
            .case-img{
                width: 100px;
                height: 100px;
                margin: 0 auto;
                img {
                    vert-align: middle;
                }
            }
            .case-item{
                width: 160px;
                .case-title{
                    margin-top: 20px;
                    font-family: PingFangSC-Semibold;
                    font-size: 18px;
                    color: #1F1F1F;
                    line-height: 25px;
                    text-align: center;
                }
                .case-down{
                    margin-top: 20px;
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                    color: #1F1F1F;
                    border: 1px solid #1A509D;
                    background: url("../../../assets/image/icon_arrow_right.png") no-repeat 128px center;
                    background-size: 12px 12px;
                }
            }
        }
    }
</style>

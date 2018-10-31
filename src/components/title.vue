<template>
    <section class="t-header">
        <div class="s-t">
            <div class="max-width2">
                <div class="s-content">
                    <h2>{{content.title}}</h2>
                    <p v-if="">{{content.des}}</p>
                </div>
            </div>
        </div>
        <img src="../assets/img/top-b.png" alt="">
    </section>
</template>

<script>
    export default {
        props: ['content'],
        components: {

        },

        data() {
            return {

            };
        },
        created() {

        },
        methods: {
            loadMore() {

            }

        }
    };
</script>

<style scoped lang='less'>
    .t-header {
        position: relative;
        width: 100%;
        height: auto;
        overflow: hidden;
        img {
            display: block;
            width: 100%;
        }
        .s-t {
            position: absolute;
            width: 100%;
            height: 100%;
            .s-content{
                width:1200px;
                 position: absolute;
                 top:50%;
                 left:0;
                 margin-top:-25px;
            }
            h2 {
                font-size: 24px;
                color: #84DC60;
                line-height: 33px;

            }
            p {
                font-size: 12px;
                color: #4C98E8;
                line-height: 17px;
            }
        }
    }
</style>

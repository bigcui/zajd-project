<template>
    <section class="t-header">
        <div class="t-title">{{content.title}}</div>
        <h2>{{content.name}}</h2>
        <p v-if="content.des">{{content.des}}</p>
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
        .t-title{
            line-height: 17px;
            font-size: 14px;
            color: #1A509D ;
            text-align: center;
            margin-top: 50px;
        }
        h2{
            height: 42px;
            line-height:42px;
            font-size: 30px;
            text-align: center;
            color: #1F1F1F ;
            margin-top: 12px;
        }
        p{
            line-height: 20px;
            color: #666666 ;
            font-size: 14px;
            margin-top: 12px;
            text-align: center;
        }
        margin-bottom: 40px;

    }
</style>

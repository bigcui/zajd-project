<template>
    <section class="product-part">
        <c-title :content="titleData">

        </c-title>
        <div class="info-part-content">

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

    .product-part {
        padding-top: 50px;
        margin: 0 auto;
        padding-bottom: 80px;
        background: #EFF3F7;

    }
</style>

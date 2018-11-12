<template>
    <section class="s-header">
        <div class="inner-stitle">
            <slot></slot>

        </div>

    </section>
</template>

<script>
    export default {
        name: 'secondHeader',
        components: {

        }
    };
</script>

<style scoped lang='less'>
    .s-header {
        position: relative;
        width: 100%;
        height: 159px;
        background: url("../assets/image/pic_banner_bg.png") no-repeat center #000000;
        overflow: hidden;
        font-family: PingFangSC-Semibold;
        font-size: 36px;
        color: #FFFFFF;
        line-height: 159px;
        .inner-stitle{
            width: 1200px;
            margin: 0 auto;
        }
    }
</style>

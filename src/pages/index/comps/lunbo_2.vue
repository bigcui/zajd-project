<template>
    <section class="carousel-box">
        <div class="carousel-wrapper">
            <img class='slogan'src="../../../assets/image/pic_slogan.png" alt="">
            <p>科学态度  工匠精神为您打造 </p>
            <p>精准  节能  环保  安全  免维护的配电网</p>
            <div class="slogan-title">铸安精电的技术优势</div>
        </div>
    </section>
</template>

<script>
    import ElCarousel from 'element-ui/lib/carousel';
    import ElCarouselElement from 'element-ui/lib/carousel-item';
    import 'element-ui/lib/theme-chalk/carousel.css';
    import 'element-ui/lib/theme-chalk/carousel-item.css';
    import sImg from '../../../assets/img/top.png';
    export default {

        components: {
            'el-collapse': ElCarousel,
            'el-collapse-item': ElCarouselElement
        },

        data() {
            return {
                sImg: sImg
            };
        },
        created() {},
        methods: {

            goto(id) {
                window.location.href = location.href.split('#')[0] + '#/detail?id=' + id;

            }

        }
    };
</script>

<style scoped lang='less'>
    .el-carousel__container {
        height: 0px;
    }

    .carousel-box {
        height: 530px;
        background: url("../../../assets/image/pic_banner.png") no-repeat center #02114c;
        overflow: hidden;
        .carousel-wrapper{
            width: 1200px;
            margin-left: 93px;
        }
        .slogan{
            margin: 84px 0 0 0px;
        }
        p{
            font-size: 16px;
            line-height: 30px;
            color: #fff;
            margin-left: 24px;
        }
        .slogan-title{
            width: 300px;
            height:40px;
            font-size:14px;
            line-height: 40px;
            color:#fff;
            text-align: center;
            margin-left: 24px;
            margin-top: 53px;
            background-image:url("../../../assets/image/icon_banner_more.png") ;
            background-repeat: no-repeat ;
            background-position: 268px center;
            background-color:#1A509D ;
            background-size: 12px 12px;
        }
        .slogan-title:after{
            content: '';
            display: inline-block;
            margin-left: 7px;
            margin-bottom: 3px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 6px;
            height: 6px;
            border-bottom: 1px solid #666;
            border-left: 1px solid #666;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(225deg);
            /* -webkit-transition-duration: 300ms; */
            transition-duration: 300ms;
        }
    }


</style>

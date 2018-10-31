
<template><section class="nav">
    <!--<img class="logo" src="../assets/img/logo.png" height="30"  alt="logo">-->
    <div class="containers">
        <div class="c-rows">
            <div class="c-spans" @click="clickfn('index',0)" :class="{active:0==ins}">
                <p class="p-line p-index">
                    首页
                </p>
            </div>
            <div class="c-spans" @click="clickfn('introduce',1)" :class="{active:1==ins}">
                <p class="p-line">
                    企业介绍
                </p>
            </div>
            <div class="c-spans" @click="clickfn('product',2)" :class="{active:2==ins}">
                <p class="p-line">
                    产品服务
                </p>
            </div>
            <div class="c-spans" @click="clickfn('case')" :class="{active:3==ins}">
                <p class="p-line">
                    工程案例
                </p>
            </div>
            <div class="c-spans" @click="clickfn('contact')" :class="{active:4==ins}">
                <p class="p-line">
                    联系我们
                </p>
            </div>
             <div class="c-spans" @click="clickfn('news')" :class="{active:5==ins}">
                <p>
                    新闻资讯
                </p>
            </div>
        </div>
        <div class="h-contact">
            联系我们
        </div>
    </div>
</section></template>

<script>
export default {
    props: {
        ins: 0
    },
    components: {},
    data() {
        return {};
    },
    created() {},
    methods: {
        loadMore() {},
        clickfn(type) {
             this.$router.push(type)
           // location.href = '/' + type;
        }
    }
};
</script>

<style scoped lang='less'>
.nav {
    position: relative;
    top: 0;
    width: 100%;
    height: 80px;
    overflow: hidden;
    background: #fff;
    .h-contact{
        width: 150px;
        height: 71px;
        padding-top:69px;
        color: #fff;
        background: url("../assets/image/icon_contact.png") no-repeat  center 41px #1A509D;
        background-size: 19px 19px;
        position: fixed;
        right: 0;
        top: 0;
        text-align: center;
        z-index: 9999;
    }
    .p-index{
        background: url("../assets/image/icon_home_gray.png") no-repeat 0 center;
        background-size: 15px 15px;
    }
    a {
        display: block;
        width: 100%;
        height: 100%;
    }
    .logo{
        position:absolute;
        top:50%;
        left:100px;
        margin-top:-15px;
    }
    .container{

        margin:0 auto;
    }
    .icons {
        width: 22px;
        height: 22px;
        margin: 0 auto;
        text-align: center;
        background: #fff;
        i {
            font-size: 22px;
            color: #999;
        }
    }
    .containers {
        position:absolute;
        right:150px;
        top:0;
    }
    .c-rows {
        display: block;
        overflow: auto;
        width: auto;
    }
    .c-spans {
        cursor:pointer;
        float:left;
        height:76px;
        border-bottom:4px solid #fff;
    }
    p {
        margin-top:29px;
        padding:0 19px;
        font: 14px/20px PingFangSC-Regular,Arial, Helvetica, sans-serif;
        text-align: center;
        color:#1F1F1F;
        position: relative;

    }
    div.active {
        p{
            color: #1A509D;
        }
        .p-index{
            background: url("../assets/image/icon_home.png") no-repeat 0 center;
            background-size: 15px 15px;
        }
        text-align: center;
        color: #1A509D;
        border-bottom:4px solid #1A509D;


    }
}



.p-line:after {
    content: "  ";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 23px;
    background-color: #EAEAEA;

}
</style>

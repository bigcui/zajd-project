<template><section class="pc-head">
   <!-- <div class="logo">
        <img width="134" src="../../../assets/img/home_logo.png">
    </div>
    <router-link to="search">
        <div class="pc-h-search">
            <div>
                搜索
            </div>
            <i class="icon iconfont icon-other_search"></i>
        </div>
    </router-link>
    -->
    <div class="container">
        <div class="c-row">
            <div class="c-span3" @click="goto(navData.a1.href)">
                <div class="icon-wrap">
                    <i class="icon iconfont icon-service_photo"></i>
                </div>
                <p>
                    {{ navData.a1.title}}
                </p>
            </div>
            <div class="c-span3" @click="goto(navData.a2.href)">
                <div class="icon-wrap">
                    <i class="icon iconfont icon-service_location"></i>
                </div>
                <p>
                    {{navData.a2.title}}
                </p>
            </div>
            <div class="c-span3" @click="goto(navData.a3.href)">
                <div class="icon-wrap">
                    <i class="icon iconfont icon-service_wheel"></i>
                </div>
                <p>
                    {{navData.a3.title}}
                </p>
            </div>
            <div class="c-span3" @click="goto(navData.a4.href)">
                <div class="icon-wrap">
                    <i class="icon iconfont icon-service_car"></i>
                </div>
                <p>
                    {{navData.a4.title}}
                </p>
            </div>
        </div>
        <div class="c-row">
            <div class="c-span3" @click="goto(navData.b1.href)">
                <div class="icon-wrap">
                    <i class="icon iconfont icon-service_cursor"></i>
                </div>
                <p>
                    {{navData.b1.title}}
                </p>
            </div>
            <div class="c-span3" @click="goto(navData.b2.href)">
                <div class="icon-wrap">
                    <i class="icon iconfont icon-service_sign"></i>
                </div>
                <p>
                    {{navData.b2.title}}
                </p>
            </div>
            <div class="c-span3" @click="goto(navData.b3.href)">
                
                <div class="icon-wrap">
                    <i class="icon iconfont icon-service_speech"></i>
                </div>
                <p>
                    {{navData.b3.title}}
                </p>
            
            </div>
            <div class="c-span3" @click="goto(navData.b4.href)">
                <div class="icon-wrap">
                    <i class="icon iconfont icon-service_information"></i>
                </div>
                <p>
                    {{navData.b4.title}}
                </p>
            </div>
        </div>
    </div>
</section></template>

<script>
import topdata from './top-data.js';
import $ from 'n-zepto';
export default {
    components: {

    },

    data() {
        return {
            navData: topdata()
        };
    },
    created() {},
    methods: {
        loadMore() {},
        goto(str) {
           
            if (str == '#') {
                let sh = $('#service').offset().top;
                $("body,html").scrollTop(sh );
                return false;
            }

            window.location.href = str;
        }

    }
};
</script>

<style scoped lang='less' >

.pc-head {
    min-height: 170px;
    background: url("../../../assets/img/top-bg.png") no-repeat #3fa8e8;
    background-size: 100% 100%;

    .logo {
        padding-top: 20px;
        text-align: center;
    }

    img {
        margin: 0 auto;
        text-align: center;
    }
    .pc-h-search {
        position: relative;
        padding: 0 13px 0 13px;
        i {
            position: absolute;
            top: 5.5px;
            left: 21px;
            font-size: 17px;
            color: #fff;
        }
        div {
            overflow: hidden;
            height: 28px;
            font-size: 12px;
            line-height: 29px;
            text-indent: 28px;
            color: #fff;
            border-radius: 2px;
            background: #1a72b8;
        }
    }
    .container {
        padding: 12px 13px 12px 13px;
        .icon-wrap {
            width: 39px;
            margin: 6px auto;
            text-align: center;
            border-radius: 20px;
            background: #fff;
            i {
                font-size: 32px;
                line-height: 39px;
                color: #35b6f7;
            }
        }
        p {
            font-size: 12px;
            text-align: center;
            color: #fff;
        }
    }
}
</style>

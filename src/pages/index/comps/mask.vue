<template>
    <section class="mask-page" v-if='showlock'>
        <div class="inner-box" @touchmove='unmove'>
            <div class="close" @click="close"><i class="icon iconfont icon-other_close"></i></div>
            <div class="content">
                <div class='top c-center'>
                    “局长信箱”为您服务
                </div>
                <div class="s-content" @touchmove='move'>
                    （一）“局长信箱”是我局反映<br> 信访问题的渠道之一，也是我局一进步密切 与人民群众联系的桥梁和纽带。受理举报、 咨询、批评建议、申诉、控告及受理范围 包括：
                    <br> 1、刑事、治安类违法犯罪线索；
                    <br> 2、咨询入口、出入境、交通管理等各类 公安业务；
                    <br> 3、对公安工作提出批评、建议；
                    <br> 4、对公安机关的各类处理决定提出申诉；
                    <br> 5、对公安民警在执法过程中发生的问题提出控告、 投诉； 6、涉及公安业务其他问题。
                    <br> （二）填报人应逐项如实、详尽填写相关内容
                </div>
                <div class="read-btn c-center">
                    <router-link to="letter">
                        <div> 我已阅读相关内容</div>
                    </router-link>
                </div>
            </div>
    
        </div>
    </section>
</template>

<script>
    //  
    
    import cTitle from '@/components/title';
    var preHandler = function(e) {
        e.preventDefault();
    }
    
    export default {
        name: 'lettermask',
        components: {
            cTitle
        },
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                showlock: false
            };
        },
        watch: {
            showlock(val) {
                this.$emit("visible-change", val);
            },
            value(val) {
                console.log(val);
                if(val){
                    $('body').addClass('over')
                }else{
                    $('body').removeClass('over')
                }
                this.showlock = val;
            }
    
        },
        created() {
            if (this.value) {
                this.showlock = true;
            }
        },
        methods: {
            close() {
                this.showlock = false;
                //hub.$emit('onEditComp', compName, compId, vm);
            },
            loadMore() {
    
            },
            move(e) {
                
            },
            unmove() {
                document.removeEventListener('touchmove', preHandler, false);
            }
    
        }
    };
</script>

<style  lang='less'>
    .over{
        overflow:hidden;
    }
    .inner-box {
        position: relative;
        top: 50%;
        margin: 0 auto;
        margin-top: -220px;
        height: 391.5px;
        width: 295px;
        padding-top: 49.5px;
    }
    
    .mask-page {
        position: fixed;
        height: 100%;
        z-index: #fff;
        left: 0;
        top: 0;
        overflow: hidden;
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
        .close {
            font-size: 17px;
            position: absolute;
            padding-bottom: 20px;
            right: 0px;
            top: 0px;
            height: 17px;
            width: 15px;
            color: #fff;
        }
        .read-btn {
            width: 212px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            background: #1d8fe1;
            margin: 0 auto;
            border-radius: 2px;
            a {
                color: #fff;
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .top {
            height: 42px;
            line-height: 42px;
            background: url(../../../assets/img/layer_topbj.png) no-repeat;
            background-size: 100%;
        }
        .s-content {
            padding: 11.5px 20px;
            line-height: 21px;
            font-size: 14px;
            height: 273px;
            overflow: auto;
        }
        .content {
            margin: 0 auto;
            width: 295px;
            border-radius: 2px;
            background: #fff;
            padding-bottom: 15px;
            overflow: hidden;
        }
    }
</style>

<template>
    <section id="service" class="service">
    
        <c-title :title="title"> </c-title>
        <div class="c-row box">
            <section class="part c-span2  content-line">
                  <div class="inner-first-child" @click="goto('http://www.bjgaj.gov.cn/apps/jzxx/index')">
                    <div class="icons"><img width="32" src="../../../assets/img/home_director.png" /></div>
                    <div class="content">
                        <div class="d-title c-line-clamp1">局长信箱</div>
                       <!-- <p class="d-des c-line-clamp1">与局长面对面</p>-->
                    </div>
                </div>
            </section>
            <section class="part c-span2">
                 <div class="inner-last-child" @click="goto('http://www.bjgaj.gov.cn/apps/dbwyztc/index')">
                    <div class="icons"><img width="32" src="../../../assets/img/home_representative.png" /></div>
                    <div class="content ">
                        <div class="d-title c-line-clamp1">代表委员直通车</div>
                        <!-- <p class="d-des c-line-clamp1">与代表委员互动</p> -->
                    </div>
                </div>
              
            </section>
        </div>
    </section>
</template>

<script>
    import hub from '@/common/hub';
    import cTitle from '@/components/title';
    export default {
    
        components: {
            cTitle
        },
    
        data() {
            return {
                title: '建议咨询'
            };
        },
        created() {
    
        },
        methods: {
            loadMore() {
    
            },
            goto(str) {
                window.location.href = str;
            },
            showMask() {
                hub.$emit('showMask', true)
            }
    
        }
    };
</script>

<style scoped lang='less'>
    .service {
        .box {
            padding: 15px 0px;
            display: flex;
            .content-line:after {
                content: "  ";
                position: absolute;
                right: 0;
                top: 0px;
                width: 1px;
                height: 100%;
                background-color: #ebeef0;
                -webkit-transform: scaleX(.5);
                transform: scaleX(0.5);
            }
            .part {
                
                position: relative;
                .icons {
                    float: left;
                }
                .inner-first-child {
                    float:right;
                    margin-right:15px;
                   
                }
                 .inner-last-child {
                    float:left;
                    margin-left:15px;
                   
                }
                .content {
                    margin-left: 8px;
                    float: left;
                    .c-line-clamp1{
                        min-width:85px;
                    }
                    .d-title {
                        color: #000;
                        font-size: 14px;
                        line-height:35px;
                    }
                    .d-des {
                        color: #666;
                        font-size: 12px;
                    
                    }
                }
            }
        }
    }
</style>

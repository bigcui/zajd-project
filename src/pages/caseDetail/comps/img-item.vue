<template>
    <section class="case-img">

        <div class="image-img">
            <img :src="detail.img" alt="">
        </div>
        <div class="des">
            <div class="d-title">
                <span class="h4">产品参数</span>
            </div>
            <ul>
                <li v-if="detail.name">
                    <span class="c-title">品牌:</span> <span class="c-result">{{detail.name}}</span>
                </li>
                <li v-if="detail.name">
                    <span class="c-title">型号:</span> <span lass="c-result">{{detail.name}}</span>
                </li>
                <li v-if="detail.name">
                    <span class="c-title">其他:</span> <span lass="c-result">{{detail.name}}</span>
                </li>
                <li v-if="detail.name">
                    <span class="c-title">其他:</span> <span lass="c-result">{{detail.name}}</span>
                </li>
            </ul>
        </div>
        
    
    </section>
</template>

<script>
    //  S
    import cLeftNav from '@/components/leftNav.vue';
    export default {
    
        components: {
            cLeftNav
        },
        props:['detail'],
        data() {
            return {
    
            };
        },
        created() {},
        mounted() {
    
        },
        methods: {
    
            loadMore() {},
             goto(id) {
                location.href= location.origin +'/newDetail?id=' + id
            }
    
        }
    };
</script>

<style scoped lang='less'>
    .case-img {
        position:relative;
        .image-img {
            width: 300px;
            height: 300px;
            img {
                width: 300px;
                min-height: 300px;
            }
        }
        .des {
            position: absolute;
            right: 0;
            top:0;
            width: 650px;
            .d-title {
                border-bottom: 1px solid #eee;
                height:30px;;
                 overflow: -webkit-paged-x;
                 margin-bottom:20px;
                .h4 {
                    font-size: 14px;
                    line-height: 20px;
                    color: #333;
                    border-bottom: 2px solid #7CCF5A;
                     padding-bottom:10px;
                }
               
            }
            li {
                clear: both;
                height: auto;
                padding-bottom: 11px;
                overflow: hidden;
                span{
                    line-height:20px;
                    font-size:14px;
                    color:#333;
                    float:left;
                    margin-left:20px;
                }
                padding-bottom:11px;
            }
        }
    }
</style>

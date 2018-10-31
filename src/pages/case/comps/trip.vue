<template>
    <section class="service-page">
       <div class="d-line"></div>
         <c-title :title="title" :lock="true" :line="true"> </c-title>
           <div class="content">
                 <div class="c-row">
                <div class="c-span3 c-center" @click="goto('http://www.bjgaj.gov.cn/gasw/apply/getHK_apply.action?applyzjzl=1')">
                    <div class="icon-wrap"><i class="icon iconfont icon-service_clipboard"></i></div>
                    <p>港澳商务备案</p>
                </div>
                <div class="c-span3 c-center" @click="goto('http://www.bjgaj.gov.cn/gasw/apply/getHK_apply.action?applyzjzl=2')">
                    <div class="icon-wrap"><i class="icon iconfont icon-service_post"></i></div>
                    <p>企业年审登记</p>
                </div>
                <div class="c-span3">
                   
                
                </div>
                
            </div>
           
           </div>
           
            
          
    </section>
</template>

<script>
    import cTitle from '@/components/title';
    export default {
        
        components: {
           cTitle
        },
        
        data() {
            return {
                title:'对公业务'
            };
        },
        created() {
            
        },
        methods: {
            loadMore() {
               
            },
            goto(str){
                window.location.href = str;
            }
            
        }
    };
</script>

<style scoped lang='less' >
 .service-page{
     .d-line{
         height:12.5px;
         background:#f5f5f5;
     }
        .content{
            padding:0 12.5px;
            i {
                font-size:32px;
                color:#1d7aa6;
            }
             p{
                 font-size:12px;
               }
            .icon-wrap{
                height:32px;
                margin-top:10px;
                overflow:hidden;
            }
        }
    }

</style>

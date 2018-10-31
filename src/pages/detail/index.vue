<template>
    <section>
        <c-content></c-content>
       
    </section>
</template>

<script>

   
   
    import Cnav from '@/components/nav.vue';
    import cContent from './comps/content.vue';

    export default {
        components: {
            cContent,
           
        },
        data() {
            return {
                
            };
        },
        created() {
            
        },
        mounted(){
           
        },
        methods: {
            loadMore() {
               
            },
            send(){

                this.$http
                    .post('/hackathon/infer', {
                        id:111,
                        is_default: 111,
                        tg_default: 1
                    })
                    .then(err=>{
                          console.log(err);
                    });
            },
            getArticleList() {
                let url = '/youyi/common/getArticle';
                let params = this.search;
                this.$http({
                    method: 'get',
                    url,
                    params
                }).then(res => {
                    let list = res.data.articleInfo || [];
                    if (list.length) {
                        list.forEach(item => {
                            this.list.push(item);
                        });
                        this.busy = false;
                        this.search.page++;
                    }
                    else {
                        this.isNoMoreData = true;
                    }
                });
            }
        }
    };
</script>

<style scoped>
    
</style>

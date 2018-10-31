<template>
    <section class="index-page">
        <cnav :ins="1"></cnav>
        <c-title :content="scontent">
        </c-title>
        <c-content></c-content>
        
       
        <c-footer></c-footer>
    </section>
</template>

<script>
    import Cnav from '@/components/nav.vue';
    import cTitle from '@/components/title.vue';
    import cContent from './comps/content.vue';
    import cFooter from '@/components/footer.vue';
    import hub from '@/common/hub';
    export default {
        components: {
            cTitle,
            Cnav,
            cContent,
            cFooter
        },
        data() {
            
            return {
                masklock: false,
                num: 0,
                scontent:{
                    title:'公司介绍',
                    des:'因为专注，所以专业'
                },
                
            };
        },
        beforeDestroy() {
            
        },
        created() {
            
        },
        mounted() {
            
          
        },
        methods: {
            bd(){
                this.num = 2;
            },
            loadMore() {},
            init() {
                this.initEvent();
            },
            initEvent() {
                hub.$on('showMask', this.showMask);
            },
            removeEvent() {
                hub.$off('showMask', this.showMask);
    
            },
            showMask(st) {
                this.masklock = st;
            },
            send() {
    
                this.$http
                    .post('/hackathon/infer', {
                        id: 111,
                        is_default: 111,
                        tg_default: 1
                    })
                    .then(err => {
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
                    } else {
                        this.isNoMoreData = true;
                    }
                });
            }
        }
    };
</script>

<style>
    .index-page {
        position: relative;
    }
</style>

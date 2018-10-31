<template>
    <section class="index-page">
        <cnav :ins="4"></cnav>
        <c-title :content="scontent">
        </c-title>
        <c-leftNav :list="list"></c-leftNav>
        <c-footer></c-footer>
    </section>
</template>

<script>
    import Cnav from '@/components/nav.vue';
    import cTitle from '@/components/title.vue';
    import cLeftNav from '@/components/leftNav.vue';
    import cFooter from '@/components/footer.vue';
    import hub from '@/common/hub';
    export default {
        components: {
            cTitle,
            Cnav,
            cLeftNav,
            cFooter
        },
        data() {
            return {
                masklock: false,
                scontent:{
                    title:'联系我们',
                    des:'因为专注，所以专业'
                },
                list: [{
                        title: '21',
                        des: 'des',
                        id: '01'
                    },
                    {
                        title: '11',
                        des: 'des',
                        id: '01'
                    },
                    {
                        title: '31',
                        des: 'des',
                        id: '01'
                    }
                ]
            };
        },
        beforeDestroy() {
            this.removeEvent();
        },
        created() {
    
        },
        mounted() {},
        methods: {
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

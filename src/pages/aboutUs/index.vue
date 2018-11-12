<template>

    <section class="about-page">
        <cnav :ins="1"></cnav>
        <s-title>关于我们</s-title>
        <c-content></c-content>
        <c-footer></c-footer>
    </section>
    </template>

    <script>
        import Cnav from '@/components/nav.vue';
        import sTitle from '@/components/stitle.vue';
        import cFooter from '@/components/footer.vue';
        import cContent from  './comps/content.vue'

        import hub from '@/common/hub';

        export default {
            components: {
                Cnav,
                sTitle ,
                cContent,
                cFooter
            },
            data() {
                return {
                    masklock: false
                };
            },
            beforeDestroy() {
                this.removeEvent();
            },
            created() {

            },
            mounted() {
            },
            methods: {
                loadMore() {
                },
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
                        }
                        else {
                            this.isNoMoreData = true;
                        }
                    });
                }
            }
        };
    </script>

    <style>


    </style>

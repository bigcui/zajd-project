<template><section class="index-page">
    <cnav :ins="0"></cnav>
    <c-lunbo></c-lunbo>
    <c-news></c-news>
    <c-info></c-info>
    <c-product></c-product>
    <c-down></c-down>
    <c-case></c-case>
    <c-point></c-point>
    <c-apply></c-apply>
    <!--<c-honor></c-honor>-->
    <c-footer></c-footer>
</section></template>

<script>
import cLunbo from './comps/lunbo_2.vue';

import Cnav from '@/components/nav.vue';
import cNews from './comps/news.vue';
import cInfo from './comps/info.vue';
import cProduct from './comps/product.vue';
import cDown from './comps/down.vue';
import cCase from './comps/case.vue';
import cPoint from './comps/point.vue';
import cApply from './comps/apply.vue';
import cFooter from '@/components/footer.vue';
import hub from '@/common/hub';
export default {
    components: {
        cLunbo,
        Cnav,
        cNews,
        cInfo,
        cProduct,
        cDown,
        cCase,
        cPoint,
        cApply,
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


.index-page {
    position: relative;
}
</style>

<template><section class="detail-page">
    <cheader>
        详情
    </cheader>
    <div class="content">
        <div class="d-title">
            {{N_TITLE}}
        </div>
        <div class="from-des">
            <!--<span class="t-author">警务报道</span> -->
            <span class="t-time">{{ctime(MTIME)}}</span>
            <span class="t-more">未经许可不得转载</span>
        </div>
        <!-- 
                        //    <div class="more-title">
                        //     这美好的一幕，居然就这样从我们的幻想里，从让人沉迷的小说里穿越到你身边。
                
                           </div>
                           <div class="part">
                            这美好的一幕，居然就这样从我们的幻想里，从让人沉迷的小说里穿越到你身边。
                
                           </div>副标题 -->
        <div class="hidepart">
            {{N_CONTENT}}
        </div>
        <div class="part">
        </div>
    </div>
</section></template>

<script>
//  S
import Cheader from '@/components/head.vue';
import moment from 'moment';
import config from '@/common/config';
import $ from 'n-zepto';
export default {

    components: {
        Cheader
    },

    data() {
        return {
            title: '对公业务',
            N_CONTENT: '',
            author: '警务报道',
            N_TITLE: '',
            MTIME: ''
        };
    },
    created() {

        this.loadMore();

    },
    methods: {
        ctime(time) {
            return moment.unix(time).format('YYYY-MM-DD');
        },
        loadMore() {
            let url = config.dev;

            let params = {
                mod: 'api',
                id: this.$route.query.id
            };
            this.$http({
                method: 'get',
                url,
                params
            }).then(res => {

                if (res.error_code === 0) {
                    this.MTIME = res.data.MTIME;
                    this.N_CONTENT = res.data.N_CONTENT;
                    this.N_TITLE = res.data.N_TITLE;
                    setTimeout(function () {
                        $('.part').html($('.hidepart').text());
                    }, 30);
                }
                else {
                    console.log(res, '数据错误');
                }
            });
        }
    }

};
</script>

<style scoped lang='less'>
img {
    display: block;
    width: 100%;
}
.content {
    padding: 20px 17.5px;
    font: 16px/26px Arial, Helvetica, sans-serif;
    img {
        display: block;
        width: 100%;
    }
    .hidepart {
        position: fixed;
        top: -1000x;;
        width: 1px;
        height: 1px;
        opacity: 0;
    }
    .d-title {
        font-size: 21px;
        font-weight: bold;
        line-height: 28px;
    }
    .d-title {
        font-size: 21px;
        font-weight: bold;
        line-height: 28px;
    }
    .more-title {
        margin-top: 30px;
        font-size: 16px;
        font-weight: bold;
        line-height: 26px;
    }
    .part {
        margin-top: 20px;
        img {
            display: block;
            width: 100%;
        }
    }
}

.from-des {
    margin-top: 11.5px;
    font: 12px/22px Arial, Helvetica, sans-serif;
    .t-time {
        margin: 4px 0;
        color: #d2d2d2;
    }
    .t-more {
        margin: 4px 0;
        color: #fe2f2f;
    }
}
</style>

<template>

<section class="infroduce-content max-width2">

<div class="s-content" v-if="num==0">
    <template v-for="(item,index) in listItems">
        <c-item :detail="item"></c-item>
    </template>
</div>

</section>

</template>

<script>
//  S
import cLeftNav from '@/components/leftNav.vue';

import cItem from '@/components/new.vue';
export default {

    components: {
        cLeftNav,
        cItem
    },

    data() {
        return {
            num: 0,
            listItems: [
                {
                    title: '产品解释介绍',
                    img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                    id: '01',
                    date: '2010-01-02',
                    des: '为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”。'
                },
                {
                    title: '公司介绍',
                    date: '2010-01-02',
                    img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                    id: '01',
                    des: '为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”。'

                },
                {
                    title: '公司介绍',
                    date: '2010-01-02',
                    img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                    id: '01',
                    des: '为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”。'

                },
                {
                    title: '公司介绍',
                    date: '2010-01-02',
                    img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                    id: '01',
                    des: '为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”。'

                },
                {
                    title: '公司介绍',
                    date: '2010-01-02',
                    img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                    id: '01',
                    des: '为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”，拉动我司员工持续不断的改善与进步，创造出一个“坚守为了持续落实推动“旗鱼行动”。'

                }

            ],
            list: [{
                title: '公司新闻',
                img: 'des sdssd  sdds',
                id: '01'
            },
                {
                    title: '行业动态',
                    des: 'des sdds',
                    id: '02'
                }
            ]
        };
    },
    created() {},
    mounted() {},
    methods: {

        loadMore() {}

    }
};
</script>

<style scoped lang='less'>
.infroduce-content {
    overflow: auto;
    height: auto;
    min-height: 600px;
    padding-top: 77px;

    .s-content {
        width: 1240px;
        margin: 0 auto  ;

    }
}
</style>

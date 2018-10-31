<template><section class="infroduce-content max-width2">
    <c-left-nav v-model="num" :list="list"></c-left-nav>
    <div class="s-content" v-if="num==0">
         <template v-for="(item,index) in listItems">
            <c-img :detail="item"></c-img>
         </template>
    </div>
    <div class="s-content"  v-if="num==1">
       <p>产品介绍2</p>
        
    </div>
    <div class="s-content"  v-if="num==2">
       <p>产品介绍3</p>
    </div>
</section></template>

<script>
//  S
import cLeftNav from '@/components/leftNav.vue';

import cImg from '@/components/imgDetail.vue';
export default {

    components: {
        cLeftNav,
        cImg
    },

    data() {
        return {
            num: 0,
            listItems:[
                {
                title: '产品解释介绍',
                img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                id: '01'
                },
                 {
                title: '公司介绍',
                img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                id: '01'
                },
                 {
                title: '公司介绍',
                img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                id: '01'
                },
                 {
                title: '公司介绍2',
                img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                id: '01'
                },
                 {
                title: '公司介绍2',
                img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=4008079562,1815764295&fm=85&s=EC42408EE62815070D38C9B10300809F',
                id: '01'
                }

            ],
            list: [{
                title: '公司介绍',
                img: 'des sdssd  sdds',
                id: '01'
            },
                {
                    title: '公司介绍',
                    des: 'des sdds',
                    id: '01'
                },
                {
                    title: '31 公司介绍',
                    des: 'des dsds',
                    id: '01'
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
    padding-top: 20px;
    height:auto;
    overflow:auto;
    min-height:600px;
    .s-content {
        float:right;
        width: 980px;
        p {
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0;
            color: #333;
           margin-bottom:20px ;
        }
        img{
            
        }
    }
}
</style>

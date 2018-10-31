/**
 * @file Hello 组件
 *
 * @author bigcui
 * 2017年8月31日
 */

<template>
<div class="s-img" @click="goto(detail.id)">
    <div class="img-box">
        <img :src="detail.img" alt="">
    </div>
    <p>
        {{detail.title}}
    </p>
</div


></template>

<script>

export default {
    props: ['detail'],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            content: ''
        };
    },
    methods: {
         goto(id) {
             this.$router.push({
                 'path':'caseDetail',
                  'query':{
                      'id':id
                  }
             })
               
            }
    }
};
</script>

<style lang="less" scoped >
.s-img {
    margin-right:10px;
    width:230px;
    display:inline-block;
    cursor:pointer;
    .img-box{
        width:230px;
        height:230px;
      overflow:hidden;
      
    }
    img{
        width:230px;
        display:block;
        min-height:230px;
    }
    p{
        font-size: 14px;
color: #333333;
line-height:60px;
    text-align: center;
    }
}
</style>

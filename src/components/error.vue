
<template>
<div class="result-bar">
      <img src="../assets/404.png"/>
      <div class="c-font-normal c-color c-gap-top-small c-gap-inner-bottom c-gap-inner-top">访问页面异常</div>
      <div class="c-btn btn-reload c-gap-top-large" @click='reload'>重新加载</div>
</div>
</template>

<script>
export default {
    name: 'error',
    data() {
        return {
        };
    },
    methods: {
        reload() {
            location.reload();
        }
    }
};
</script>

<style scoped>
.result-bar {
    position:relative;
    top:50%;
    padding-top:90px;
    text-align: center;
}
.result-bar img {
    width:75.6666px;
    margin:0 auto;

}
.btn-reload {
   margin:0 auto;
   width:89px;
   margin-bottom:100px;
}
</style>

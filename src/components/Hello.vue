/**
 * @file Hello 组件
 *
 * @author bigcui
 * 2017年8月31日
 */

<template>
<div class="hello">
    <router-link to="">Go to Foo</router-link>
</div>
</template>

<script>

export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            content: ''
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.$http.get('/ara/list').then(res => {
                // this.content = res.data;
            });

            
        }
    }
};
</script>

<style scoped>
.hello {
    font-weight: 700;
}
</style>

<template><div class="header">
    <div class="header-left">
        <slot>
        </slot>
    </div>
    <div class="more">
        更多
    </div>
</div></template>

<script>

export default {
    name: 'backheader',
    props: ['left'],
    data() {
        return {
        };
    },
    methods: {

        /**
         * 左上角返回按钮，配置了left的值，则跳转到left，否则返回
         */
        leftClick() {
            if (this.left) {
                location.href = this.left;
                return;
            }

            history.back();
        },

        /**
         * 右上角按钮，会向父元素触发 rightClick 事件
         */
        rightClick() {
            this.$emit('rightClick');
        }
    }
};
</script>
<style lang="less" scoped>

.header {
    height: 54px;
    margin: 10px 0;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    font-weight: bold;
    line-height: 54px;
    position:relative;
    .more {
        position:absolute;
        right:0;
        top: 13px;
        font-size: 12px;
        color: #326ed2 ;
    }
}
</style>
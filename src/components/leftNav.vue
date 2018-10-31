<template>

    <section class="left-bar">
    <ul>
        <li v-for="(item,index) in list" :class="{active:index == val}" @click="tab(index)">
            <div>
                <h3>{{item.title}} </h3>
                <p>
                    {{item.des}}
                </p>
            </div>
        </li>
    </ul>
</section>
</template>

<script>
export default {

    props: ['list', 'value'],

    data() {
        return {
            val: this.value
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    watch: {
        value(val) {
            console.log(val);
            this.val = this.value;
        }
    },
    methods: {
        tab(index) {
            this.val = index;
            this.$emit('input', this.val);
        },

        /**
         * 左上角返回按钮，配置了left的值，则跳转到left，否则返回
         */
        leftClick() {
            if (this.left) {
                location.href = this.left;
                return;
            }

            history.back();
        }

    }
};
</script>

<style lang="less" scoped>
.left-bar {
    width: 180px;
    height: auto;
    min-height: 600px;
    border-left: 1px solid #eee;
    float:left;
    ul {
        padding-top: 20px;
    }
    li {
        height: 40px;
        margin-bottom: 21px;
        cursor:pointer;
        div {
            padding-left: 20px;
        }
        h3 {
            font-size: 14px;
            line-height: 20px;
            color: #000;
        }
        p {
            font-size: 12px;
            line-height: 17px;
            color: #999;
        }
    }
    .active div {
        border-left: 4px solid #7ccf5a;
    }
}
</style>

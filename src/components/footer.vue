<template><div class="footer">
    <div class="f-content max-width">
        <div class="f-itemlist">
            <section class="f-item">
                <h3>公司介绍</h3>
                <ul>
                    <li>
                        公司文化
                    </li>
                    <li>
                        公司致辞
                    </li>
                    <li>
                        公司资质
                    </li>
                </ul>
            </section>
            <section class="f-item">
                <h3>产品服务</h3>
                <ul>
                    <li>
                        公司文化
                    </li>
                    <li>
                        公司致辞
                    </li>
                    <li>
                        公司资质
                    </li>
                </ul>
            </section>
            <section class="f-item">
                <h3>工程案例</h3>
                <ul>
                    <li>
                        公司文化
                    </li>
                    <li>
                        公司致辞
                    </li>
                    <li>
                        公司资质
                    </li>
                </ul>
            </section>
            <section class="f-item">
                <h3>合作伙伴</h3>
                <ul>
                    <li>
                        公司文化
                    </li>
                    <li>
                        公司致辞
                    </li>
                    <li>
                        公司资质
                    </li>
                </ul>
            </section>
        </div>
    </div>
    <div class="footer-section max-widt">
       <p>@2018 北京铸安精电科技有限公司  版权所有 京备:0987656789</p>
    </div>
</div></template>

<script>
export default {
  
    props: ['left'],
    data() {
        return {};
    },
    methods: {

        /**
         * 左上角返回按钮，配置了left的值，则跳转到left，否则返回
         */
        searchClick() {
            alert('go');
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
.footer{
    text-align: center;
    position:fixed;
    width:100%;
    bottom:0;
    z-index:999;
     background:#F5F5F5;
    .f-itemlist{
        clear:both;
        height:auto;
        overflow:hidden;
       
        padding-top:15px;
        height:135px;
        padding-left:200px;
        .f-item{
            float:left;
            width:132px;
            border-left:1px solid #ddd;
            height:120px;
            h3{
                color:#333;
                font-size:14px;
                line-height:20px;
                margin-bottom:5px;
            }
            li{
                font-size:12px;
                line-height:17px;
                color:#666;
                cursor: pointer;
            }
        }
    }
    .footer-section{
        background:#232C39;
        font-size:12px;
        color:#999;
        line-height:40px;
        height:40px;
    }
}
</style>
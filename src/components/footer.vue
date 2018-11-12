    <template>
        <div class="footer">
        <div class="f-content">
            <div class="contact-part">
               <div class="inner-contact">
                   <p>如果您有任何问题或疑问，请随时与我们联系。</p>
                   <div class="contact-btn"><img src="../assets/image/icon_contact.png" alt=""><span>联系我们</span></div>

               </div>
                  </div>
            <div class="f-itemlist">
                <div class="inner-list">
                    <section class="f-item">
                        <div class="title-item">
                            <p class="name">公司介绍</p>
                            <p class="title">Company Introduce</p>
                        </div>
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
                        <div class="title-item">
                            <p class="name">产品服务</p>
                            <p class="title">Product & Service</p>
                        </div>
                        <ul>
                            <li>
                                中压总线
                            </li>
                            <li>
                                低压总线
                            </li>
                            <li>
                                配电咨询
                            </li>
                            <li>
                                配电设计
                            </li>
                        </ul>
                    </section>
                    <section class="f-item">
                        <div class="title-item">
                            <p class="name">合作伙伴</p>
                            <p class="title">Cooperation</p>
                        </div>
                        <ul>
                            <li>
                                合作案例
                            </li>
                            <li>
                                联系我们
                            </li>
                            <li>
                                友情链接
                            </li>
                        </ul>
                    </section>
                    <section class="f-item">
                        <div class="title-item">
                            <p class="name">其他</p>
                            <p class="title">Others</p>
                        </div>
                        <ul>
                            <li>
                                新闻动态
                            </li>
                            <li>
                                加入我们
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
        <div class="footer-section max-widt">
            <div class="inner-law">
                <span>Copyright@{{year}} 北京铸安精电科技有限公司 版权所有</span>
                <span>京备: 0987656789</span>
            </div>
        </div>
    </div></template>

    <script>
    export default {

        props: ['left'],
        data() {
            return {
                year:new Date().getFullYear()
            };
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
         background:#F5F5F5;

        .contact-part{
            min-width: 1200px;
            background: #1A509D;
            .inner-contact{
                width: 1200px;
                margin: 0 auto;
            }

            font-family: PingFangSC-Semibold;
            font-size: 20px;
            height: 120px;

            color: #FFFFFF;
            p{
                margin-left: 218px;
                font-size: 20px;
                line-height: 120px;
                text-align: left;
                float: left;
            }
            .contact-btn{
                float: right;
                margin-right: 228px;
                margin-top:30px;
                width: 300px;
                height: 56px;
                line-height: 56px;
                text-align: center;
                border: 1px solid #7D9DE0;
                img{
                    vertical-align: middle;
                    margin-right: 10px;
                    width: 24px;
                    display: inline-block;
                    margin-top: -3px;
                }
                span{
                    font-size: 20px;
                    line-height: 56px;
                }
            }
        }
        .f-itemlist{
            clear:both;
            height:338px;
            overflow:hidden;

            background: #000131;
            .inner-list{
                width: 1200px;
                margin: 0 auto;

            }

            .f-item{
                float:left;
                margin-right: 232px;
                margin-top: 78px;
                .title-item{
                    .name{
                        font-family: PingFangSC-Semibold;
                        font-size: 16px;
                        color: #FFFFFF;
                        line-height: 22px;
                        margin-bottom: 16px;
                    }
                    .title{
                        font-family: DIN-Regular;
                        font-size: 12px;
                        color: #1A509D;
                        line-height: 17px;
                    }
                    margin-bottom: 24px;
                }
                li{
                    cursor: pointer;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #86868C;
                    margin-bottom: 15px ;

                }
                li:before{
                    content: '-';
                }
            }
            .f-item:last-child{
                margin-right: 0;
            }
        }
        .footer-section{
            background: #010221;
            font-size:12px;
            height:54px;
            .inner-law{
                width: 1200px;
                margin: 0 auto;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                line-height: 54px;
                color: #999999;

            }
            span:first-child{
                float: left;
                margin-left: 120px;

            }
            span:last-child{
                float: right;
                margin-right: 120px;
            }

        }
    }
    </style>

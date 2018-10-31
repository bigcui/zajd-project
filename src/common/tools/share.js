/**
 * Created by huxiaohui02 on 17/01/03.
 * @file share.js
 */
/* eslint-disable */
// 加载share公共css
let $shareStyle = $('<style data-for="pmd/share/share"></style>');
$shareStyle.text('.c-share-list{overflow:hidden}.c-share-list .c-flexbox:not(:first-of-type){margin-top:12px}.c-share-list .c-share-btn{width:50px;-webkit-box-flex:1;-webkit-flex:1 1 auto;color:#666;text-align:center;font-size:13px;line-height:1}.c-share-list .c-share-btn .c-img{max-width:50px;margin:0 auto;background:#fff;border:1px solid #f0f0f0;border-radius:50%}.c-share-cancel-btn,.c-share-copytip-cancel-btn{width:100%;margin-top:20px;color:#333;font-size:16px;line-height:48px;background:#f8f8f8;border-top:#eaeaea 1px solid}.c-share-wechat-tips{position:fixed;top:0;left:0;z-index:999;width:100%;height:100%;background:rgba(0,0,0,.6) url(//m.baidu.com/se/static/pmd/pmd/share/images/wxtips.png) right 32px top 10px/50% no-repeat}.c-popup-wrapper .c-share-popup-modal{background-color:#f1f1f1}.c-share-popup-modal .c-popup-head{display:none}.c-share-popup-modal .c-popup-content{margin:0 auto;padding-top:20px}.c-share-popup-modal .c-share-list .c-share-btn{width:60px;font-size:11px}.c-share-popup-modal .c-share-list .c-share-btn .c-img{max-width:60px}.c-share-popup-modal .c-share-list .c-flexbox:not(:first-of-type){margin-top:28px}.c-share-copytip-content{padding:0 20px;color:#333;text-align:left}.c-share-copytip-text{font-size:16px;margin-bottom:10px}.c-share-copytip-linkwr{padding:7px 10px;font-size:14px;line-height:21px;border:1px dotted #d9d9d9;word-break:break-all}.c-share-copytip-link:visited,.c-share-copytip-link{color:#333}');
$('head').append($shareStyle);

let defaultOpt = {
    url: window.location.href,
    title: '百度搜索有惊喜', // 分享至外站的title,必选
    content: '百度搜索有惊喜', // 分享至外站的摘要,可选,默认用title替代
    iconUrl: 'https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg',
    color: '#666', // 文字颜色配置，#333，#666，#999
    channel: ['wxfriend', 'pyq', 'qqfriend', 'qzone', 'sinaweibo', 'more'], // 分享渠道配置
    custom: []
};

// 加载适配组件并获取当前适配信息
// let detect = require('./detect');
// console.log('detect' + detect)
import Util from '../../static/common';
let detect = Util.detect();
let OS = detect.os;
let Browser = detect.browser;
let isZbios = (Browser.n == 'zbios') ? 1 : 0;
let isUC = (Browser.n == 'uc' && (typeof (ucweb) != 'undefined' || typeof (ucbrowser) != 'undefined')) ? 1 : 0;
let isQQ = (Browser.n == 'qq' && Browser.v && Browser.v > '5.4') ? 1 : 0;
let isWechat = (Browser.n == 'wechat') ? 1 : 0;

// 在qq浏览器5.4版本以上需要加载qq shareapi
let dtd = $.Deferred();
if (isQQ) {
    // zepto $.ajax在qq浏览器上无法加载这个api url,永远返回fail,jquery以及直接请求均可以,原因不明,采用原生方法实现异步加载
    // TODO: 查清原因！！！！！！！！！
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function () {
        if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
            dtd.resolve();
        }

    };
    script.src = '//jsapi.qq.com/get?api=app.share';
    $('head').append(script);
}

// 手百分享接口
let nativeShare = function (cfg, encode) {
    let onSuccess = function () {};
    let onFail = function () {};
    if (encode) {
        cfg.url = encodeURIComponent(cfg.url);
        cfg.linkUrl = encodeURIComponent(cfg.url);
    }

    // 以这种方式require是为了避免过早加载aio组件
    require(['./aio.min.js'], function () {
        if (Box.os.android) {
            Box.android.invokeApp('Bdbox_android_utils', 'callShare', [JSON.stringify(cfg), window.successFnName || 'console.log', window.errorFnName || 'console.log']);
        }
        else {
            Box.ios.invokeApp('callShare', {
                options: encodeURIComponent(JSON.stringify(cfg)),
                errorcallback: 'onFail',
                successcallback: 'onSuccess'
            });
        }
    });

};

// UC分享接口
let ucShare = function (to_app, opt) {
    let ucAppList = {
        sinaweibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
        wxfriend: ['kWeixin', 'WechatFriends', 1, '微信好友'],
        pyq: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
        qqfriend: ['kQQ', 'QQ', '4', 'QQ好友'],
        qzone: ['kQZone', 'QZone', '3', 'QQ空间']
    };

    let url = opt.url;
    let title = opt.title;
    let from = '';
    let img = '';
    let desc = opt.content;

    to_app = to_app == '' ? '' : (OS.n == 'ios' ? ucAppList[to_app][0] : ucAppList[to_app][1]);

    // 安卓uc qq空间分享特殊逻辑
    // 伪协议失效，目前该伪协议只能打开QQ apk，并不能打开分享页面，uc端调用的sdk方法未知
    // if (to_app == 'QZone') {
    //     B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url="+img+"&title="+title+"&description="+desc+"&url="+url+"&app_name="+from;
    //     k = document.createElement("div"), k.style.visibility = "hidden", k.innerHTML = '<iframe src="' + B + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(k), setTimeout(function () {
    //         k && k.parentNode && k.parentNode.removeChild(k)
    //     }, 5E3);
    // }

    if (typeof (ucweb) != 'undefined') {
        // 判断ucweb方法是否存在,安卓uc中可以使用
        ucweb.startRequest('shell.page_share', [title, title, url, to_app, '', '@' + from, '']);
    }
    else if (typeof (ucbrowser) != 'undefined') {
        // 判断ucbrowser方法是否存在,ios uc中可以使用
        ucbrowser.web_share(title, title, url, to_app, '', '@' + from, '');
    }

};

// QQ浏览器分享接口
let qqShare = function (to_app, opt) {
    let qqAppList = {
        sinaweibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
        wxfriend: ['kWeixin', 'WechatFriends', 1, '微信好友'],
        pyq: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
        qqfriend: ['kQQ', 'QQ', '4', 'QQ好友'],
        qzone: ['kQZone', 'QZone', '3', 'QQ空间']
    };

    to_app = to_app == '' ? '' : qqAppList[to_app][2];
    let ah = {
        url: opt.url,
        title: opt.title,
        description: opt.content,
        img_url: '',
        img_title: '',
        to_app: to_app, // 微信好友1,腾讯微博2,QQ空间3,QQ好友4,生成二维码7,微信朋友圈8,啾啾分享9,复制网址10,分享到微博11,创意分享13
        cus_txt: '请输入此时此刻想要分享的内容'
    };
    ah = to_app == '' ? '' : ah;

    // qq share api加载完毕后执行
    $.when(dtd).done(function () {
        if (typeof (browser) != 'undefined' && typeof (browser.app) != 'undefined') {
            browser.app.share(ah);
        }

    });
};

// 微信显示分享提示浮层
let TIME;
let wechatTips = function () {
    if ($('.c-share-wechat-tips').length) {
        $('.c-share-wechat-tips').show();
    }
    else {
        $('body').append($('<div class="c-share-wechat-tips"></div>'));
        $('.c-share-wechat-tips').on('click', function () {
            $(this).hide();
            clearTimeout(TIME);
        });
    }

    TIME = setTimeout(function () {
        $('.c-share-wechat-tips').hide();
        clearTimeout(TIME);
    }, 2000);
};

/* 生成短链接 */
let getShotLink = function (url) {
    let det = $.Deferred();
    let requrl = 'http://mysearch.pae.baidu.com/api/s';

    if (window.location.protocol === 'https:') {
        requrl = 'https://sp0.baidu.com/5LMDcjW6BwF3otqbppnN2DJv/mysearch.pae.baidu.com/api/s';
    }

    $.ajax({
        url: requrl,
        type: 'GET',
        timeout: 1000,
        dataType: 'jsonp',
        jsonp: 'cb',
        data: {
            params: JSON.stringify([url])
        }
    })
        .done(function (data) {
            if (data && data.status == '0' && data[url]) {
                det.resolve(data[url]);
            }
            else {
                det.resolve(url);
            }
        })
        .fail(function () {
            det.resolve(url);
        });

    return det.promise();
};

/* 微信分享复制链接提醒 */
let copyLinkPopup;
let copyLinkTip = function (url) {
    $.when(getShotLink(url)).then(function (shoturl) {
        let html = [
            '<div class="c-share-copytip-content">',
            '<div class="c-share-copytip-text">长按复制下方链接，去粘贴给好友吧：</div>',
            '<div class="c-share-copytip-linkwr"><a class="c-share-copytip-link" href="' + shoturl + '" target="_blank">' + shoturl + '</a></div>',
            '</div>',
            '<div class="c-share-copytip-cancel-btn">取消</div>'
        ].join('');

        require(['./popup'], function (Popup) {
            copyLinkPopup = new Popup({
                content: html,
                customClassName: 'c-share-popup-modal'
            });

            // 点击"取消"按钮时关闭浮层
            $('.c-share-copytip-cancel-btn').on('click', function () {
                copyLinkPopup.closePopup();
            });
            $('.c-share-copytip-link').on('click', function (event) {
                return false;
            });
        });
    });
};

// 朋友圈分享按钮配置
let pyq = {
    key: 'pyq',
    icon: '//m.baidu.com/se/static/pmd/pmd/share/images/pyq_2.png',
    title: '朋友圈',
    cb: (function () {
        let fn;
        if (isZbios) {
            // 手百调起逻辑
            fn = function (opt) {
                opt.mediaType = 'weixin_timeline';
                nativeShare(opt, false);
            };
        }
        else if (isUC) {
            // uc调起逻辑
            fn = function (opt) {
                ucShare('pyq', opt);
            };
        }
        else if (isQQ) {
            // qq调起逻辑
            fn = function (opt) {
                qqShare('pyq', opt);
            };
        }
        else if (isWechat) {
            fn = function (opt) {
                wechatTips();
            };
        }
        else {
            fn = function (opt) {
                copyLinkTip(opt.url);
            };
        }
        return fn;
    })()
};

// 微信好友分享按钮配置
let wxfriend = {
    key: 'wxfriend',
    icon: '//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend_2.png',
    title: '微信好友',
    cb: (function () {
        let fn;
        if (isZbios) {
            // 手百调起逻辑
            fn = function (opt) {
                opt.mediaType = 'weixin_friend';
                nativeShare(opt, false);
            };
        }
        else if (isUC) {
            // uc调起逻辑
            fn = function (opt) {
                ucShare('wxfriend', opt);
            };
        }
        else if (isQQ) {
            // qq调起逻辑
            fn = function (opt) {
                qqShare('wxfriend', opt);
            };
        }
        else if (isWechat) {
            fn = function (opt) {
                wechatTips();
            };
        }
        else {
            fn = function (opt) {
                copyLinkTip(opt.url);
            };
        }
        return fn;
    })()
};

// qq好友分享按钮配置
let qqfriend = {
    key: 'qqfriend',
    icon: '//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend_2.png',
    title: 'QQ好友',
    cb: (function () {
        let fn;
        if (isZbios) {
            // 手百调起逻辑
            fn = function (opt) {
                opt.mediaType = 'qqfriend';
                nativeShare(opt, false);
            };
        }
        else if (isUC) {
            // uc调起逻辑
            fn = function (opt) {
                ucShare('qqfriend', opt);
            };
        }
        else if (isQQ) {
            // qq调起逻辑
            fn = function (opt) {
                qqShare('qqfriend', opt);
            };
        }
        else {
            fn = function (opt) {
                copyLinkTip(opt.url);
            };
        }
        return fn;
    })()
};

// qq空间分享按钮配置
let qzone = {
    key: 'qzone',
    icon: '//m.baidu.com/se/static/pmd/pmd/share/images/qzone_2.png',
    title: 'QQ空间',
    cb: (function () {
        let fn;
        if (isZbios) {
            // 手百调起逻辑
            fn = function (opt) {
                opt.mediaType = 'qqdenglu';
                nativeShare(opt, false);
            };
        }
        else if (isUC && OS.n == 'ios') {
            // uc调起逻辑
            fn = function (opt) {
                ucShare('qzone', opt);
            };
        }
        else if (isQQ) {
            // qq调起逻辑
            fn = function (opt) {
                qqShare('qzone', opt);
            };
        }
        else {
            // 普通浏览器
            fn = function (opt) {
                // 用sns.qzone.qq.com这个域名会发生一次跳转，url会超长
                // let qqUrl = 'url=' + encodeURIComponent(opt.url) + '&summary=' + opt.content + '&title=' + opt.title + '&pics=' + encodeURIComponent(opt.iconUrl);
                // window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + qqUrl);
                let qqUrl = 'url=' + encodeURIComponent(opt.url) + '&imageUrl=' + encodeURIComponent(opt.iconUrl) + '&summary=' + opt.content + '&title=' + opt.title;
                window.open('http://qzs.qzone.qq.com/open/connect/widget/mobile/qzshare/index.html?' + qqUrl);
            };
        }
        return fn;
    })()
};

// 新郎微博分享按钮配置
let sinaweibo = {
    key: 'sinaweibo',
    icon: '//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo_2.png',
    title: '新浪微博',
    cb: (function () {
        let fn;
        if (isZbios) {
            // 手百调起逻辑
            fn = function (opt) {
                opt.mediaType = 'sinaweibo';
                nativeShare(opt, false);
            };
        }
        else if (isUC) {
            // uc调起逻辑
            fn = function (opt) {
                ucShare('sinaweibo', opt);
            };
        }
        else if (isQQ) {
            // qq调起逻辑
            fn = function (opt) {
                qqShare('sinaweibo', opt);
            };
        }
        else {
            // 普通浏览器
            fn = function (opt) {
                window.open('http://v.t.sina.com.cn/share/share.php?url=' + encodeURIComponent(opt.url) + '&title=' + encodeURIComponent(opt.title));
            };
        }
        return fn;
    })()
};

let more = {
    key: 'more',
    icon: '//m.baidu.com/se/static/pmd/pmd/share/images/more_2.png',
    title: '更多',
    cb: (function () {
        let fn;
        if (isZbios) {
            // 手百调起逻辑
            fn = function (opt) {
                opt.mediaType = 'all';
                nativeShare(opt, false);
            };
        }
        else if (isUC) {
            // uc调起逻辑
            fn = function (opt) {
                ucShare('', opt);
            };
        }
        else if (isQQ) {
            // qq调起逻辑
            fn = function (opt) {
                qqShare('', opt);
            };
        }

        return fn;
    })()
};

let channelConf = {
    wxfriend: wxfriend,
    pyq: pyq,
    qzone: qzone,
    sinaweibo: sinaweibo,
    qqfriend: qqfriend
};
let textColor = {
    '#333': 'c-color',
    '#999': 'c-color-gray',
    '#666': ''
};

let Share = function (opt) {
    // 参数校验并设置默认值
    this.opt = $.extend({}, defaultOpt, opt);
    if (!this.opt.content) {
        this.opt.content = this.opt.title;
    }

    if (/^\/\/.+/.test(this.opt.url)) {
        this.opt.url = 'http:' + this.opt.url;
    }

    this.opt.linkUrl = this.opt.url;

    this.onShareClick = opt.onShareClick || function () {};

    this.colorClass = textColor[this.opt.color] || '';
    // init
    this._init();
};

Share.prototype = {

    version: '1.0.0',

    _init: function () {
        let me = this;

        me.isRender = false; // 标记当前渲染状态

        me._initShareList();
    },

    _initShareList: function () {
        let me = this;

        // 处理分享图标list,并拼装dom
        let list = [];
        for (let key in channelConf) {
            if (channelConf.hasOwnProperty(key) && $.inArray(key, me.opt.channel) !== -1) {
                list.push(channelConf[key]);
            }

        }

        if (isZbios || isUC || (isQQ && OS.n == 'ios')) {
            ($.inArray('more', me.opt.channel) > -1) && list.push(more);
        }

        list = list.concat(me.opt.custom);
        me.list = list;

        let str = '';
        if ($.type(list) == 'array' && list.length > 0) {
            str += '<div class="c-share-list">';
            let num = list.length;
            let lines = Math.ceil(num / 4);
            for (let j = 0; j < lines; j++) {
                str += '<div class="c-flexbox">';
                for (let i = 0; i < 4; i++) {
                    let index = j * 4 + i;
                    let obj = list[index];
                    if (obj || num > 4) {
                        // 多于4个的时候才需要在第二行补空dom
                        str += '<div class="c-share-btn">';
                    }

                    if (obj) {
                        str += '<img class="c-img" src="' + obj.icon + '" />';
                        str += '<div class="c-gap-top c-line-clamp1 ' + me.colorClass + '">' + obj.title + '</div>';
                    }

                    if (obj || num > 4) {
                        // 多于4个的时候才需要在第二行补空dom
                        str += '</div>';
                    }

                }
                str += '</div>';
            }
            str += '</div>';
        }

        me.$dom_shareList = $(str);
        me._bindEvent();
    },

    // 绑定分享按钮点击事件
    _bindEvent: function () {
        let me = this;

        // key = ['pyq', 'wxfriend', 'qqfriend', 'qzone', 'sinaweibo', 'more'];
        me.$dom_shareList.find('.c-share-btn').each(function (i) {
            if (me.list[i]) {
                $(this).on('click', function () {
                    me.list[i].cb(me.opt);
                    // 点击回调
                    if (me.onShareClick && typeof me.onShareClick == 'function') {
                        me.onShareClick(me.list[i].key);
                    }

                });
            }

        });
    },

    // 将分享list dom插入用户选定的dom中
    render: function ($dom, renderOpts) {
        let me = this;

        // $dom为必选
        if (!($dom && $($dom).length)) {
            return;
        }

        let $customDom = $($dom);

        // add自定义classname
        if (renderOpts && renderOpts.customClassName) {
            me.$dom_shareList.addClass(renderOpts.customClassName);
        }

        // 插入用户dom
        $customDom.append(me.$dom_shareList);
        // 标记dom已经被插入页面
        me.isRender = true;

        if (renderOpts && typeof renderOpts.onRender == 'function') {
            renderOpts.onRender();
        }

    },

    // 调用popup并以popup方式打开
    popup: function (Opts) {
        let me = this;
        let popupOpts = Opts || {};

        // 若已经执行过render方法在页面中渲染,则默认需要clone一份
        // zepto clone不支持clone事件,需要重新绑定
        if (me.isRender) {
            me.$dom_shareList = me.$dom_shareList.clone();
            me._bindEvent();
        }

        // add自定义classname
        if (popupOpts && popupOpts.customClassName) {
            me.$dom_shareList.addClass(popupOpts.customClassName);
        }

        // 初始化"取消"按钮dom
        let $dom_cancelBtn = $('<div class="c-share-cancel-btn">取消</div>');

        // 以这种方式require是为了避免过早加载popup组件
        require(['./popup'], function (Popup) {
            me.sharePopup = new Popup({
                content: me.$dom_shareList.add($dom_cancelBtn),
                customClassName: 'c-share-popup-modal',
                onOpen: popupOpts.onOpen || function () {},
                onClose: popupOpts.onClose || function () {}
            });

            // 执行横竖屏补丁,为popup容器设置最大宽度,避免横屏时显示内容过大
            // 新ui不需要这个hack了
            // me.sharePopup.$popupContent.css({
            //     'max-width': me._horizontalHack() + 'px'
            // });

            // 点击"取消"按钮时关闭浮层
            $dom_cancelBtn.on('click', function () {
                me.sharePopup.closePopup();
            });
        });
    },

    // 关闭popup方法
    close: function () {
        let me = this;
        if (me.sharePopup) {
            me.sharePopup.closePopup();
        }

    },

    // 横竖屏补丁
    // 判断屏幕的最小边长并返回
    _horizontalHack: function () {
        let verticalScreenWidth;
        if (window.orientation != undefined) {
            if (window.orientation == 0 || window.orientation == 180) {
                verticalScreenWidth = Math.min(window.screen.width, $(window).width());
            }
            else if (window.orientation == 90 || window.orientation == -90) {
                verticalScreenWidth = Math.min(window.screen.width, window.screen.height);
                verticalScreenWidth = verticalScreenWidth * $(window).width() / Math.max(window.screen.width, window.screen.height);
            }
        }
        else {
            verticalScreenWidth = Math.min(window.screen.width, window.screen.height);
        }
        return verticalScreenWidth;
    },

    constructor: Share
};

export default Share;

/**
 * @file 公共工具输出模块
 *
 * @author liubin29@baidu.com
 * 2017年12月21日
 */

var Util = {};

Util.getQueryString = function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var search = window.location.href.split('?')[1];
    if (search) {
        var r = search.match(reg);
        if (r !== null) {
            return decodeURIComponent(r[2]);
        }
    }
    return '';
};

Util.getBase64Image = function getBase64Image(img, name) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var fileExtension = name.substring(name.lastIndexOf('.') + 1).toLocaleLowerCase();
    if (fileExtension === 'png') {
        var dataURL = canvas.toDataURL('image/png');
    }
    else if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'jpe') {
        var dataURL = canvas.toDataURL('image/jpeg');
    }
    else if (fileExtension === 'bmp') {
        var dataURL = canvas.toDataURL('image/bmp');
    }
    else {
        // alert('格式错误');
    }
    return dataURL;
};

Util.login = function login(loginType, href) {
    var parameter;

    if (process.env.NODE_ENV === 'development') {
        // 线下
        parameter = 'https://wappass.qatest.baidu.com/?TPL=wise';
    }
    else {
        parameter = 'https://wappass.baidu.com/?TPL=wise';
    }

    if (href) {
        parameter += '&u=' + encodeURIComponent(window.location.protocol + '//' + window.location.host + href);
    }
    else {
        parameter += '&u=' + encodeURIComponent(window.location.href);
    }

    // 1账号密码,2手机号短信验证码
    if (loginType === 2) {
        parameter += '&sms=1';
    }

    window.location.href = parameter;
};

Util.trim = function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
};


Util.isInclude = function isInclude(name) {
    var es = document.getElementsByTagName('script');
    for (var i = 0; i < es.length; i++) {
        if (es[i].src.indexOf(name) !== -1) {
            return true;
        }
    }
    return false;
};

Util.detect = function detect() {

    // 获取ua并转换为小写
    var UA = navigator.userAgent.toLowerCase();

    /*
     * return {ios:''} || {android:''}
     */
    function getOS() {
        if (!UA) {
            return;
        }

        var OS;
        var version = '';

        // 优先使用zepto方法,否则通过ua匹配
        if ($ && $.os) {
            if ($.os.ios) {
                OS = 'ios';
            } else if ($.os.android) {
                OS = 'android';
            }
        } else {
            if ((UA.indexOf('iphone') > -1 || UA.indexOf('ipod') > -1)) {
                OS = 'ios';
            } else {
                OS = 'android';
            }
        }

        return {
            n: OS,
            v: version
        };
    }

    /*
     * return {zbios:''} ||
     *        {bmbadr:'4.1.0.332'} ||
     *        {qq:'6.7.2'} ||
     *        {wechat:''} ||
     *        {uc:'10.9.17.807'} ||
     *        {sogou:'4.5.0'} ||
     *        {chrome:'51.0.2704.104'} ||
     *        {other:''}
     */
    function getBrowser() {
        if (!UA) {
            return;
        }
        var browser;
        var version = '';

        if (UA.indexOf('baiduboxapp/') !== -1) {
            // ios e.g. = mozilla/5.0 (iphone; cpu iphone os 9_3_2 like mac os x) applewebkit/601.1.46 (khtml, like gecko) mobile/13f69 baiduboxapp/0_0.0.3.7_enohpi_6433_046/2.3.9_2c2%256enohpi/1099a/a303ae3a9fe88283cc14cc84c7e55b3630c7a4ca6fcnnddartd/1
            browser = 'zbios';
        } else if (UA.indexOf('baidubrowser/') !== -1) {
            // ios e.g. = mozilla/5.0 (iphone; cpu iphone os 9_3_2 like mac os x) applewebkit/601.1.46 (khtml, like gecko) version/9.3 mobile/13f69 safari/600.1.4 baidubrowser/4.1.0.332 (baidu; p29.3.2)
            browser = 'bmbadr';
            version = UA.match(/baidubrowser\/([\d\.]*)/);
            version = version && version[1] ? version[1] : '';
        } else if (UA.indexOf('mqqbrowser/') !== -1 && UA.indexOf('micromessenger/') === -1) {
            // 安卓下，微信的ua里面，也会含有mqqbrowser
            // ios e.g. = mozilla/5.0 (iphone 5sglobal; cpu iphone os 9_3_2 like mac os x) applewebkit/601.1.46 (khtml, like gecko) version/6.0 mqqbrowser/6.7.2 mobile/13f69 safari/8536.25 mttcustomua/2
            browser = 'qq';
            version = UA.match(/mqqbrowser\/([\d\.]*)/);
            version = version && version[1] ? version[1] : '';
        } else if (UA.indexOf('micromessenger/') !== -1) {
            browser = 'wechat';
            version = UA.match(/micromessenger\/([\d\.]*)/);
            version = version && version[1] ? version[1] : '';
        } else if (UA.indexOf('ucbrowser/') !== -1) {
            // ios e.g. = mozilla/5.0 (iphone; cpu iphone os 9_3_2 like mac os x; zh-cn) applewebkit/537.51.1 (khtml, like gecko) mobile/13f69 ucbrowser/10.9.17.807 mobile
            browser = 'uc';
            version = UA.match(/ucbrowser\/([\d\.]*)/);
            version = version && version[1] ? version[1] : '';
        } else if (UA.indexOf('sogoumobilebrowser/') !== -1) {
            // ios e.g. = mozilla/5.0 (iphone; cpu iphone os 9_3_2 like mac os x) applewebkit/601.1.46 (khtml, like gecko) mobile/13f69 sogoumobilebrowser/4.5.0
            browser = 'sogou';
            version = UA.match(/sogoumobilebrowser\/([\d\.]*)/);
            version = version && version[1] ? version[1] : '';
        } else if (UA.indexOf('crios/') !== -1) {
            // ios e.g. = mozilla/5.0 (iphone; cpu iphone os 9_3_2 like mac os x) applewebkit/601.1 (khtml, like gecko) crios/51.0.2704.104 mobile/13f69 safari/601.1.46
            // android e.g. = mozilla/5.0 (linux; android 5.1.1; yq601 build/lmy47v) applewebkit/537.36 (khtml, like gecko) chrome/47.0.2526.83 mobile safari/537.36
            browser = 'chrome';
            version = UA.match(/crios\/([\d\.]*)/);
            version = version && version[1] ? version[1] : '';
        } else {
            browser = 'other';
        }

        return {
            n: browser,
            v: version
        };
    }

    return {
        os: getOS(),
        browser: getBrowser()
    };
};

Util.setCookie = function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
};

Util.getCookie = function getCookie(name) {
    var arr;
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    else {
        return null;
    }
};

Util.delCookie = function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = Util.getCookie(name);

    if (cval !== null) {
        document.cookie = name + '=' + cval + ';path=/;domain=.baidu.com;expires=' + exp.toGMTString();
    }
};

// 函数用于与当前时间相差秒数
Util.getInterval = function getInterval(after) {
    // 消息时间与现在间隔秒数 或 两个时间间隔
    return parseInt(new Date().getTime() / 1000 - after, 10);
};

// 函数用于获取格式化的倒计时
Util.formatInterval = function formatInterval(interval, totle) {
    if (interval < totle) {
        var left = totle - interval;
        var minute = Math.floor(left / 60);
        var second = Math.floor(left - minute * 60);
        return (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    }
    else {
        return 0;
    }
};

// 函数用于获取时长信息
Util.formatDuration = function formatDuration(duration) {
    var dur = Math.ceil(duration);

    var seconds = dur % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var minutes = Math.floor(dur / 60) % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (minutes === 0) {
        return seconds + '"';
    }
    else {
        return minutes + '\'' + seconds + '"';
    }
};


// 函数用于获取格式化的日期
Util.formatDate = function formatDate(date) {
    var newDate = new Date(date * 1000);
    return newDate.getFullYear() + '年'
        + ((newDate.getMonth() + 1) < 10 ? '0' + (newDate.getMonth() + 1) : (newDate.getMonth() + 1)) + '月'
        + (newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()) + '日 '
        + (newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()) + ':'
        + (newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes());
};

// 数组筛选功能
Util.filter = function filter(arr, fn, self) {
    if (arr.filter) {
        return arr.filter(fn, self);
    }
    if (void 0 === arr || null === arr) {
        throw new TypeError;
    }
    if ('function' !== typeof fn) {
        throw new TypeError;
    }
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(arr, i)) {
            continue;
        }
        var val = arr[i];
        if (fn.call(self, val, i, arr)) {
            ret.push(val);
        }
    }
    return ret;
};

Util.trim = function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, '');
};


Util.isStorageSupported = function isStorageSupported() {
    let testKey = 'test';
    let storage = window.sessionStorage;

    try {
        storage.setItem(testKey, 'testValue');
        return true;
    }
    catch (error) {
        window.isStorageSupportedFlag = false;
        return false;
    }
};

// 使用闭包，只需要判断一次
Util.checkSessionStorageSupported = (function () {
    let isSupported = false;
    let testKey = 'test';
    let storage = window.sessionStorage;

    try {
        storage.setItem(testKey, 'testValue');
        isSupported = true;
    }
    catch (error) {
        window.isSessionStorageSupportedFlag = false;
        isSupported = false;
    }

    return () => {
        return isSupported;
    };
})();


// 埋点中 获取htsrc参数
Util.getLogParamHtsrc = function getLogParamHtsrc() {
    const key = 'htsrc';
    let value = this.getQueryString(key);
    // url有参数，更新ss并返回
    if (value) {
        if (this.checkSessionStorageSupported()) {
            sessionStorage.setItem(key, value);
        }
        return value;
    }
    // url没有参数，从ss取
    else {
        if (this.checkSessionStorageSupported()) {
            return sessionStorage.getItem(key) || '';
        }
        return '';
    }
};

// 删除url指定参数
Util.funcUrlDel = function (name) {
    var loca = window.location;
    var baseUrl = loca.origin + loca.pathname;
    var query = loca.hash;
    var s = loca.search;

    if (query.indexOf(name) > -1) {
        var obj = {};
        var arr = query.split('&');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split('=');
            obj[arr[i][0]] = arr[i][1];
        }
        delete obj[name];
        var url = baseUrl + s
        + JSON.stringify(obj).replace(/[\"\{\}]/g, '').replace(/\:/g, '=').replace(/\,/g, '&');

        location.replace(url);
    }
};

export default Util;


/**
 * @file 开发环境热更新
 *
 * @author bigcui
 * 2017年8月31日
 */

require('eventsource-polyfill');
// modified by chengong03
// 因为某些低版本的 UC 浏览器并不识别let，为了保险起见，暂时改成var
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload();
    }

});

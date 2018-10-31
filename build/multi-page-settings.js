/**
 * @file webpack 多页面配置
 *
 * @author bigcui
 *
 * 2017年12月29日
 */
let HtmlWebpackPlugin = require('html-webpack-plugin');
let baseWebpackConfig = require('./webpack.base.conf');
let path = require('path');
let template = path.resolve(__dirname, '../index.html');

module.exports = function (env) {
    let settings = [];
    let titleSetting = {
        'app': '铸安精电科技有限公司'
    };
    Object.keys(baseWebpackConfig.entry).forEach(key => {
        let filenamePrefix = key;
        if (key === 'app') {
            filenamePrefix = 'index';
        }
        let htmlPluginItemSetting = {
            favicon: path.resolve('favicon.ico'),
            title: '铸安精电科技有限公司',
            filename: `${filenamePrefix}.html`,
            template: template,
            inject: true
        };
        if (env === 'prod') {
            htmlPluginItemSetting.chunks = ['vendor', 'manifest', key];
            htmlPluginItemSetting.minify = {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                chunksSortMode: 'dependency'
            };
        } else {
            htmlPluginItemSetting.chunks = [key];
            //htmlPluginItemSetting.favicon = path.resolve(__dirname, './../src/assets/404.png');
        }
        settings.push(new HtmlWebpackPlugin(htmlPluginItemSetting));
    });
    return settings;
};
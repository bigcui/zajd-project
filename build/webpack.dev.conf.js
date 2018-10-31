/**
 * @file webpack 开发版，基于 vue-cli 通用模板修改
 *
 * @author bigcui
 * 2017年8月31日
 */

let utils = require('./utils');
let webpack = require('webpack');
let config = require('../config');
let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
let path = require('path');
let MultiPageSettings = require('./multi-page-settings')('dev');
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

let devConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new FriendlyErrorsPlugin(),
        ...MultiPageSettings
    ]
});

module.exports = devConfig;
/**
 * @file webpack 基础配置，基于 vue-cli 通用模板修改
 *
 * @author bigcui
 * 2017年8月31日
 */

let path = require('path');
let utils = require('./utils');
let config = require('../config');
let vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            path.resolve(__dirname, '../node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'search-ui': '@baidu/search-ui/lib'
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.vue$/,
                loader: 'iview-loader',
                options: {
                    prefix: false
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'),
                resolve('node_modules/iview/src/'),
                resolve('test')]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.atom$/,
            loader: 'atom-loader'
        }

    ]
}
};
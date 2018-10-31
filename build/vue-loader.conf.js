/**
 * @file webpack 基础配置，基于 vue-cli 通用模板修改
 *
 * @author bigcui
 * 2017年8月31日
 */

let utils = require('./utils');
let config = require('../config');
let isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
};

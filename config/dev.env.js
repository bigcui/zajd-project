/**
 * @file 开发环境变量
 *
 * @author bigcui
 * 2017年8月31日
 */

let merge = require('webpack-merge');
let prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});

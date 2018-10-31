/**
 * @file webpack 正式版，基于 vue-cli 通用模板修改
 *
 * @author bigcui
 * 2017年8月31日
 */

let path = require('path');
let utils = require('./utils');
let webpack = require('webpack');
let config = require('../config');
let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
let MultiPageSettings = require('./multi-page-settings')('prod');

// let env = config.build.env;
console.log('[chunkhash:6]', 99999999);
let webpackConfig = function(env) {
    return merge(baseWebpackConfig, {
        module: {
            rules: utils.styleLoaders({
                sourceMap: config.build.productionSourceMap,
                extract: true
            })
        },
        devtool: config.build.productionSourceMap ? '#source-map' : false,
        output: {
            publicPath: './',
            path: config.build.assetsRoot,
            filename: utils.assetsPath('js/[name].[chunkhash:6].js'),
            chunkFilename: utils.assetsPath('js/[id].[chunkhash:6].js')
            
        },
        plugins: [
            // http://vuejs.github.io/vue-loader/en/workflow/production.html
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: env
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                sourceMap: true
            }),


            // extract css into its own file
            new ExtractTextPlugin({
                filename: utils.assetsPath('css/[name].[contenthash:6].css'),
                publicPath: '../'
            }),

            // Compress extracted CSS. We are using this plugin so that possible
            // duplicated CSS from different components can be deduped.
            new OptimizeCSSPlugin({
                cssProcessorOptions: {
                    safe: true
                }
            }),
            // generate dist index.html with correct asset hash for caching.
            // you can customize output by editing /index.html
            // see https://github.com/ampedandwired/html-webpack-plugin
            // split vendor js into its own file
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks(module, count) {
                    // any required modules inside node_modules are extracted to vendor
                    return (
                        module.resource &&
                        /\.js$/.test(module.resource) &&
                        module.resource.indexOf(
                            path.join(__dirname, '../node_modules')
                        ) === 0
                    );
                }
            }),
            // extract webpack runtime and module manifest to its own file in order to
            // prevent vendor hash from being updated whenever app bundle is updated
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                chunks: ['vendor']
            }),
            // copy custom static assets
            new CopyWebpackPlugin([{
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
            }]),

            ...MultiPageSettings
        ]
    });
};

if (config.build.productionGzip) {
    let CompressionWebpackPlugin = require('compression-webpack-plugin');

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    );
}

if (config.build.bundleAnalyzerReport) {
    let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
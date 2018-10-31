/**
 * @file 构建发布版本
 *
 * @author liubin29
 * 2017年8月31日
 */

require('./check-versions')();
let config = require('../config');

let environment = process.argv[2] === 'qa'
    ? config.dev.env.NODE_ENV
    : config.build.env.NODE_ENV;

process.env.NODE_ENV = environment;

let ora = require('ora');
let rm = require('rimraf');
let path = require('path');
let chalk = require('chalk');
let webpack = require('webpack');
let webpackConfig = require('./webpack.prod.conf');

let spinner = ora(`building for ${environment}...`);
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) {
        throw err;
    }

    webpack(webpackConfig(environment), function (err, stats) {
        spinner.stop();
        if (err) {
            throw err;
        }

        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n');

        console.log(chalk.cyan('  Build complete.\n'));
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n'
            + '  Opening index.html over file:// won\'t work.\n'
        ));
    });
});

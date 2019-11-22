'use strict';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod');
const config = require('../config/config');

const spinner = ora("Building front end pages... \n\n");
spinner.start();


rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
  webpack(webpackConfig, (err, stats) => {
    spinner.stop();
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunk: false,
      chunkModules: false
    }) + '\n\n');
    if (stats.hasErrors()){
      console.log(chalk.red(' Build failed with errors. \n'));
      process.exit(1);
    }
    console.log(chalk.cyan(' Build completed.\n'));
  });
});


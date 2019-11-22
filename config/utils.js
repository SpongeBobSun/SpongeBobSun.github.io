'use strict';

const path = require('path');
const config = require('./config');

module.exports = {
  assetsPath: (arg) => {
    const assetsSubDirectory = process.env.NODE_ENV == 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, arg);
  }
};

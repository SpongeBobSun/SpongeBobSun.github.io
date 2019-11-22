'use strict';

const path = require('path');
const webpack = require('webpack');
const cssLoaders = require('./css.loaders');

const isDev = process.NODE_ENV != 'prod';

module.exports = {
  loaders: cssLoaders(),
  cssSourceMap: isDev,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};

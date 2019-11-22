'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const localConfig = require('../package.json');

module.exports = function() {
  const styleOptions = { loader: 'style-loader', options: { sourceMap: true } };
  const cssOptions = [ { loader: 'css-loader', options: { sourceMap: true } },
                       { loader: 'postcss-loader', options: { sourceMap: true } }
                     ];
  const lessOptions = { loader: 'less-loader', options: { sourceMap: true } };
  return {
    css: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      use: cssOptions,
      fallback: styleOptions
    })),
    less: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      use: lessOptions,
      fallback: styleOptions
    })),
    postcss: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      use: cssOptions,
      fallback: styleOptions
    }))
  };
};

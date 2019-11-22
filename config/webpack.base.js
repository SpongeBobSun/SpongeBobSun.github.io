'use strict';

const path = require('path');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');
const { VueLoaderPlugin } = require('vue-loader');

const extractCss = new ExtractTextPlugin({
  filename: 'css/[name].[hash].css',
  allChunks: true
});

const extractLess = new ExtractTextPlugin({
  filename: 'css/[name].[hash].css',
  allChunks: true
});

const styleLoaderOptions = {
  loader: 'style-loader',
  options: { sourceMap: true }
};

const cssLoaderOptions = [
  { loader: 'css-loader', options: { sourceMap: true } },
  { loader: 'postcss-loader', options: { sourceMap: true } }
];

const lessLoaderOptions = [
  ...cssLoaderOptions,
  {
    loader: 'less-loader', options: { sourceMap: true }
  }
];

const createLintRules = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [ path.join('src')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWaring: config.dev.showEsLintErrorsInOverlay
  }
});

module.exports = {
  context: path.resolve(__dirname, '../'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'assets/js/[name].[hash].js',
    chunkFilename: 'assets/js/[id].[hash].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      assets: path.join(__dirname, '../assets'),
      components: path.join(__dirname, '../src/components'),
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '../src'),
      'bootstrap$': path.join(__dirname, '..', 'src', 'vendor', 'bootstrap')
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader', options: vueLoaderConfig },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      // { test: /\.css$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      //   use: cssLoaderOptions,
      //   fallback: styleLoaderOptions
      // }))},
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      { test: /\.less$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        use: lessLoaderOptions,
        fallback: styleLoaderOptions
      }))},
      // Raw htmls and templates.
      {
        test: /\.(html|jinja|ejs|jade)$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: path.join(__dirname, 'src'),
            attrs: ['img:src', 'link:href']
          }
        }]
      },
      // Raw assets
      {
        test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/img/[name].[hash:7].[ext]'
          }
        }]
      },
      // Fonts
      {
        test: /\.(eot|woff|woff2|ttf)(\?.+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      },
    ]),
    extractCss,
    extractLess,
    new VueLoaderPlugin()
  ],
  node: {
    setImmediate: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};

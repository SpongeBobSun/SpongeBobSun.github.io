const webpack = require('webpack');
const config = require('./config');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendyErrorsPlugin = require('friendly-errors-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const utils = require('./utils');
const glob = require('glob');

const env = 'production';


const entries = {};
const chunks = [];
const pagesInSite = [];
glob.sync('./src/pages/**/index.js').forEach((each) => {
  let chunk = each.split('./src/pages/')[1].split('/index.js')[0];
  if (chunk === undefined) {
    return;
  }
  entries[chunk] = each;
  chunks.push(chunk);
  if (chunk.indexOf('/') !== -1) {
    chunk = chunk.split('/').join('_')
  }
  const filename = chunk + '.html';
  const htmlConfig = {
    filename,
    template: each.replace(/.js/g, '.prod.html'),
    //favicon: ''
    hash: true,
    chunks: ['commons', chunk]
  };
  pagesInSite.push(new HtmlWebpackPlugin(htmlConfig));
});

const webpackConfig = merge(baseConfig, {
  mode: 'production',
  entry: {
    ...entries,
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[hash].js'),
    chunkFilename: utils.assetsPath('js/[id].[hash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
        },
      },
      sourceMap: config.build.productionSourceMap,
      parallel: false,
    }),
    ...pagesInSite,
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 3,
          name: 'commons',
          enforce: true,
        },
      },
    },
  },
  performance: {
    hints: false,
  },
  // Use CDN js resource
  externals: {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT'
  },
});

if (config.build.productionGzip) {
  const CompressPlugin = require('compression-webpack-plugin');
  webpackConfig.plugins.push(
    new CompressPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.0,
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;

const path = require('path');
const webpack = require('webpack');
const config = require('./config');
const merge = require('webpack-merge');
const glob = require('glob');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

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
  console.log(chunk);
  const filename = chunk + '.html';
  const htmlConfig = {
    filename,
    template: each.replace(/.js/g, '.dev.html'),
    //favicon: ''
    hash: true,
    chunks: ['commons', chunk]
  };
  pagesInSite.push(new HtmlWebpackPlugin(htmlConfig));
});

const devWebpackConfig = merge(baseConfig, {
  mode: 'development',
  entry: { ...entries },
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    // historyApiFallback: {
    //   rewrites: [{ from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') }]
    // },
    historyApiFallback: true,
    hot: true,
    contentBase: false,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    openPage: 'index.html',
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true} : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true,
    watchOptions: { poll: config.dev.poll }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    ...pagesInSite,
  ],
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      console.err(err);
      reject(err);
      return;
    }
    process.env.PORT = port;
    devWebpackConfig.devServer.port = port;
    devWebpackConfig.devServer.host = '0.0.0.0'
    devWebpackConfig.plugins.push(new FriendyErrorsPlugin({
      compliationSuccessInfo: {
        messages: [`Site running in http://${devWebpackConfig.devServer.host}:${port}`]
      },
      onErrors: undefined,
    }));
    resolve(devWebpackConfig);
  });
});



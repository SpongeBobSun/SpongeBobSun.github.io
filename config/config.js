'use strict'

const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    // API proxy
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    },
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,

    useEsLint: true,
    showEsLintErrorsInOverlay: true,

    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    assetsRoot: path.resolve(__dirname, '..', 'docs'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',

    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  }
}

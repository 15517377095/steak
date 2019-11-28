const webpack = require('webpack')
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: [],
  productionSourceMap: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          'window.$': 'jquery'
      })
    ]
  },
  parallel: require('os').cpus().length > 1,
  devServer: {
      open: true,
      port: 8080,
      disableHostCheck: true,
      https: false,
      hotOnly: false,
      before: app => { }
  }
}

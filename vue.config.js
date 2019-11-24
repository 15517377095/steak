const webpack = require('webpack')
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  publicPath: '/',
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
  /*configureWebpack: config => {
    if (debug) { // 开发环境配置
        config.devtool = 'cheap-module-eval-source-map'
    } else { 
      // 生产环境配置
    }
    Object.assign(config, { // 开发生产共同配置，配置别名
      resolve: {
          alias: {
              '@': path.resolve(__dirname, './src'),
              '@c': path.resolve(__dirname, './src/components'),
            'vue$': 'vue/dist/vue.esm.js'
        }
      }
    })
  },*/
  chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，
      if (debug) {
          // 本地开发配置
      } else {
          // 生产开发配置
      }
  },
  parallel: require('os').cpus().length > 1,
  devServer: {
      open: true,
      // host: 'localhost',
      // port: 8080,
      disableHostCheck: true, //跳过host检查
      https: false,
      hotOnly: false,
      proxy: {
          '/api': {
              target: 'http://localhost:8088/',
              ws: true,
              changOrigin: true,
              pathRewrite: {'^/api': ''}
          }
      },
      before: app => { }
  }
}

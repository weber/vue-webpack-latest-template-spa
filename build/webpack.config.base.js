'use strict'
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const appSettings = require('../src/app-settings.json')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': utils.resolve('src'),
      '@static': utils.resolve('src/static'),
      '@filters': utils.resolve('src/filters'),
      '@img': utils.resolve('src/static/img'),
      '@pages': utils.resolve('src/components/pages'),
      '@components': utils.resolve('src/components'),
      '@utils': utils.resolve('src/utils'),
      '@dl': utils.resolve('src/components/dl'),
      '@layouts': utils.resolve('src/components/layouts'),
      '@panels': utils.resolve('src/components/panels'),
      '@controlls': utils.resolve('src/components/controlls'),
    }
  },
  stats: {
    errors: true,
    errorDetails: true,
    colors: true,
    modules: true,
    children: true, 
    chunks: false,
    chunkModules: false
  },
  optimization:{
    runtimeChunk: false,
    splitChunks: {
      chunks: "all", //Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }, {
        test: /\.vue$/,
        use: 'vue-loader'        
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: 'false'
          }
        }        
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }        
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },
  resolveLoader: {
    modules: [utils.setPath('../node_modules')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      title: appSettings.name,
      favicon: appSettings.favicon,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      environment: process.env.NODE_ENV,
      chunksSortMode: 'dependency'
    }),    
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: utils.resolve('src/static/img'),
      to: utils.resolve('src/dist/static/img'),
      toType: 'dir'
    }])
  ]
}
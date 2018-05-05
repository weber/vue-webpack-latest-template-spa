'use strict'
const webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const appSettings = require('../src/app-settings.json')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const RenameWebpackPlugin = require('rename-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const env = process.env.NODE_ENV === 'testing' 
  ? { NODE_ENV: '"testing"'}
  : { NODE_ENV: '"production"'}



module.exports = merge(baseConfig, {
  entry: {
    main: utils.setPath('../src/index.js')
  },
  stats: {
    errors: true,
    errorDetails: true,
    colors: true,
    modules: false,
    children: false, 
    chunks: false,
    chunkModules: false
  },
  output: {
    path: utils.setPath('../dist'),
    filename: utils.jsPath('[name].[chunkhash].js'),
    chunkFilename: utils.jsPath('[name].[id].[chunkhash].js'),
    publicPath: '/'
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader'
        ]
      }, 
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader', 
            'sass-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new CssoWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: "[id].css"
    }),
    new WebpackPwaManifest({
      name: appSettings.name,
      short_name: appSettings.short_name,
      description: appSettings.description,
      background_color: appSettings.background_app,
      ios: true,
      icons: [
        {
          src: path.resolve(appSettings.favicon),
          destination: path.join('icons'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve(appSettings.favicon),
          destination: path.join('icons'),
          size: '1024x1024' // you can also use the specifications pattern
        }
      ]
    }),
    new RenameWebpackPlugin({
      originNameReg: /(.*)thirdpart\..*\.js/,
      targetName: '$1thirdpart.js'
  }),
  // new BundleAnalyzerPlugin()
  // gzip фалов
  /* new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
    threshold: 10240,
    minRatio: 0.8
  }) */
    // new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: 'manifest',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
				uglifyOptions: {
          mangle: true,
          ecma: 8,
					output: {
						comments: false
					},
					compress: {
            ecma: 6,
            dead_code: true
          }
				}
			})
		]
	}
})

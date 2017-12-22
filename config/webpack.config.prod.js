const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const FileReplacePlugin = require('replace-in-file-webpack-plugin');

module.exports = (env) => {
  const paths = require('./paths');

  return {
    bail: true,

    target: 'node',

    resolve: {
      extensions: ['.js', '.jsx'],

      modules: [
        paths.srcDir,
        paths.distDir,
        'node_modules'
      ]
    },
    externals: {
      react: 'umd react',
      'react-dom' : 'umd react-dom'
    },

    entry: [
      // src file
      paths.srcDir + '/index.js'
    ],

    output: {
      filename: 'js/bundle.js',
      // chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
      path: paths.distDir,
      publicPath: '/',
      libraryTarget: 'umd'
    },

    module: {
      rules: [
        {
          // Run the js linting before compilation time
          test: /\.(js|jsx)/,
          exclude: /(node_modules|bower_components)/,
          enforce: 'pre',
          use: [
            'eslint-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss|\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'sass-loader'
            ]
          })
        },
        {
          // load media files - need to be injected without a prefixing slash
          test: /(proxima-nova(.)*svg|\.woff|\.eot|\.ttf|\.png|\.gif|\.jpg)/,
          use: [
            'file-loader?name=media/[name].[hash:8].[ext]'
          ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        }
      ]
    },

    plugins: [
      // clean the dist folder
      new CleanWebpackPlugin('dist', {root: paths.appDir }),

      new StyleLintPlugin({
        syntax: 'scss',
        configFile: paths.appDir + '/config/stylelint.js'
      }),

      // inject bundles to an html file
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.publicDir + '/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      // create a css file instead of setting styles inline
      new ExtractTextPlugin({
        filename: 'css/[name].css',
        disable: false,
        allChunks: true
      }),
      // set the environment variable
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production'
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        comments: false,
        compress: {
          unused: true,
          dead_code: true,
          warnings: false,
          screw_ie8: true
        }
      }),
      new FileReplacePlugin([
        {
          dir: 'dist',
          files: ['css/main.css'],
          rules: [
            {
            search: /\/media\//g,
            replace: '../media/'
            }
          ]
        }
      ])
    ]
  }
};

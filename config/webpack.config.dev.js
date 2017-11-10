const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const port = 8624;

module.exports = (env) => {
  const paths = require('./paths');

  return {
    devtool: 'source-map',
    devServer: {
      port: port,
      contentBase: paths.distDir,
      historyApiFallback: {
        rewrites: [
          // load index.html when hitting a route
          { from: /[^.]*/, to: '/index.html' }
        ]
      }
    },

    resolve: {
      extensions: ['.js', '.jsx'],

      modules: [
        paths.srcDir,
        'node_modules'
      ]
    },

    entry: [
      // src file
      paths.srcDir + '/index.js'
    ],

    output: {
      filename: 'static/js/bundle.js',
      chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
      path: paths.distDir,
      publicPath: '/'
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
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015'],
            plugins: [
              'transform-object-rest-spread',
              'syntax-dynamic-import',
              'transform-class-properties'
            ]
          }
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
            'file-loader?name=static/media/[name].[hash:8].[ext]'
          ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        }
      ]
    },

    plugins: [
      new StyleLintPlugin({
        syntax: 'scss',
        configFile: paths.appDir + '/config/stylelint.js'
      }),

      // inject bundles to an html file
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.publicDir + '/index.html'
      }),
      // create a css file instead of setting styles inline
      new ExtractTextPlugin({
        filename: 'static/css/[name].css',
        disable: false,
        allChunks: true
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
      })
    ]
  }
};

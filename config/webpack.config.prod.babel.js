const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const FileReplacePlugin = require('replace-in-file-webpack-plugin');
const cssnano = require('cssnano');
const paths = require('./paths');
const { resolve } = require('path');
const { readdirSync, existsSync } = require('fs');

// create separated entry points per component
const components = readdirSync(resolve(__dirname, '..', 'src', 'components'));
const entries = components.reduce(
  (acc, curr) => {
    const path = `${paths.srcDir}/components/${curr}/index.jsx`;

    if (existsSync(resolve(__dirname, '..', path))) {
      acc[curr] = path;
    }

    return acc;
  },
  {},
);

const config = {
  entry: `${paths.srcDir}/index.js`,

  output: {
    filename: 'js/bundle.js',
    path: paths.distDir,
    publicPath: '/',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.jsx'],

    modules: [
      paths.srcDir,
      paths.distDir,
      'node_modules',
    ],
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    classnames: 'classnames',
  },

  module: {
    rules: [
      {
        // Run the js linting before compilation time
        test: /\.(js|jsx)/,
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        use: [
          'eslint-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss|\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
      {
        // load media files - need to be injected without a prefixing slash
        test: /(proxima-nova(.)*svg|\.woff|\.eot|\.ttf|\.png|\.gif|\.jpg)/,
        use: [
          'file-loader?name=media/[name].[hash:8].[ext]',
        ],
      },
      {
        // load media files - need to be injected without a prefixing slash
        test: /\.svg$/,
        use: [
          'file-loader?name=icons/[name].[ext]',
        ],
      }
    ],
  },

  bail: true,
  target: 'node',

  plugins: [
    new StyleLintPlugin({
      syntax: 'scss',
      configFile: `${paths.appDir}/config/stylelint.js`,
    }),

    // create a css file instead of setting styles inline
    new ExtractTextPlugin({
      filename: 'css/main.css',
      disable: false,
      allChunks: true,
    }),

    // set the environment variable
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),

    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),

    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      beautify: false,
      comments: false,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true,
      },
    }),

    new FileReplacePlugin([
      {
        dir: 'dist',
        files: ['css/main.css'],
        rules: [
          {
            search: /\/media\//g,
            replace: '../media/',
          },
        ],
      },
    ]),
  ],
};

// clone the config object and add the multiple entries
const multipleEntries = Object.assign(
  {},
  config,
  { entry: entries },
  {
    output: {
      ...config.output,
      filename: 'js/[name].js',
    },
  },
);

// add the CleanPlugin only once, since we don't want to remove /dist
// on every run
config.plugins.push(new CleanWebpackPlugin('dist', { root: paths.appDir }));

module.exports = [config, multipleEntries];

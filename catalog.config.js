const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.module.rules[0].oneOf.unshift(
      {
        test: /icons\/(.)*\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /src\/(.)*\.scss|\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    );

    config.plugins.push(
      new ExtractTextPlugin({
        filename: 'static/css/[name].css',
        disable: false,
        allChunks: true
      }),

      new webpack.EnvironmentPlugin({
        DEV_SERVER: 'catalog-dev-server'
      })
    );

    return config;
  },
};

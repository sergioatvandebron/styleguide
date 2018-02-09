module.exports = {
  webpack: config => {
    config.module.rules[0].oneOf.unshift({
      test: /icons\/(.)*\.svg$/,
      loader: 'svg-inline-loader'
    });

    return config;
  },
};

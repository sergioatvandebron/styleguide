import { babel } from 'docz-plugin-babel6';

export default {
  src: './src',
  dest: '.docz/dist',
  base: '/web/',
  plugins: [babel()],

  modifyBundlerConfig: (config) => {
    /** needed for Icon, loads svgs inline instead of return a url */
    const idx = config.module.rules.findIndex(
      r => r.test.toString() === '/\\.(svg)(\\?.*)?$/'
    );

    config.module.rules[idx] = {
      test: /\.svg$/,
      use: {
        loader: 'svg-inline-loader',
        options: {
          removeTags: true
        }
      },
    };

    return config;
  }
};

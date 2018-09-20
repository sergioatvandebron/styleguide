import { babel } from 'docz-plugin-babel6';

export default {
  src: './src',
  dest: '.docz/dist',
  base: '/',
  plugins: [babel()],

  themeConfig: {
    styles: {
      container: {
        width: '100%',
      },
    },
  },

  modifyBundlerConfig: (config) => {
    console.log(config.plugins);
    return config;
  }
};

import { babel } from 'docz-plugin-babel6';

export default {
  src: './src',
  dest: '.docz/dist',
  base: '/web/',
  plugins: [babel()],

  modifyBundlerConfig: (config) => {
    return config;
  }
};

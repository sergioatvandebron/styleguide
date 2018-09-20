/* global process */
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import rebase from 'rollup-plugin-rebase';
import replace from 'rollup-plugin-post-replace';

export default {
  input: 'src/index.js',

  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true
  },

  external: [
    'classnames',
    'react',
    'react-autocomplete',
    'styled-components',
    'styled-bootstrap-grid',
    'react-countup',
  ],

  plugins: [
    rebase({
      folder: 'assets',
      verbose: true,
    }),

    resolve({
      module: true,
      extensions: ['.js'],
    }),

    babel({
      exclude: ['node_modules/**'],
      include: ['**/*.js'],
      plugins: ['external-helpers', 'babel-plugin-transform-object-rest-spread', 'babel-plugin-transform-class-properties']
    }),

    // process.env.NODE_ENV === 'production' && terser({
    //   warnings: 'verbose'
    // }),

    // after building, assets will end up in `./assets/file`, relatively to the
    // importing module (e.g. `Icon`), so we need to strip `components/Icon` from
    // the import statement to match the actual path
    replace({
      exclude: 'node_modules/**',
      delimiters: ['', ''],

      'components/Icon/': '',
      'components/Modal/': ''
    }),
  ].filter(Boolean)
};


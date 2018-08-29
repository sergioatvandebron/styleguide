import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import fileUrl from 'rollup-plugin-url';

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
    'styled-bootstrap-grid'
  ],

  plugins: [
    resolve({
      module: true,
      extensions: ['.js'],
    }),

    babel({
      exclude: ['node_modules/**'],
      include: ['**/*.js'],
      plugins: ['external-helpers', 'babel-plugin-transform-object-rest-spread']
    }),

    fileUrl({
      limit: Infinity,
      emitFiles: true
    })

    // terser({
    //   warnings: 'verbose'
    // }),
  ]
}

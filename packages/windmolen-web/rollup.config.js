import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import svgo from 'rollup-plugin-svgo';

export default {
  input: 'src/index.js',

  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true
  },

  external: ['react', 'styled-components'],

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

    svgo(),

    // terser({
    //   warnings: 'verbose'
    // }),
  ]
}

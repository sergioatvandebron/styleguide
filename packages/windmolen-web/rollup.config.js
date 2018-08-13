import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

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

    babel({ exclude: 'node_modules/**' }),

    terser({
      warnings: 'verbose'
    })
  ]
}

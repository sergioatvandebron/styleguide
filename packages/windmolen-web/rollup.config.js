import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import html from 'rollup-plugin-html';

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
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),

    terser({
      warnings: 'verbose'
    }),

    html({
      include: '**/icons/*.svg'
    })
  ]
}

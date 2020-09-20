import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/index.js',
  output: { file: 'dist/util.min.js', format: 'umd', name: 'utils' },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}

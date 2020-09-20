import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import server from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/index.js',
  output: { file: 'dist/bundle.cjs.js', format: 'cjs', name: 'bundleName' },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    livereload(),
    server({ open: true, port: 8688, contentBase: '' })
  ]
}

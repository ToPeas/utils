import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

const packages = require('./package.json')

const ENV = process.env.NODE_ENV

const paths = {
  input: {
    root: ENV === 'example' ? 'example/index.js' : 'src/index.js'
  },
  output: {
    root: ENV === 'example' ? 'example/dist/' : 'dist/'
  }
}

const fileNames = {
  development: `${packages.name}.js`,
  example: `example.js`,
  production: `${packages.name}.min.js`
}

export default {
  input: `${paths.input.root}`,
  output: {
    file: `${paths.output.root}${fileName}`,
    format: 'umd',
    name: 'bundle-name'
  },
  watch: {
    exclude: 'node_modules/**'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    commonjs(),
    ENV === 'production' && uglify(),
    eslint({
      include: ['src/**'],
      exclude: ['node_modules/**']
    })
  ]
}

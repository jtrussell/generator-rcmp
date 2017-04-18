
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'umd',
  moduleName: '<%= className %>',
  sourceMap: true,
  external: [
    'react'
  ],
  globals: {
    react: 'React'
  },
  plugins: [
    postcss({ extensions: ['.css'] }),
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    uglify()
  ]
}

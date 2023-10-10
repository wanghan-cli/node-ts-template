const path = require('path')
const { defineConfig } = require('rollup')
const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs')
const nodeResolve = require('@rollup/plugin-node-resolve')

module.exports = defineConfig({
  input: 'src/index.ts',
  output: [{
    file: 'dist/index.js',
    format: 'commonjs'
  }],
  plugins: [
    typescript(),
    commonjs(),
    nodeResolve()
  ]
})

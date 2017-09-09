'use strict'

const svelte = require('rollup-plugin-svelte')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const copy = require('rollup-plugin-copy')
const css = require('rollup-plugin-postcss')

module.exports = [
  {
    input: 'src/main.js',
    output: {
      file: 'build/js/dapp.js',
      format: 'iife'  
    },
    plugins: [
      copy({
        'src/index.html': 'build/index.html',
        'node_modules/web3/dist/web3.min.js': 'build/js/web3.min.js'
      }),
      css(),
      json(),
      commonjs({
        ignore: [ 'crypto', 'xmlhttprequest', 'xhr2' ]
      }),
      resolve(),
      svelte({
        include: 'src/components/**/*.html'
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: ['web3']
  }
]

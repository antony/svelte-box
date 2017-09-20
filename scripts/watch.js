'use strict'

const rollup = require('rollup')
const config = require('../config/rollup.config')
const ora = require('ora')

const watcher = rollup.watch(config)

const spinners = { }

function compilationStart () {
  spinners.compilation = ora('Starting compilation').start()
}

function bundleStart () {
  spinners.bundle = ora('Compiling bundle').start()
}

function fatal (e) {
  spinners.bundle.fail()
  spinners.compilation.fail(`Compilation failed ${e.error.message}`)
}

function error (e) {
  spinners.bundle.warn(`Bundle compilation failed ${e.error.message}`)
}

function bundleEnd () {
  spinners.bundle.succeed('Bundle compilation finished')
}

function compilationEnd () {
  spinners.compilation.succeed('Compilation finished')
}

const eventMappings = {
  START: compilationStart,
  BUNDLE_START: bundleStart,
  FATAL: fatal,
  ERROR: error,
  BUNDLE_END: bundleEnd,
  END: compilationEnd
}

watcher.on('event', event => {
  const handler = eventMappings[event.code]
  return handler ? handler(event) : console.info(event)
})
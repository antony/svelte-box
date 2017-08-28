'use strict'

const rollup = require('rollup')
const config = require('../config/rollup.config.dev')

const watcher = rollup.watch(config)

const eventMappings = {
  START: e => console.info('Compilation started'),
  BUNDLE_START: e => console.info('Bundle compilation started'),
  FATAL: e => console.error(e.error.message, e.error.stack),
  ERROR: e => console.error(e.error.message, e.error.stack)
}

watcher.on('event', event => {
  const handler = eventMappings[event.code]
  return handler ? handler(event) : console.info(event)
})
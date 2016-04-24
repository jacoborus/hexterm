'use strict'

const test = require('tape')
const hexterm = require('./hexterm.js')

test('get closest xterm color', t => {
  t.is(hexterm('000001'), 0)
  t.is(hexterm('ff87ff'), 213)
  t.is(hexterm('090909'), 232)
  t.is(hexterm('090909'), 232)
  t.end()
})

test('throw error on bad hex type', t => {
  t.throws(() => hexterm(1))
  t.throws(() => hexterm(new Date()))
  t.throws(() => hexterm({}))
  t.end()
})

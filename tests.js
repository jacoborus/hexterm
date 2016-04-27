'use strict'

const test = require('tape')
const hexterm = require('./hexterm.js')

test('get closest xterm color', t => {
  t.is(hexterm('000001'), 0, 'no numeral')
  t.is(hexterm('ff87ff'), 213, 'no numeral')
  t.is(hexterm('090909'), 232, 'no numeral')
  t.is(hexterm('090909'), 232, 'no numeral')
  t.is(hexterm('#000001'), 0, 'with numeral')
  t.is(hexterm('#ff87ff'), 213, 'with numeral')
  t.is(hexterm('#090909'), 232, 'with numeral')
  t.is(hexterm('#090909'), 232, 'with numeral')
  t.is(hexterm('ff0'), 11, 'with numeral')
  t.end()
})

test('throw error on wrong hex value', t => {
  t.throws(() => hexterm('a33xy3'), /wrong hexadecimal color code/)
  t.throws(() => hexterm('agagag'), /wrong hexadecimal color code/)
  t.throws(() => hexterm('4444'), /wrong hexadecimal color code/)
  t.end()
})

test('throw error on bad hex type', t => {
  t.throws(() => hexterm(1), /hex value has to be a string/)
  t.throws(() => hexterm(new Date()), /hex value has to be a string/)
  t.throws(() => hexterm({}), /hex value has to be a string/)
  t.end()
})

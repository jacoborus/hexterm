'use strict'

const xt = require('xterm-colors')
const cache = {}

function hexColorDelta (hex1, hex2) {
  // get r/g/b int values of hex1
  let r1 = parseInt(hex1.substring(0, 2), 16)
  let g1 = parseInt(hex1.substring(2, 4), 16)
  let b1 = parseInt(hex1.substring(4, 6), 16)
  // get r/g/b int values of hex2
  let r2 = parseInt(hex2.substring(0, 2), 16)
  let g2 = parseInt(hex2.substring(2, 4), 16)
  let b2 = parseInt(hex2.substring(4, 6), 16)
  // calculate differences between reds, greens and blues
  let r = 255 - Math.abs(r1 - r2)
  let g = 255 - Math.abs(g1 - g2)
  let b = 255 - Math.abs(b1 - b2)
  // limit differences between 0 and 1
  r /= 255
  g /= 255
  b /= 255
  // 0 means opposit colors, 1 means same colors
  return (r + g + b) / 3
}

module.exports = function (hex) {
  // check if there is a direct correspondance
  const direct = xt.findIndex(color => color === hex)
  if (direct !== -1) return direct
  // check if there is a correspondance in cache
  const cached = cache[hex]
  if (cached) return cached
  // get closest xterm color
  let similar = 0
  let closest = {}
  xt.forEach((h, i) => {
    let res = hexColorDelta(hex, h)
    if (res > similar) {
      similar = res
      closest.hex = h
      closest.x = i
    }
  })
  cache[closest.hex] = closest.hex
  return closest.x
}

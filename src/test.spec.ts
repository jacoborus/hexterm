import hexterm from './hexterm'

describe('get closest xterm color', () => {
  test('no numeral values', () => {
    expect(hexterm('000001')).toBe(0)
    expect(hexterm('ff87ff')).toBe(213)
    expect(hexterm('090909')).toBe(232)
    expect(hexterm('090909')).toBe(232)
    expect(hexterm('ff0')).toBe(11)
  })
  test('with numeral values', () => {
    expect(hexterm('#000001')).toBe(0)
    expect(hexterm('#ff87ff')).toBe(213)
    expect(hexterm('#090909')).toBe(232)
    expect(hexterm('#090909')).toBe(232)
  })
})

test('throw error on wrong hex value', () => {
  expect(() => hexterm('a33xy3')).toThrow(/wrong hexadecimal color code/)
  expect(() => hexterm('agagag')).toThrow(/wrong hexadecimal color code/)
  expect(() => hexterm('4444')).toThrow(/wrong hexadecimal color code/)
})

test('throw error on bad hex type', () => {
  expect(() => hexterm(1 as unknown as string)).toThrow(/hex value has to be a string/)
  expect(() => hexterm(new Date() as unknown as string)).toThrow(/hex value has to be a string/)
  expect(() => hexterm({} as unknown as string)).toThrow(/hex value has to be a string/)
})

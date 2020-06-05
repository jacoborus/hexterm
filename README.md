hexterm
=======

Get the xterm closest color to a hexadecimal color

[![Build Status](https://travis-ci.org/jacoborus/hexterm.svg?branch=master)](https://travis-ci.org/jacoborus/hexterm) [![npm version](https://badge.fury.io/js/hexterm.svg)](https://www.npmjs.com/package/hexterm)

## Usage

### Programatically

Install locally

```sh
npm install hexterm
```

Require `hexterm` and pass a string to it

```js
const hexterm = require('hexterm')

hexterm('005fd7') // 26
hexterm('#005fd7') // 26
hexterm('005ED9') // 26
hexterm('ff0') // 11
hexterm('#ff0') // 11
```


### CLI

#### npx

```sh
npx hexterm 005fd7
```

#### Install globally

```sh
npm install -g hexterm
```

Call from your shell: `hexterm <color>`

```sh
hexterm 005fd7
```

Remember to wrap the color code between quotes if has numeral prefix (`#`)

```sh
hexterm '#ff0'
```

## Test

Install dev-dependencies and run tests

```sh
npm install && npm tst
```

---

© 2016-2020 [Jacobo Tabernero](https://github.com/jacoborus) - Released under [MIT License](https://raw.github.com/jacoborus/hexterm/master/LICENSE)

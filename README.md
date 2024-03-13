# hexterm

Get the xterm closest color to a hexadecimal color.

It works in Node.js, Deno and browsers

[![JSR](https://jsr.io/badges/@jacoborus/hexterm)](https://jsr.io/@jacoborus/hexterm)
[![npm version](https://badge.fury.io/js/hexterm.svg)](https://www.npmjs.com/package/hexterm)

## Usage

### Programatically

```js
// deno
import { hexterm } from "jsr:@jacoborus/hexterm";
// node.js
import { hexterm } from "hexterm";

hexterm("005fd7"); // 26
hexterm("#005fd7"); // 26
hexterm("005ED9"); // 26
hexterm("ff0"); // 11
hexterm("#ff0"); // 11
```

### CLI

Install globally

```sh
# deno
deno install -n hexterm jsr:@jacoborus/hexterm/cli

# node
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

Alternatively, you can call **hexterm** using npx

```sh
npx hexterm 005fd7
```

## Test


```sh
deno test
```

## Development


---

© 2016-2024 [Jacobo Tabernero](https://github.com/jacoborus) - Released under
[MIT License](https://raw.github.com/jacoborus/hexterm/master/LICENSE)

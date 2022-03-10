# hexterm

Get the xterm closest color to a hexadecimal color.

It works in Node.js, Deno and browsers

[![Build Status](https://travis-ci.org/jacoborus/hexterm.svg?branch=master)](https://travis-ci.org/jacoborus/hexterm)
[![npm version](https://badge.fury.io/js/hexterm.svg)](https://www.npmjs.com/package/hexterm)
[![deno version](https://shield.deno.dev/x/hexterm)](https://deno.land/x/hexterm)

## Usage

### Programatically

```sh
# only node.js
npm install hexterm
```

```js
// deno
import { hexterm } from "https://deno.land/x/hexterm/src/hexterm.ts";
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
deno install -n hexterm https://deno.land/x/hexterm/src/cli.ts

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

Install dev-dependencies and run tests

```sh
npm install && npm tst
```

## Development

Use [VR (Velociraptor)](https://velociraptor.run/) to run the scripts

---

© 2016-2020 [Jacobo Tabernero](https://github.com/jacoborus) - Released under
[MIT License](https://raw.github.com/jacoborus/hexterm/master/LICENSE)

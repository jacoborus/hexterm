import { build, emptyDir } from "https://deno.land/x/dnt@0.40.0/mod.ts";
import jsr from "../jsr.json" with { type: "json" };

const version = jsr.version;
await emptyDir("../npm");

await build({
  typeCheck: "single",
  test: false,
  declaration: "inline",
  scriptModule: false,
  shims: {
    deno: false,
  },
  entryPoints: ["./src/hexterm.ts"],
  outDir: "../npm",

  package: {
    name: "hexterm",
    version: version as string,
    description: "Convert hex colors to closest xterm",
    main: "esm/hexterm.js",
    bin: {
      hexterm: "./bin/hexterm",
    },
    license: "MIT",
    author: "Jacobo Tabernero Rey - http://jacoborus.codes",
    homepage: "https://github.com/jacoborus/hexterm",
    keywords: [
      "hex",
      "colors",
      "xterm",
      "convert",
    ],
    repository: {
      "type": "git",
      "url": "git@github.com:jacoborus/hexterm.git",
    },
    bugs: {
      "url": "https://github.com/jacoborus/hexterm/issues",
    },
  },

  postBuild() {
    Deno.mkdirSync("../npm/bin", { recursive: true });
    Deno.copyFileSync("src/bin/hexterm", "../npm/bin/hexterm");
    Deno.copyFileSync("LICENSE", "../npm/LICENSE");
    Deno.copyFileSync("README.md", "../npm/README.md");
  },
});

import { build, emptyDir } from "https://deno.land/x/dnt@0.21.2/mod.ts";
import * as semver from "https://deno.land/x/semver@v1.4.0/mod.ts";

const version = semver.clean(Deno.args[0]);
if (!semver.valid(version)) {
  throw new Error("Wrong version number: " + version);
}

await emptyDir("../npm");

await build({
  typeCheck: true,
  test: false,
  declaration: true,
  scriptModule: false,
  shims: {
    // see JS docs for overview and more options
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
    author: "Jacobo Tabernero - http://jacoborus.codes",
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
});

await Deno.mkdir("../npm/bin", { recursive: true });
Deno.copyFileSync("src/bin/hexterm", "../npm/bin/hexterm");
Deno.copyFileSync("LICENSE", "../npm/LICENSE");
Deno.copyFileSync("README.md", "../npm/README.md");

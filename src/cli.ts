import { hexterm } from "./hexterm.ts";

const encoder = new TextEncoder();
const input = Deno.args[0];
const out = hexterm(input).toString();
Deno.stdout.write(encoder.encode(out));

import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { hexterm } from "../src/hexterm.ts";

Deno.test("get closest xterm color", async (t) => {
  await t.step("no numeral values", () => {
    assertEquals(hexterm("000001"), 0);
    assertEquals(hexterm("ff87ff"), 213);
    assertEquals(hexterm("090909"), 232);
    assertEquals(hexterm("090909"), 232);
    assertEquals(hexterm("ff0"), 11);
  });
  await t.step("with numeral values", () => {
    assertEquals(hexterm("#000001"), 0);
    assertEquals(hexterm("#ff87ff"), 213);
    assertEquals(hexterm("#090909"), 232);
    assertEquals(hexterm("#090909"), 232);
  });
});

Deno.test("throw error on wrong hex value", () => {
  assertThrows(() => hexterm("a33xy3"), Error, "wrong hexadecimal color code");
  assertThrows(() => hexterm("agagag"), Error, "wrong hexadecimal color code");
  assertThrows(() => hexterm("4444"), Error, "wrong hexadecimal color code");
});

Deno.test("throw error on bad hex type", () => {
  assertThrows(
    () => hexterm(1 as unknown as string),
    Error,
    "hex value has to be a string",
  );
  assertThrows(
    () => hexterm(new Date() as unknown as string),
    Error,
    "hex value has to be a string",
  );
  assertThrows(
    () => hexterm({} as unknown as string),
    Error,
    "hex value has to be a string",
  );
});

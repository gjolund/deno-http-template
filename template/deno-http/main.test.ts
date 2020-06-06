import { assert } from "https://deno.land/std/testing/asserts.ts";
import handler from "./function/handler.ts";
import wrapper from "./lib/wrapper.ts";

Deno.test("main: function handler exists", () => {
  assert(handler);
});

Deno.test("main: function wrapper exists", () => {
  assert(wrapper);
});
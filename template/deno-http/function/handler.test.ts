import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";
import handler from "./handler.ts";

Deno.test("handler-template: exists", () => {
  assert(handler);
});

Deno.test("handler-template: returns Hello World", async () => {
  const req = new ServerRequest();
  const response = await handler(req);
  assertEquals(response.body, "Hello World");
});

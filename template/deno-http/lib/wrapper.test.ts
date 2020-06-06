import {
  assert,
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import {
  Response as ServerResponse,
  serve,
  ServerRequest,
} from "https://deno.land/std/http/server.ts";
import wrapper from "./wrapper.ts";

const body = "Hello Deno!",
  port = 3000,
  url = `http://0.0.0.0:${port}`,
  mockHandler = async (request: ServerRequest): Promise<ServerResponse> => {
    return {
      body,
    } as ServerResponse;
  };

Deno.test("wrapper: exists", () => {
  assert(wrapper);
});

Deno.test("wrapper: handles http request", async () => {
  const server = serve({ port });
  wrapper(server, mockHandler);
  const res = await fetch(url);
  const text = await res.text();
  assertEquals(text, body);
  server.close();
});

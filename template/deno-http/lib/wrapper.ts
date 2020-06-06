import {
  Response as ServerResponse,
  Server,
  ServerRequest,
} from "https://deno.land/std/http/server.ts";

export default async (
  server: Server,
  handler: (request: ServerRequest) => Promise<ServerResponse>,
) => {
  for await (let request of server) {
    const response = await handler(request);
    await request.respond(response);
  }
};

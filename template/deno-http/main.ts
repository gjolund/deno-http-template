import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";
import handler from './function/handler.ts';

const env = Deno.env.toObject()
const port = env.http_port ? parseInt(env.http_port) : 3000

const server = serve({ port })
let req: ServerRequest

for await (req of server) {
  await handler(req)
}
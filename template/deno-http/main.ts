import { serve } from "https://deno.land/std/http/server.ts";
import handler from "./function/handler.ts";
import wrapper from "./lib/wrapper.ts";

const env = Deno.env.toObject();
const port = env.http_port ? parseInt(env.http_port) : 3000;
const server = serve({ port });

await wrapper(server, handler);

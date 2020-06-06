import {
  Response as ServerResponse,
  ServerRequest,
} from "https://deno.land/std/http/server.ts";

export default async (request: ServerRequest): Promise<ServerResponse> => {
  const body = "Hello World";
  return {
    body,
  } as ServerResponse;
};

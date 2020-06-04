OpenFaaS Deno HTTP template
=============================================

An OpenFaaS of-watchdog template written for Deno.

## Installation

```sh
$ faas template pull https://github.com/austinrivas/deno-http-template
$ faas new --list
Languages available as templates:
- deno-http
```

## Usage

This template provides a thin wrapper around the [Deno Http Server](https://doc.deno.land/https/deno.land/std/http/server.ts) provided by the Deno stdlib. The wrapper implementation closely mirrors the Deno [serve](https://doc.deno.land/https/deno.land/std/http/server.ts#serve) function.

### [Example Handler](https://github.com/austinrivas/deno-http-template/blob/master/template/deno-http/function/handler.ts)
### [Wrapper](https://github.com/austinrivas/deno-http-template/blob/master/template/deno-http/main.ts)

## Extras

This repo also contains a [base image](https://github.com/austinrivas/deno-http-template/blob/master/deno-http-base/Dockerfile) that can be extended as needed by other templates.

The base image is consumed by the deno template itself and the include [okteto image](https://github.com/austinrivas/deno-http-template/blob/master/okteto/Dockerfile) which can be used for remote development on the [Okteto Platform](https://okteto.com/) for remote OpenFaaS development.

## Example Function

A working example of this function template can be found [here](https://github.com/austinrivas/openfaas_deno_func).

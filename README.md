OpenFaaS Deno HTTP template
=============================================

An OpenFaaS of-watchdog template written for Deno.

This repository contains one Deno template for OpenFaaS.

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

OpenFaaS Deno HTTP template
=============================================

An OpenFaaS of-watchdog template written in Rust.

This repository contains two Rust templates for OpenFaaS, one of which gives additional control over the HTTP request and response. They will both handle higher throughput than the classic watchdog due to the process being kept warm.

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

FROM austinrivas/deno-http-base:stable

WORKDIR ${FUNC_HOME_DIR}

USER fnUser

COPY . .

RUN deno cache function/handler.ts main.ts

CMD ["fwatchdog"]
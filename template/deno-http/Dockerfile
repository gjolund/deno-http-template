FROM austinrivas/deno-http-base:stable

WORKDIR ${FUNC_HOME_DIR}

USER fnUser

COPY main.ts .
COPY function/handler.ts function/

RUN deno cache function/handler.ts main.ts

CMD ["fwatchdog"]
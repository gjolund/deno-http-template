FROM austinrivas/deno-http-base:stable

WORKDIR ${FUNC_HOME_DIR}

COPY . .
RUN chown fnUser:fnGroup -R ${FUNC_HOME_DIR}

USER fnUser

RUN deno cache main.ts

CMD ["fwatchdog"]
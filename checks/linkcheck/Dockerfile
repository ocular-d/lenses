FROM testthedocs/ci-base:0.0.2

LABEL maintainer "Sven <sven@ocular-d.tech>" \
    org.label-schema.vendor = "TestTheDocs" \
    name="linkcheck" \
    description="linkcheck container"

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
COPY linkcheck /usr/local/bin/linkcheck

RUN apk --no-cache add curl

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/entrypoint.sh"]


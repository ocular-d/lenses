FROM alpine:3.9

LABEL maintainer "Sven <sven@ocular-d.tech>" \
    org.label-schema.vendor = "ocular-d"

COPY dockerfiles/entrypoint.sh /usr/local/bin/entrypoint.sh
COPY linkcheck /usr/local/bin/linkcheck

RUN adduser -s /bin/false -D -H ocl \
    && apk --no-cache add \
    tini \
    su-exec \
    bash \
    curl

VOLUME ["/srv/data"]

WORKDIR /srv

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/entrypoint.sh"]


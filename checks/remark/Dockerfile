FROM testthedocs/ci-base
LABEL maintainer "TestTheDocs <info@testthedocs.org>" \
    org.label-schema.vendor = "TestTheDocs"

WORKDIR /srv/remark
COPY package.json package.json .remarkrc.yaml ./
#COPY entrypoint.sh /usr/local/bin/entrypoint.sh

RUN apk --no-cache add npm \
	&& npm --global config set user root \
	&& npm install && npm link remark-cli

WORKDIR /srv/remark/input
USER ttd
#ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/entrypoint.sh"]
ENTRYPOINT ["/sbin/tini", "--", "/usr/bin/remark"]
#ENTRYPOINT ["/bin/bash"]

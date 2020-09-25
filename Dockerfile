FROM node:alpine

ADD . /src
WORKDIR /src

RUN apk --no-cache add shadow gcc musl-dev autoconf automake make libtool nasm tiff jpeg zlib zlib-dev file pkgconf

RUN for i in $(seq 1 20); do [ $i -gt 1 ] && sleep 30; yarn install --production && s=0 && break || s=$?; done; (exit $s)

CMD [ "/usr/local/bin/yarn", "run", "docker:build" ]
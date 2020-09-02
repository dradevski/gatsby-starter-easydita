FROM node:alpine

ADD . /src
WORKDIR /src

RUN apk --no-cache add shadow gcc musl-dev autoconf automake make libtool nasm tiff jpeg zlib zlib-dev file pkgconf

RUN yarn install --production

CMD [ "/usr/local/bin/yarn", "run", "docker:build" ]o
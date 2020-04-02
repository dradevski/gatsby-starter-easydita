FROM node:alpine

ADD . /src
WORKDIR /src

RUN yarn install --production

CMD [ "/usr/local/bin/yarn", "run", "docker:build" ]
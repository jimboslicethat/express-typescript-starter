FROM node:10-alpine

WORKDIR /opt/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --pure-lockfile

COPY . .

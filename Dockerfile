FROM node:22.14-alpine

RUN apk add --no-cache python3 make g++ gcc

RUN npm install -g pnpm

ARG ENVIO_VERSION

RUN npm install --global envio@${ENVIO_VERSION}

ARG COMMIT_HASH_ARG
ENV COMMIT_HASH=${COMMIT_HASH_ARG}

RUN npm dev
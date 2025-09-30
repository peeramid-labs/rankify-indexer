FROM node:24.3.0-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm@9.7.1

WORKDIR /envio-indexer

# Build arguments for required environment variables
ARG RPC_URL

# Set them as environment variables
ENV RPC_URL=$RPC_URL

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY ./config.yaml ./config.yaml
COPY ./schema.graphql ./schema.graphql
COPY ./abi ./abi

RUN pnpm envio codegen --config config.yaml
RUN pnpm envio local db-migrate up

COPY ./src ./src
# Or rescript.json etc depending on preferred handler language
COPY ./tsconfig.json ./tsconfig.json

CMD pnpm envio start --config config.yaml
FROM node:12.13-alpine

ENV REACT_APP_ROUTER_PREFIX /test
ENV PUBLIC_URL /
ENV NODE_ENV production

WORKDIR /app

COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json
COPY utils /app/utils
COPY config /app/config
COPY public /app/public
COPY cli /app/cli
COPY src /app/src

RUN npx npm-force-resolutions
RUN npm install --only=prod
RUN node cli/_utils/ci-utils/executor.js --command=build

EXPOSE 80

CMD node config/deploy/make-runtime-config.js && node config/production-server/static.js

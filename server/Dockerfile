FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3010

ENV NODE_ENV=production

ENTRYPOINT ["npx", "ts-node", "src/index.ts"]
### Build stage to compile typescript into javascript
FROM node:18.19.1-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm ci --quiet && npx tsc


### Production image
FROM node:18.19.1-alpine

WORKDIR /app

EXPOSE 3010

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --quiet --only=production

COPY --from=builder /usr/src/app/build ./build

ENTRYPOINT ["node", "/app/build/index.js"]

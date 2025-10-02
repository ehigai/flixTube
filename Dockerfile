FROM node:22-slim

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY ./src ./src
COPY ./assets ./assets
COPY tsconfig.json ./
RUN npm run build

CMD [ "npm","start" ]

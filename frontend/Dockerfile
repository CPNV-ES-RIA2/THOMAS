# syntax=docker/dockerfile:1

FROM node:lts-alpine3.19 as development
WORKDIR /frontend
COPY package.json ./
RUN npm install
COPY /cypress ./cypress
EXPOSE 3000
CMD ["npm", "start"]

FROM node:lts-alpine3.19 as production
WORKDIR /frontend
COPY package.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
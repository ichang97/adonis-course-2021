FROM node:17-alpine
WORKDIR /usr/app
COPY . .
RUN yarn
RUN node ace build --production

EXPOSE 3333

CMD ["node", "build/server.js"]
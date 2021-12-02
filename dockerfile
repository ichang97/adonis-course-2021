FROM node:17-alpine
WORKDIR /usr/app
COPY . .
RUN yarn
RUN node ace build --production

EXPOSE 3333

ENTRYPOINT [ "entrypoint.sh" ]
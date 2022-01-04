FROM node:lts-slim
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app


COPY ./build /usr/src/app/
RUN npm i -g serve



EXPOSE 3000

CMD [ "serve","-s","../app" ]
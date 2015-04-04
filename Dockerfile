FROM node:0.10-onbuild

MAINTAINER Roy van de Water <roy.v.water@gmail.com>

EXPOSE 3004
ENV PATH $PATH:/usr/local/bin

ADD . rdio-sync-api

WORKDIR rdio-sync-api
RUN npm --no-color --force install

CMD ["npm", "start"]

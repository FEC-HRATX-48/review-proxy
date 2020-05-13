FROM alpine:3.7

# list maintainer
LABEL MAINTAINER=AUTOMAUS

# Update ubuntu and install node and npm
RUN apk update
RUN apk add --update nodejs nodejs-npm


WORKDIR /proxy

COPY /package.json ./
COPY /package-lock.json ./

RUN npm install;

COPY . ./

EXPOSE 9004

CMD ["npm", "run", "start:server"]
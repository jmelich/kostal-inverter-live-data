### STAGE 1: Build ###
FROM node:14

RUN apt-get update

RUN mkdir /app
WORKDIR /app
COPY . /app


### STAGE 2: Run ###
RUN ["npm", "install"]


EXPOSE 3000
CMD ["npm", "run", "start"]

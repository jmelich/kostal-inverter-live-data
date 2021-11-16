FROM node:15.6.0-alpine3.12 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN node_modules/.bin/ng build --prod --outputHashing=all

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/kostal-inverter-live-data /usr/share/nginx/html

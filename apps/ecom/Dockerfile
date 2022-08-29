FROM node:16-alpine3.12 AS builder
# Set working directory
WORKDIR /app
# Copy file endwith .json
COPY package*.json /app/
# install node modules and build assets
RUN npm install
# copy all files into image
COPY . /app/

# build the app
RUN npx nx build ecom

# for using serve to run the project
# for voiding the alpine server down
# by not using the latest alpine image
FROM nginx:1.21.6-alpine 

RUN apk update && \
    apk add --no-cache tzdata

ENV TZ=Asia/Bangkok

# delete all files inside /usr/share/nginx/html/ and in /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/* && \
    rm -rf /etc/nginx/conf.d/*

COPY --from=builder /app/dist/apps/ecom /usr/share/nginx/html

COPY ./apps/ecom/nginx/nginx.conf /etc/nginx/conf.d

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html

# need to expose to port 80
EXPOSE 80

# ENTRYPOINT ["serve", "-s", "build"]
CMD ["nginx", "-g", "daemon off;"]
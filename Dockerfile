FROM ubuntu:latest

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run" ,"start"]
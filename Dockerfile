FROM node:alpine

WORKDIR /app
COPY package*.json ./
EXPOSE 8081
RUN npm install
RUN npm install --global nodemon
COPY ./ ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start

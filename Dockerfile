FROM node
EXPOSE 8080

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install

ADD . /app

CMD npm run dev

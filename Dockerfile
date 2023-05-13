FROM node:12

WORKDIR /app

RUN mkdir logs

COPY package*.json /app

RUN npm run install-server --only=production

COPY . .

USER node

CMD [ "npm", "start"]

EXPOSE 8000
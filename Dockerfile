FROM node

WORKDIR /wallet/api/

COPY ./api/package.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "start" ]

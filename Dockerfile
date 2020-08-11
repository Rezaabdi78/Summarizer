FROM node:alpine

RUN npm install -g serve

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "dist"]

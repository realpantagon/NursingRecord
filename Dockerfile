FROM node:18-alpine AS base

WORKDIR /app

#copy from to 
COPY package.json* yarn.lock* package-lock.json* tailwind.config.js* ./

RUN npm install --legacy-peer-deps

COPY . ./

RUN npm run build

EXPOSE 3000

CMD [ "npm" , "start" ]



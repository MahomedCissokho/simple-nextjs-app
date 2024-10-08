# simple dockerfile to build image for nextjs app

FROM node:18-alpine

WORKDIR /app
COPY package*.json /app
RUN npm i 
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
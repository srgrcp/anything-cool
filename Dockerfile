FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm i
EXPOSE 4000
CMD ["node", "build/index.js"]

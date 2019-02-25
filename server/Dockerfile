FROM node:10.10.0
WORKDIR /server
COPY package.json package-lock.json ./
RUN NODE_ENV=production npm install
COPY src ./
ENV PORT=8080
EXPOSE ${PORT}
ENTRYPOINT ["node", "/server/index.js"]
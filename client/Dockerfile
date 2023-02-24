FROM node

WORKDIR /client

COPY package*.json ./
RUN npm install --force

COPY . .

ENV PORT=80
EXPOSE 80

CMD ["npm", "start"]
FROM node

WORKDIR /server

COPY package*.json ./
RUN npm install --force

COPY . .

ENV PORT=3001
EXPOSE 3001

CMD ["npm", "start"]

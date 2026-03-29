FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build -- --configuration production
RUN npm install -g serve

EXPOSE 4200

CMD ["serve", "-s", "dist/restaurant-dashboard/browser", "-l", "4200"]

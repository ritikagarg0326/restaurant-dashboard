# ----------- Build Stage -----------
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy remaining files
COPY . .

# Build Angular app (production)
RUN npm run build:prod


# ----------- Serve Stage -----------
# ----------- Serve Stage -----------
FROM nginx:alpine

# ✅ REMOVE default config FIRST
RUN rm /etc/nginx/conf.d/default.conf

# ✅ COPY your nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Angular build
COPY --from=build /app/dist/restaurant-dashboard/browser /usr/share/nginx/html

# Copy env
COPY env.js /usr/share/nginx/html/env.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
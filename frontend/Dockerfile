# Stage 1: Build
FROM node:18 AS build

WORKDIR /app

# Copy package files first
COPY package.json package-lock.json* ./

# Ensure devDependencies are installed
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build the frontend (Vite)
RUN npx vite build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


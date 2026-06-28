# ---------- BUILD ----------
FROM node:22 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- RUNTIME ----------
FROM nginx:alpine

# limpa default nginx
RUN rm -rf /usr/share/nginx/html/*

# 👉 AJUSTE IMPORTANTE AQUI (angular novo)
COPY --from=builder /app/dist/ceov/browser /usr/share/nginx/html

# nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

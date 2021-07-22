# build environment
FROM node:14-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install
COPY . ./
RUN npm run build

# production environment
# FROM steebchen/nginx-spa:stable
FROM nginx:stable-alpine
COPY --from=build /app/build /app
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Define node version
FROM node:20.14.0-alpine as build
# Define container directory
WORKDIR /usr/src/hfuiapp
# Copy package*.json for npm install
COPY package*.json ./
# Run npm clean install, including dev dependencies for @angular-devkit
RUN npm ci
# Run npm install @angular/cli
RUN npm install -g @angular/cli@18.0.2
# Copy all files
COPY . .
# Run ng build through npm to create dist folder
RUN npm run build --prod
# Define nginx for front-end server
FROM nginx:stable-perl

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf:ro

# Copy dist from ng build to nginx html folder
COPY --from=build /usr/src/hfuiapp/dist/happy-family-ui /usr/share/nginx/html
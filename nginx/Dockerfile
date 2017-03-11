FROM nginx:latest

#Copy the configuration
COPY app/conf/nginx.conf /etc/nginx

#Copy the static files to be served
COPY app/src/ /usr/share/nginx/html

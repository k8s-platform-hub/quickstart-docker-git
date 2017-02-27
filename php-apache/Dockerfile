FROM php:7.1.2-apache

ADD ./myapp/conf/apache-config.conf /etc/apache2/sites-enabled/000-default.conf
ADD ./myapp/conf/ports.conf /etc/apache2/ports.conf
COPY ./myapp/src /var/www/html/
EXPOSE 8080

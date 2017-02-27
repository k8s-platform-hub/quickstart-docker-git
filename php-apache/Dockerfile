FROM php:7.1.2-apache

ADD apache-config.conf /etc/apache2/sites-enabled/000-default.conf
ADD ports.conf /etc/apache2/ports.conf
COPY myapp /var/www/html/
EXPOSE 8080

FROM php:7.1.2-apache

# Add default apache listener
COPY app/conf/apache-config.conf /etc/apache2/sites-enabled/000-default.conf
COPY app/conf/ports.conf /etc/apache2/ports.conf
COPY app/src /var/www/html/

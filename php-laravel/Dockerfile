#start with our base image (the foundation) - version 7.1.5
FROM php:7.1.5-apache

#install all the system dependencies and enable PHP modules 
RUN apt-get update && apt-get install -y \  
      libicu-dev \
      libpq-dev \
      libmcrypt-dev \
      git \
      zip \
      unzip \
    && rm -r /var/lib/apt/lists/* \
    && docker-php-ext-install \
      intl \
      mbstring \
      mcrypt \
      pcntl \
      pdo_pgsql \
      pgsql \
      zip \
      opcache

#install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

#set our application folder as an environment variable
ENV APP_HOME /var/www/html

#change uid and gid of apache to docker user uid/gid
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data

#change the web_root to laravel /var/www/html/public folder
RUN sed -i -e "s/html/html\/public/g" /etc/apache2/sites-enabled/000-default.conf

# enable apache module rewrite
RUN a2enmod rewrite

#copy source files and run composer
COPY app/composer.json $APP_HOME/composer.json

# install all PHP dependencies
RUN composer install --no-scripts --no-autoloader --prefer-dist -vvv \
            && rm -rf /root/.composer/cache

COPY app $APP_HOME/

#change ownership of our applications
RUN chown -R www-data:www-data $APP_HOME

RUN sed -i -e "s/VirtualHost \*:80/VirtualHost *:8080/g" /etc/apache2/sites-enabled/000-default.conf

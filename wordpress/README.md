RUN MYSQL DATABASE
docker run --name mysql-wordpress -v /your/path/to/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=hasura -d -p 3306:3306 mysql-hasura:0.1

VOLUME: /var/lib/mysql

RUN WORDPRESS APP

docker run --name wordpress-app -e WORDPRESS_DB_HOST=192.168.99.100 -e WORDPRESS_DB_PASSWORD=hasura -v /your/path/to/wordpress:/var/www/html/wp-content/ -d -p 8080:80 wordpress-hasura:0.1

VOLUME: /var/www/html/

TODO:
Configure Mails (SMTP) to be sent for Signup/Forgot Password

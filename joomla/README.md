docker run --name joomla-app -e JOOMLA_DB_HOST=192.168.99.100:3306 -e JOOMLA_DB_PASSWORD=hasura -d -p 8090:80 joomla:latest

docker run -p 9000:80 -v /your/path/to/joomla/html:/var/www/html -e JOOMLA_DB_HOST=192.168.99.100:3306 -e JOOMLA_DB_PASSWORD=hasura -d joomla:latest

#REFERENCES
https://forum.joomla.org/viewtopic.php?t=943420

http://joomla.stackexchange.com/questions/6929/install-from-web-not-working-with-ssl

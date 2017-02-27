
Docker Quickstart Guide:

- docker build -t mysql-hasura:0.1

RUN MYSQL DATABASE
docker run --name mysql-wordpress -v /your/path/to/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=hasura -d -p 3306:3306 mysql-hasura:0.1


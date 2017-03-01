#Description
Runs a MySQL server
This is a stateful service that exposes TCP endpoints

#Docker Quickstart
- docker run -d -p 3306:3306 \
    -e MYSQL_SOMETHING=asdf \
    -e MYSQL_SOMETHING=asdf \
    -e MYSQL_SOMETHING=asdf \
    -v $(pwd)/data=/var/lib/mysql/data \
    mysql:latest

#Git CI quickstart
Typically, modify these files.
Then git push origin master.

#Build your own Docker image
docker build -t my-mysql .

#Advanced options
MYSQL_ROOT_PASSWORD: set this option if you want to X

docker build -t nginx-app:0.1 .
docker run -d -p 8080:80 nginx-app:0.1

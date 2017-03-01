#!/bin/bash
GOOS=linux GOARCH=386 go build -a ./myapp/src/Server.go && \
chmod +x Server

#!/bin/bash
GOOS=linux GOARCH=386 go build -a ./app/src/Server.go && \
chmod +x Server && \
mkdir -p ./app/bin && \
mv Server ./app/bin/Server

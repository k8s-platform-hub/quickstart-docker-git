#!/bin/bash
GOOS=linux GOARCH=386 go build -a ./../src/Server.go && \
chmod +x Server && \
mv Server ../Server

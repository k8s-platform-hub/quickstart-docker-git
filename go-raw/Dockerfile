FROM golang:1.7.5-wheezy
COPY ./app/src/ /home/root/
RUN go build -a /home/root/Server.go && \
    chmod +x Server
CMD /go/Server

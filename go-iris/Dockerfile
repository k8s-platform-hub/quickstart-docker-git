FROM golang:1.8-alpine

RUN apk add --no-cache git build-base

RUN go get github.com/Masterminds/glide

WORKDIR /go/src/github.com/hasura/quickstart-docker-git/go-iris

ADD glide.lock glide.lock

ADD glide.yaml glide.yaml

RUN glide install --skip-test

ADD . .

RUN CGO_ENABLED=0 go build -a app/main.go

CMD ./main

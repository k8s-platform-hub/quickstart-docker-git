# Introduction
This is a Go webserver without any frameworks (barebone example of a Go webserver). You can choose any framework of your liking 'or' boycott the framework all together.

## Explain
There are two dockerfile,
* **Prod** - Go Production has a barebone base image with a compiled binary copied onto the go-server. This ensure that the image is light and there is no additional software which is required during development.
 ### What you will need!!
 * The Production Go setup needs you to have the go compiler installed on your pc.
 * You can run the `gobuild.sh` to build your server binaries.
 * The Dockerfile-prod will have the production Dockerfile.
   * `docker build -t <image-name>:<version> -f Dockerfile-prod .`

* **Dev** - Go development has the golang:1.8.0-alphine image. This build will have the compiler included in the docker image which is really useful for development and for git-push.
 ### What you need to know!!
  * The development Go setup builds docker images which has the go compiler in the images.
  * You can see the docker setup to understand that built basically copies the source code and then compile the `Server.go` file and finally start of that `Server` binary.

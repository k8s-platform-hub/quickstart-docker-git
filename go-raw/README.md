# Introduction
Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. This is an example of a Go webserver without any frameworks (bareboned). You can choose any framework of your liking 'or' boycott the framework all together.

## Quickstart
### Docker Build
 > Go is compiled program language, so it makes sense that we don't really need the entire compiler for production docker images. Hence this repo has two dockerfile, one for production (**Dockerfile-prod**) and the other for development (**Dockerfile**)

 > The default docker build command `docker build -t <image-name>:<version> .` assumes there is a Dockerfile available in the present working directory.

 > **Note:**

 > Unless specified otherwise, the docker build command takes **Dockerfile** for the build instruction.
 ```sh
  # The below example builds a docker image with Dockerfile
  # this image is preferred for development and for git-push
  docker build -t go-server:1.0 .
```
If the production image has a different build instruction-set found in **Dockerfile-prod**, we can pass the file using `-f` flag followed by the filename.
```sh
  # The below shell file makes the binary which is need for the final production docker image.
  ./app/conf/gobuild.sh
  # The below example builds a docker image with Dockerfile-prod
  docker build -t go-server:1.0 -f Dockerfile-prod .
```

### Docker Run
>  After building your image (production or development) you can test the image local by running `docker run -p <host-port>:<container-port> <image-name>:<version>` below are example of docker run
```sh
  # Example for default run command (logs will be printed on same terminal)
  docker run -p 8080:8080 go-server:1.0 .
  # Example for run with a background process
  docker run -d -p 8080:8080  go-server:1.0
  # Example for a run with change in environment variable for port.
  docker run -d -p 7000:7000 -e APP_PORT=7000 go-server:1.0
```

### Git Based Pipeline
> Follow the steps mentioned below
1. Ensure that you have a git project
2. Edit `app/src/Server.go`
3. Remember to gitignore the binary file (**Server**).
4. Commit your changes
  ```bash
  git add .
  git commit -m "message"
  ```
5. Push the changes to git
  ```bash
  git push <remote> master
  ```

### Advanced usage
> #### Port
Default Port for application is `8080`.
Default Application port can be changed by modifying the variable `port` in  `app/src/Server.go` or setting Environment Variable
```go
// port is not present then set default.
if port == "" {
  port = "<NEW DEFAULT PORT>"
}
```
#### Environment Variables
* `APP_PORT` - Application port can also be specified by setting APP_PORT ENV

>```bash
docker run -d -p 8080:<APP_PORT> -e APP_PORT='<NEW_PORT>' go-server:1.0
```

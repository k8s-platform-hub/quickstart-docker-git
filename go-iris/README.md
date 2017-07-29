# Introduction
Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. Iris is a fast, simple and efficient micro web framework for Go. It provides a beautifully expressive and easy to use foundation for your next website, API, or distributed app.

## Quickstart

### Docker Build
> Build the Docker image using the following command
```bash
$ docker build -t go-iris:<tag> .
```

### Docker Run
>  After building your image, you can test the image local by running `docker run -p <host-port>:<container-port> <image-name>:<version>` below are example of docker run
```bash
$ docker run -d -p 8080:8080 go-iris:<tag>
```

### Git Based Pipeline
> Follow the steps mentioned below
1. Ensure that you have a git project
2. Edit `app/main.go`
3. Remember to gitignore the binary file (**main**).
4. Commit your changes
  ```bash
  git add .
  git commit -m "message"
  ```
5. Push the changes to git
  ```bash
  git push <remote> master
  ```

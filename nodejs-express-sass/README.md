# Introduction
Example docker template for the NodeJS, Express and Sass.

#### Node.JS
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

#### Express
It's a fast, unopinionated, minimalist web framework for Node.js.

#### Sass
Sass is the most mature, stable, and powerful professional grade CSS extension language.

## Quickstart
### Development Environment.
 > You will need to setup your local environment on your system.
 1. You need to navigate to `./app/src`.
 2. Do `npm install`.
 3. Navigate back to the root directory (where you have your Dockerfile).
 4. Run the `sass-watch.sh`. You would only need the Node-sass library in your local development setup.
 ```bash
 # You can run the below command to start the Node-sass watcher at root.
 # Node-sass command will monitor the .sass files inside your './app/src/sass' folder and if the files gets modified, it will compile them to css and store them in './app/src/public/css'.
 ./app/conf/sass-watch.sh
 ```

 > ### Docker Build
 > The Docker build instruction will just copy all files inside `app/src` directory. **Note:** It will not compile the sass to css at build, docker build assumes that you have these files which are pre-compiled to css before the build process beings.

 > The default docker build command `docker build -t <image-name>:<version> .` assumes there is a Dockerfile available in the present working directory.

 > ```sh
  # The below example builds a docker image with Dockerfile
  docker build -t nodejs-express-sass:1.0 .
```

> ### Docker Run
>  After building your image you can test the image local by running `docker run -p <host-port>:<container-port> <image-name>:<version>` below are example of docker run
```sh
  # Example for default run command (logs will be printed on same terminal)
  docker run -p 8080:8080 nodejs-express-sass:1.0 .
  # Example for run with a background process
  docker run -d -p 8080:8080 nodejs-express-sass:1.0
  # Example for a run with change in environment variable for port.
  docker run -d -p 7000:7000 -e APP_PORT=7000 nodejs-express-sass:1.0
```

### Git Based Pipeline
> Follow the steps mentioned below
1. Ensure that you have a git project
2. Edit `app/src/server.js` for express-routes, Edit `app/src/sass/` for sass (css) changes and `app/src/public/html` for your static html files.
3. Commit your changes
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
Default Application port can be changed by modifying the variable `port` in  `app/src/server.js` or setting Environment Variable
```JavaScript
// port is not present then set default.
var port = process.env.APP_PORT ? process.env.APP_PORT : '8080';
```
#### Environment Variables
* `APP_PORT` - Application port can also be specified by setting APP_PORT ENV

>```bash
docker run -d -p 8080:<APP_PORT> -e APP_PORT='<NEW_PORT>' nodejs-express-sass:1.0
```

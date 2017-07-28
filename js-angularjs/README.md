# angularjs-hasura

AngularJS starter-kit with Hasura integration built-in for **Angular 1.x (also known as just AngularJS)**

Checkout the [tutorial](https://docs.hasura.io/0.13/tutorials/angularjs-starter-kit-with-yeoman-and-hasura.html) for more information on how to use this starter-kit.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular) version 0.16.0.
All the yeoman commands are available to further scaffold the app.

## Working on the app locally

### Without docker 

`node` and `npm` should be installed

```bash
$ npm install -g grunt-cli bower yo generator-karma generator-angular
$ cd app/
$ npm install
$ bower install
$ grunt serve
```

Run `grunt` for building and `grunt serve` for preview.

### With docker

Build the docker image locally and run it

```bash
$ docker build -t image:latest .
$ docker run -p 8080:8080 image:latest
```

App will be available at `http://localhost:8080`

## Deploying the app

Use `git push` to deploy this app to hasura

- Add you SSH key using Hasura Console
- Create a new `Git Push` service (say `ui`)
- Copy and execute the `git remote add ...` command
- Make changes to your code

```bash
$ git add .
$ git commit -m "made changes"
$ git push hasura master
```

This will deploy the app on to hasura and app will be avaialble on `https://ui.<project-name>.hasura-app.io`

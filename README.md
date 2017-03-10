# quickstart-docker-git

There are 2 existential questions that one must answer before embarking on a
Docker based service.

1. What should the Dockerfile be? Can I avoid downloading the Internet everytime
   I run a build?
2. What should my git repo look like? What does my development workflow look
   like?

This repository aims to maintain a collection of up-to-date quickstart base
repos that are ready to be used.

Some examples currently included:
- Static file service based on [nginx](https://github.com/hasura/quickstart-docker-git/tree/master/nginx)
- Web service in Swift ([Vapor](https://github.com/hasura/quickstart-docker-git/tree/master/swift-vapor), [Perfect](https://github.com/hasura/quickstart-docker-git/tree/master/swift-perfect))
- Deploying a [MySQL](https://github.com/hasura/quickstart-docker-git/tree/master/mysql) service
- [Wordpress](https://github.com/hasura/quickstart-docker-git/tree/master/wordpress)
- A simple [php-apache](https://github.com/hasura/quickstart-docker-git/tree/master/php-apache) quickstart

# What is included

Folders in this repo represent base repos for web frameworks, CMSs or databases.

- Use ``docker build`` to build your own image
- Initialise a git repo, and run ``git push`` to push to github that can be
  integrated with a docker hub's automated builds
- Use ``docker run`` and get a running container. Basic configuration options
  are specified in docker-config.yaml.

# What is NOT included

This is just a collection of quickstart repos. The idea is to modify the
quickstart template as you need to from a basic setup that is working. Hence,
this doesn't include things like setting up docker-compose files or more
advanced framework specific configurations yet.

# Repo Structure

Every base repo has the following structure:

```
/
--Dockerfile
--docker-config.yaml
--README.md
--app/
```

The README inside the base repo will contain further instructions.

# How to use a base repo from this collection

To use any base-repo, do the following:

- Clone this repo: ``git clone https://github.com/hasura/quickstart-docker-git``

- Copy the relevant base-repo:
  ``mv quickstart-docker-git/nodejs-express my-node-project``
  ![git clone example](https://raw.githubusercontent.com/hasura/quickstart-docker-git/master/_docs/1-git-clone.png)

- Initialize your own git repo inside this folder if you want:
  ``cd my-node-project && git init``

- Build and run your own docker image:
  ``docker build -t my-node-app .``
  ![git clone example](https://raw.githubusercontent.com/hasura/quickstart-docker-git/master/_docs/2-docker-build-run.png)

- Test if this app is working by making a request to the container, at '/'.
  ![curl example](https://raw.githubusercontent.com/hasura/quickstart-docker-git/master/_docs/3-curl.png)


# Automated Docker hub builds

All base repos in this collection can readily be integrated to setup an
automated docker image build system.

Read here for more details:
[https://docs.docker.com/docker-hub/github/](https://docs.docker.com/docker-hub/github/)


# Contribution needed!

Please fork, file comments/bugs and submit your PRs!  We've created a list of
issues where active help is required:
[help-wanted](https://github.com/hasura/quickstart-docker-git/issues).

Specifically,

1. Optimise Dockerfiles for faster builds
2. Optimise Dockerfiles for production image builds (esp. for compiled
   languages)
3. Add support for more frameworks

# quickstart-docker-git

There are 2 existential questions that one must answer before embarking on a
Docker based project.

1. What should the Dockerfile be? Can I avoid downloading the Internet everytime I run a build?
2. What should my git repo look like? What does my development workflow look like?

This repository is aims to maintain a collection of up-to-date quickstart base repos that
are ready to be used in a project.

# What you get

In every folder in this collection, you will be able to do any of the following:

- Use ``docker build`` to build your own image
- Initialise a git repo, and run ``git push`` to push to github that can
  be integrated with a docker hub's automated builds
- Use ``docker run`` and get a running container. Basic configuration options are
  specified in docker-config.yaml.

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


# How to use base repo from this collection

To use any base-repo, do the following:

- Clone this repo:
  ``git clone https://github.com/hasura/quickstart-docker-git``
- Copy the relevant base-repo:
  ``mv docker-git-ci-templates/nodejs-express my-node-project``

  ![git clone example](https://raw.githubusercontent.com/hasura/quickstart-docker-git/master/_docs/1-git-clone.png)

- Initialize your own git repo inside this folder if you want: ``cd my-node-project && git init``
- Build and run your own docker image: ``docker build -t my-app .``
  ![git clone example](https://raw.githubusercontent.com/hasura/quickstart-docker-git/master/_docs/2-docker-build-run.png)

- Test if this app is wokring by making a request to the container, at '/'.
  ![curl example](https://raw.githubusercontent.com/hasura/quickstart-docker-git/master/_docs/3-curl.png)


# Automated Docker hub builds

All base repos in this collection can readily be integrated to setup an
automated docker image build system.

Read here for more details: [https://docs.docker.com/docker-hub/github/](https://docs.docker.com/docker-hub/github/) 


# Contribution

Please contribute to this repository! Please visit github [issues](https://github.com/hasura/quickstart-docker-git/issues) to
see where you can pitch in.

1. Optimise Dockerfiles for faster builds
2. Optimise Dockerfiles for production image builds (esp. for compiled languages)
3. Add support for more frameworks

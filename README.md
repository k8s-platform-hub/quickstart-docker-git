# An existential introduction

There are 2 questions that one must answer before embarking on a
Docker based project.

1. What should the Dockerfile be? Can I avoid downloading the Internet everytime I run a build?
2. What should my git repo look like? What does my development workflow look like?

The aim is to maintain a collection of quickstart up-to-date base repos that
are ready to go.

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

The README inside the base repo will contain instructions on what you
can do next.


# How to use base repo from this collection

To use any base-repo, do the following:

- Clone this repo:
  ``git clone https://github.com/hasura/quickstart-docker-git``
- Copy the relevant base-repo:
  ``mv docker-git-ci-templates/nodejs-express my-node-project``
- Initialize your own git repo: ``cd my-node-project && git init``

# git push integrations for automated Docker hub builds

All base repos in this collection can readily be integrated to setup an
automated docker image build system.

Read here for more details: [https://docs.docker.com/docker-hub/github/](https://docs.docker.com/docker-hub/github/) 


# Contribution

Please contribute to this repository! Please visit github issues to
see where you can pitch in.

We want you to:

- Contribute towards and create more sample frameworks
- Improve existing base repos based on your experience. Eg: make it more
  production ready, to improve docker-image build times, or to improve
  docker image sizes.

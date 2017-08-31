csharp-aspnet
-------------

# Introduction

ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. This is a quickstart template for ASP.NET Core application using C#.

The source code have been generated using [Yo Generator ASP.NET](https://github.com/OmniSharp/generator-aspnet).

You can read more about ASP.NET Core on [Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/).

# Quickstart

## Docker build

Build the docker image using the follwing command:

```bash
$ docker build -t csharp-aspnet .
```

## Docker run

After building the image, you can run the docker image locally by executing

```bash
$ docker run -d -p 8080:8080 csharp-aspnet
```

NOTE: The server runs on port `8080` by default

## Git based workflow

- Modify the source code under `app/src`
- Git add and commit your changes
- Add hasura git remote
- Push your code to hasura

```bash
$ git push hasura master
```

# Contributing

Static files are also included in the git repo (which is not a good practice). Any help is welcome in cleaning this up and setting up a proper .NET workflow.

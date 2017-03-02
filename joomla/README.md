# Configure MYSQL

Build the Docker image from the `mysql` project and run `mysql` container.

# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t joomla-app:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 8080:80 joomla-app:<tag>
$ docker run -e JOOMLA_DB_HOST=<DOCKER_IP> -e JOOMLA_DB_PASSWORD=<DB_PASSWORD> -v /your/path/to/joomla/html:/var/www/html -d -p 8080:80 joomla-app:<tag>
```

# Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Commit your changes

    ```bash
    $ git add .
    $ git commit -m "message"
    ```

3. Push the changes to git

    ```bash
    $ git push <remote> master
    ```

# Advanced usage

### **Environment Variables**

* `JOOMLA_DB_HOST` - Host of MYSQL server (Docker IP).
* `JOOMLA_DB_USER` - UserName of MYSQL database (defaults to "root").
* `JOOMLA_DB_PASSWORD` - Password of MYSQL database.
* `JOOMLA_DB_NAME` - Database Name (defaults to "joomla").

### **Volumes**

* `/var/www/html` - Should contain the joomla source files (`/your/path/to/joomla/html`)

# KNOWN ISSUES

Joomla doesn't support serving content over SSL by default. You need to manually configure the installation configuration to force ssl
[https://forum.joomla.org/viewtopic.php?t=943420](http://)

[http://joomla.stackexchange.com/questions/6929/install-from-web-not-working-with-ssl](http://)


# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t nginx-app:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 8080:80 nginx-app:<tag>
```

# Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Edit `app/conf/nginx.conf` for configuration changes and `app/src/index.html` for HTML changes
3. Commit your changes

    ```bash
    $ git add .
    $ git commit -m "message"
    ```

4. Push the changes to git

    ```bash
    $ git push <remote> master
    ```

# Advanced usage

### **Port**

Default Port for application is `80` .

### **Environment Variables**

* `NGINX_HOST` - Host can be specified explicitly

  ```bash
  $ docker run -d -p 8080:80 -e NGINX_HOST='<YOUR_HOST>' nginx-app:<tag>
  ```
* `NGINX_PORT` - Port can be specified explicitly

  ```bash
  $ docker run -d -p 8080:<NEW_PORT> -e NGINX_PORT='<NEW_PORT>' nginx-app:<tag>
  ```

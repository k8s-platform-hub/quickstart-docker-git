# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t php-apache:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 8080:8080 php-apache:<tag>
```

# Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Edit `app/src/index.php` for any changes required
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

Default Port for application is `8080` .

Application port can be changed by modifying `app/conf/apache-config.conf` and `app/conf/ports.conf`

#### apache-config.conf

```
<VirtualHost *:<NEW_PORT>>
```

#### ports.conf

```
Listen <NEW_PORT>
```

```bash
$ docker run -d -p 8080:<NEW_PORT> php-apache:<tag>
```

# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t haskell-spock:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 8080:8080 haskell-spock:<tag>
```

# Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Edit `app/Main.hs`
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
You can change the port by modifying the variable `port` in src/Conf.hs

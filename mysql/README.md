# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t hasura-mysql:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD="<PASSWORD>" hasura-mysql:<tag>
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

* `MYSQL_ROOT_PASSWORD` - This variable is mandatory and specifies the password that will be set for the MySQL root superuser account.
* `MYSQL_DATABASE` - This variable is optional and allows you to specify the name of a database to be created on image startup.
* `MYSQL_USER`, `MYSQL_PASSWORD` - These variables are optional, used in conjunction to create a new user and to set that user's password.Both variables are required for a user to be created.

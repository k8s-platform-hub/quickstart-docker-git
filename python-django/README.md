# Quickstart a Django project on Hasura

## Deploy a Hello World application

Copy the python-django directory from the
[quickstart-docker-git](https://github.com/hasura/quickstart-docker-git)
repository, and initialize an empty git repository inside it.

```bash
$ git init
```

Follow the instructions in the [Hasura documentation for custom microservices](https://docs.hasura.io/0.13/ref/custom-microservices/creating-git-push-microservices.html) to get started with deploying a git-push service on Hasura.

## Creating a new Django project

To create your own Django project, you can delete the contents of the `src`
directory, and create a new Django project by doing

```bash
$ django-admin startproject mysite
```
in the `src` directory.

Your folder structure will look like the following

```
.
├── app
│   ├── conf
│   │   ├── gunicorn_config.py
│   │   └── requirements.txt
│   └── src
│       └── mysite
│           ├── manage.py
│           └── mysite
│               ├── __init__.py
│               ├── settings.py
│               ├── urls.py
│               └── wsgi.py
├── docker-config.yaml
├── Dockerfile
└── README.md
```

The next section deals with connecting to the database and adding your database
credentials to your settings.py file.


## Connecting to the database

Hasura runs a PostgreSQL database as a service on your project, and you can
connect to it using the following command as shown in
`console.<project-name>.hasura-app.io/commandline/tunnel`. 

```bash
ssh -p 22 -L 5432:postgres.hasura:5432 hasura@ssh.<project-name>.hasura-app.io
```
Keep the above tunnel running, and continue development on another terminal.

The above command forwards port 5432 of the postgres.hasura service onto port
5432 of your localhost, so that you can now connect to your remote database as
if it were a local postgres database.

Go to the Database section of your settings.py, and edit it so that it looks
like this

```python
DATABASES = {
     'default': {
         'ENGINE': 'django.db.backends.postgresql_psycopg2',
         'NAME': 'hasuradb',
         'USER': os.environ.get('POSTGRES_USER'),
         'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
         'HOST': 'localhost',
         'PORT': '5432',
     }
 }

```

Set the POSTGRES_USER and POSTGRES_PASSWORD environment variables so that
Django can connect to the database.

```bash
$ export POSTGRES_USER='admin'
$ export POSTGRES_PASSWORD='<password>'
```
The username and password for the postgres service would have been mailed to
you when you first set up the Hasura project.

You also need to add these environment variables to the git push service for
your project so that your app can access the database when deployed. 
**TODO**

You can now continue development with a connection to your production database.

## Deploy your Django project on Hasura

To deploy your project, you can just do 

```bash
$ git push hasura master
```

# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t python-django:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 8080:8080 python-django:<tag>
```

# Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Edit `app/src/helloworld/views.py` for controllers. `app/src/helloworld/urls.py` for routes
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

Application port can be changed by modifying the variable `bind` in  `app/conf/gunicorn_config.py` or setting Environment Variable

```python
bind = "0.0.0.0:" + os.environ.get("APP_PORTS", "<NEW_PORT>")
```

```bash
$ docker run -d -p 8080:<NEW_PORT> python-django:<tag>
```

### **Environment Variables**

* `APP_PORTS` - Application port can also be specified by setting APP_PORTS ENV

  ```bash
  $ docker run -d -p 8080:<NEW_PORT> -e APP_PORTS='<NEW_PORT>' python-django:<tag>
  ```

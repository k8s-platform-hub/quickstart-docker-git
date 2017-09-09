# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t python-flask:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 8080:8080 python-flask:<tag>
```

# Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Edit `app/src/server.py`
3. Commit your changes

    ```bash
    $ git add .
    $ git commit -m "message"
    ```

4. Push the changes to git

    ```bash
    $ git push <remote> master
    ```

# Local development

```bash
$ cd app/src
$ pip install -r requirements.txt
$ FLASK_APP=__init__.py flask run
```
# Advanced usage

### **Port**

Default Port for application is `8080` .

Application port can be changed by modifying the variable `bind` in  `app/conf/gunicorn_config.py` or setting Environment Variable

```python
bind = "0.0.0.0:" + os.environ.get("APP_PORT", "<NEW_PORT>")
```

```bash
$ docker run -d -p 8080:<NEW_PORT> python-flask:<tag>
```

### **Environment Variables**

* `APP_PORT` - Application port can also be specified by setting APP_PORT ENV

  ```bash
  $ docker run -d -p 8080:<NEW_PORT> -e APP_PORT='<NEW_PORT>' python-flask:<tag>
  ```

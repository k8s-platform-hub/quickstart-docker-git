# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t elasticsearch-index:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 9200:9200 elasticsearch-index:<tag>
```

# Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Edit `app/conf/elasticsearch.yml` for any configuration changes
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

Default Port for application is `9200` .

### **Environment Variables**

* `ES_JAVA_OPTS` - Heap Size can be specified

  ```bash
  $ docker run -d -p 9200:9200 -e ES_JAVA_OPTS='<HEAP_SIZE>' elasticsearch-index:<tag>
  ```

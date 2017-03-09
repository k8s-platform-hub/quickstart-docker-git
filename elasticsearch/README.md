# Quickstart - Build your own Docker image#

Build the Docker image using the following command

```bash
$ docker build -t elasticsearch-index:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 9200:9200 elasticsearch-index:<tag>
```

# Advanced usage

### **Port**

Default Port for application is `9200` .

### **Environment Variables**

* `ES_JAVA_OPTS` - Heap Size can be specified

  ```bash
  $ docker run -d -p 9200:9200 -e ES_JAVA_OPTS='<HEAP_SIZE>' elasticsearch-index:<tag>
  ```

### **Volumes**

* `/usr/share/elasticsearch/data` - Will contain the elasticsearch data files

  ```bash
  $ docker run -d -p 9200:9200 -v /your/path/to/es_data:/usr/share/elasticsearch/data elasticsearch-index:<tag>
  ```

FROM python:3-stretch

WORKDIR /usr/src/app

# Install postgres
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# install requirements
# this way when you build you won't need to install again
# and since COPY is cached we don't need to wait
COPY app/conf/requirements.txt /tmp/requirements.txt
RUN pip3 install -r /tmp/requirements.txt

# Copy the Configuration and the Scripts
COPY app/conf /conf
COPY app/scripts /usr/src/scripts
RUN chmod a+x /usr/src/scripts/migrate.sh

# Copy the source
COPY app/src /usr/src/app

WORKDIR /usr/src/app/helloworld

# App port number is configured through the gunicorn config file
ENTRYPOINT ["/usr/src/scripts/migrate.sh"]

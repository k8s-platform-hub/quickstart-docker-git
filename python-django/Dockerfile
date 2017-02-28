FROM python:3.5.2-alpine

# Copy python module requirements
COPY myapp/conf/requirements.txt /
RUN pip3 install -r /requirements.txt

# Copy the source
COPY myapp/src/helloworld /app
WORKDIR /app

CMD ["gunicorn", "-w 4", "-b 0.0.0.0:8080", "helloworld.wsgi"]

FROM python:3.5.2-alpine

# copy requirements and install dependencies before copying source code as
# copying the entire directory at once will trigger the installl step whenever
# source code changes
COPY requirements.txt /flask-app/
RUN pip3 install -r /flask-app/requirements.txt

# Copy the source
COPY app /flask-app/app
WORKDIR /flask-app/app

CMD ["gunicorn", "-w 4", "-b 0.0.0.0:8080", "server:app"]

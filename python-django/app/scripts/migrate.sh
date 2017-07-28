#!/bin/sh

# First, makemigrations and migrate
python3 manage.py makemigrations
python3 manage.py migrate

# Now run the gunicorn server 
gunicorn --config /conf/gunicorn_config.py helloworld.wsgi

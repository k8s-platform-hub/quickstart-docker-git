from src import app
from flask import jsonify, request
import requests
import json


@app.route("/")
def hello():
    return json.dumps({"message":"Hello World!"})

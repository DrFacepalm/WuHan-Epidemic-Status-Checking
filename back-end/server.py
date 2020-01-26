import time
import json
import boto3
import csv
import requests as rq
from pprint import pprint
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin


# The Backend Object.
app = Flask(__name__)
CORS(app)


# Remote Data Access Calls.
def hourly_source():
    # Info and Credential.
    bucket_name = "epidemic-tracking"
    object_key = "data.txt"
    client = boto3.client('s3')

    # Get and update the report from server.
    client.download_file(bucket_name, object_key, object_key)
    file = open(object_key, "r")
    lines = file.readlines()
    file.close()

    # Parsing Data.
    data = []
    for line in lines:
        if not line:
            continue
        line = line.rstrip().split(",")
        confirmed = int(line[0])
        suspected = int(line[1])
        death = int(line[2])
        cured = int(line[3])
        # From 2020-01-25 13:38:34.935647 to 2020-01-25 13
        timestamp = line[4].split(":")[0]
        data.append([confirmed, suspected, death, cured, timestamp])

    return data

def daily_source():
    url = 'https://raw.githubusercontent.com/DrFacepalm/WuHan-Epidemic-Status-Checking/master/data/PerDay.csv'
    response = str(rq.get(url).content, "utf-8").split("\n")
    print(response)
    data = []

    for line in response:
        if not line:
            continue
        line = line.split(",")
        print(line)
        timestamp = line[0]
        confirmed = int(line[1])
        death = int(line[2])
        data.append([timestamp, confirmed, death])

    return data


def make_payload(data):
    return {"data":data}


# APIs.
# Get the latest confirmed, suspected, death and cured numbers.
@app.route('/api/overview', methods=['GET'])
def overview():
    src = hourly_source()
    latest = src[-1]
    payload = make_payload({
        "confirmed":latest[0],
        "suspected":latest[1],
        "death":latest[2],
        "cured":latest[3]
    })
    return jsonify(payload)


# Get the 24 hours data.
@app.route('/api/hourly_data', methods=['GET'])
def hourly_data():
    src = hourly_source()
    past_24_hours = src[-24:]

    data = {}
    i = 0
    for hour in past_24_hours:
        data[i] = {
            "confirmed":hour[0],
            "suspected":hour[1],
            "death":hour[2],
            "cured":hour[3],
            "timestamp":(int(hour[4].split(" ")[1])+8) %24 # UTC to Beijing Time
        }
        i += 1

    payload = make_payload(data)

    return jsonify(payload)


# Get the daily data.
@app.route('/api/daily_data', methods=['GET'])
def daily_data():
    src = daily_source()

    data = {}
    i = 0
    for day in src:
        data[i] = {
            "confirmed":day[1],
            "death":day[2],
            "timestamp":day[0]
        }
        i += 1

    payload = make_payload(data)
    
    return jsonify(payload)

# Run the server.
app.debug = True
app.run()

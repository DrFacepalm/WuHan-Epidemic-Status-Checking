
from botocore.errorfactory import ClientError
from bs4 import BeautifulSoup
import requests
import boto3
import datetime
import time
import re

def event():
    # Info and Credential.
    bucket_name = "epidemic-tracking"
    object_key = "data.csv"


    # Scrape Data.
    contents = requests.get("http://3g.dxy.cn/newh5/view/pneumonia").text
    site = BeautifulSoup(contents, "html.parser")
    tag = site.find("script", {"id":"getStatisticsService"})
    matched = re.search('"confirmedCount":(\d*),"suspectedCount":(\d*),"curedCount":(\d*),"deadCount":(\d*)', str(tag))
    data = [matched.group(1), matched.group(2), matched.group(4), matched.group(3)]


    # Create a client.
    client = boto3.client(
        's3'
    )


    # Verify if a data file exists. Create one if doesn't exist.
    try:
        client.head_object(Bucket=bucket_name, Key=object_key)
    except ClientError:
        open(object_key, "w+").close()
        client.upload_file(object_key, bucket_name, object_key)


    # Get and update the report.
    client.download_file(bucket_name, object_key, object_key)
    data_file = open(object_key, "a+")
    data_file.write(",".join(data) + "," + str(datetime.datetime.now()) + "\n")
    data_file.close()
    client.upload_file(object_key, bucket_name, object_key)


while (True):
    print("Scraping Now.")
    event()
    print("Next Scrape in 1 hour.")
    time.sleep(3600)

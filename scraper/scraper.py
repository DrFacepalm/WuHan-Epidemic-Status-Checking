from bs4 import BeautifulSoup
from botocore.errorfactory import ClientError
import requests
import boto3
import datetime
from secret import *


# Info and Credential.
bucket_name = "epidemic-tracking"
object_key = "data.txt"


# Scrape Data.
contents = requests.get("http://3g.dxy.cn/newh5/view/pneumonia").text
soup = BeautifulSoup(contents, "html.parser")
tags = soup.find("span", {"class": "content___2hIPS"}).find_all("span")
data = [tag.string for tag in tags]


# Create a client.
client = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_access_key
)


# Verify if a data file exists. Create one if doesn't exist.
try:
    client.head_object(Bucket=bucket_name, Key=object_key)
except ClientError:
    open('data.txt', "w+").close()
    client.upload_file(object_key, bucket_name, object_key)


# Get and update the report.
client.download_file(bucket_name, object_key, object_key)
data_file = open(object_key, "a+")
data_file.write(",".join(data) + "," + str(datetime.datetime.now()) + "\n")
data_file.close()
client.upload_file(object_key, bucket_name, object_key)

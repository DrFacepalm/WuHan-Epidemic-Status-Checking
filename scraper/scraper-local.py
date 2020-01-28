from bs4 import BeautifulSoup
from botocore.errorfactory import ClientError
import requests
import boto3
import datetime
import time

def event():
    # Scrape Data.
    contents = requests.get("http://3g.dxy.cn/newh5/view/pneumonia").text
    soup = BeautifulSoup(contents, "html.parser")
    tags = soup.find("span", {"class": "content___2hIPS"}).find_all("span")
    data = []

    for tag in tags:
        if tag.string:
            data.append(tag.string)
        else:
            continue

    # Get and update the report.
    data_file = open("data.csv", "a+")
    data_file.write(",".join(data) + "," + str(datetime.datetime.now()) + "\n")
    data_file.close()


while (True):
    print("Scraping Now.")
    event()
    print("Next Scrape in 1 hour.")
    time.sleep(3600)

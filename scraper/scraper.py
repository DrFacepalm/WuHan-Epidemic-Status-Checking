from bs4 import BeautifulSoup
import requests

url = "3g.dxy.cn/newh5/view/pneumonia"

r = requests.get("http://" + url)

webpage = r.text

soup = BeautifulSoup(webpage, "html.parser")

x = soup.find("span", {"class": "content___2hIPS"})

spans = x.find_all("span")

for span in spans:
    print(span.string)

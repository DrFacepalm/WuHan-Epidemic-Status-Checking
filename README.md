# WuHan-Epidemic-Status-Checking (2019-nCov)
A webscraper that gathers information about the WuHan Epidemic, then we can use this information to predict the number of patients in the fucture and visualise it on a website.

# 武汉新型冠状病毒/新型肺炎 2019-nCov 爬虫，追踪以及预测
抓取丁香医生提供的数据来预测未来可能的确诊数量。数据将更新在网页端。



# Infographics
http://ncov.zachaccino.me/


# Repository Organisation
`scraper` - A python scraper that downloads the data periodically.

`front-end` - An react app that visualise the data and future prediction.

`back-end` - A python flask app that augment and fit the data.

`data` - Periodically publish the scraped data.


# 项目结构
`scraper` - Python爬虫，固定时间抓取数据。

`front-end` - React 网页前端，用于显示数据。

`back-end` - Python Flask后端，用于处理数据以及预测趋势。

`data` - 抓取的数据。


# Progress
`scaper` - Completed

`front-end` - Just Started (Eta Completion 26th)

`back-end` - Not Yet Started (Eta Completion 26th)


# 进度
`scaper` - 已完成

`front-end` - 开发中 (预计完成 1月26日)

`back-end` - 未开始 (预计完成 1月26th)



# Data
The data gathering only gathers the total number of `confirmed cases`, `suspected cases`, `cured cases` and `death cases`. There is no breakdown of which province the cases occurs in.

# 数据简要
这个项目暂时只抓取全部确诊，疑似，治愈以及死亡人数。各省数据暂时不在考虑范围内。 数据抓去频率约为1小时一次。


# Next Data Publishing DateP
26th Jan 12:00PM (Beijing Time)

# 下一批数据公开时间
一月26日 正午 （北京时间）


# Attribution / 数据来源
丁香医生
https://3g.dxy.cn/newh5/view/pneumonia


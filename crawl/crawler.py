import requests
from bs4 import BeautifulSoup
import json
import os

def saveJson(data):
    ## base directory of python file
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

    with open(os.path.join(BASE_DIR, 'result.json'), 'a+') as json_file:
        json.dump(data, json_file)

def getURL():
    BASE_URL = 'http://timetable.unsw.edu.au/2020/'
    req = requests.get(BASE_URL)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')
    class_table = soup.select(
        '.data > a'
    )
    lists = []

    for row in class_table:
        if len(row['href']) != 13:
            continue

        subject = BASE_URL + row['href']

        if subject not in lists:
            lists.append(subject)

    return lists

def getCourse(url):
    req = requests.get(url)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')
    courseTable = soup.select('.data > a')
    subject = soup.select(
        "td.data"
    )
    subject = subject[7].text
    data = {}
    count = 0
    courseCode = ''
    courseName = ''

    for row in courseTable:
        flag = 0
        course = {}

        if subject in data:
            course = data[subject]

        if len(row['href']) != 13:
            continue

        if (count % 2) == 0:
            courseCode = row.text
        else:
            courseName = row.text
            flag = 1

        if flag:
            course[courseCode] = courseName
            flag = 0

        count += 1
        data[subject] = course

    saveJson(data)

if __name__ == '__main__':
    url_list = getURL()
    for url in url_list:
        getCourse(url)

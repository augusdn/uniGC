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
    lists = {}

    for row in class_table:
        if len(row['href']) != 13:
            continue

        url = BASE_URL + row['href']

        #print(row.getText())
        
        if url not in lists:
            lists[url] = row.getText()

    return lists

def getCourse(url, area):
    req = requests.get(url)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')
    courseTable = soup.select('.data > a')
    subject = soup.select(
        "td.data"
    )
    subject = subject[7].text
    courses = []
    count = 0
    courseCode = ''
    courseName = ''

    for row in courseTable:
        flag = 0
        course = {}

        if len(row['href']) != 13:
            continue
        
        if (count % 2) == 0:
            courseCode = row.text
        else:
            courseName = row.text
            flag = 1

        if flag:
            course['code'] = courseCode
            course['title'] = courseName
            course['subject'] = area
            courses.append(course)
            print("adding "+courseCode)
            x = requests.post("https://asia-east2-unigc-eea69.cloudfunctions.net/api/addCourse", data=course)
            print(x.text)
            flag = 0

        count += 1
    #print(courses)

if __name__ == '__main__':
    url_list = getURL()
    #print(url_list)

    # for url, area in url_list.items():
    #     getCourse(url,area)
    getCourse("http://timetable.unsw.edu.au/2020/ACCTKENS.html","ACCT")

    # for url in url_list:
    #     getCourse(url)

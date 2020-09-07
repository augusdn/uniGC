import requests
from bs4 import BeautifulSoup
import json
import os

def saveJson(data, file_name):
    ## base directory of python file
    # BASE_DIR = os.path.dirname(os.path.abspath(__file__))

    with open(file_name, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

def crawlURL():
    BASE_URL = 'http://timetable.unsw.edu.au/2020/'
    req = requests.get(BASE_URL)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')
    class_table = soup.select(
        '.data > a'
    )
    subjects = {}

    for row in class_table:
        if len(row['href']) != 13:
            continue

        url = BASE_URL + row['href']

        #print(row.getText())
        
        if url not in subjects:
            subjects[url] = [row.getText()]
        else:
            subjects[url].append(row.getText())
        #print(subjects[url])

    return subjects

def getCourses(url, area):
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
            # print("adding "+courseCode)
            # x = requests.post("https://asia-east2-unigc-eea69.cloudfunctions.net/api/addCourse", data=course)
            # if not x.ok:
            #     print(courseCode + " Failed.")
            # else:
            #     print(courseCode + " Success.")
            flag = 0

        count += 1
    return courses

if __name__ == '__main__':
    subjects_data = crawlURL()
    # print(subjects)
    
    subject_areas = []
    courses = []
    for url, names in subjects_data.items():
        subject_areas.append({"code": names[0], "name": names[1]})
        courses += getCourses(url,names[0])
    saveJson(subject_areas, "subjects.json")
    # maximum document per transaction is limited to 500 from firestore
    n = 490
    x = [courses[i:i + n] for i in range(0, len(courses), n)]
    for l in x:
        saveJson(l, "courses" + str(x.index(l)) + ".json")
    # saveJson(courses, "courses.json")
## crawler.py
import requests
from bs4 import BeautifulSoup
import json
import os

def saveJson(data):
    ## base directory of python file
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    
    with open(os.path.join(BASE_DIR, 'result.json'), 'w+') as json_file:
        json.dump(data, json_file)

def getURL():
    BASE_URL = 'http://classutil.unsw.edu.au/'
    req = requests.get(BASE_URL)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')
    class_table = soup.select(
        'table:nth-of-type(2) > tr'
    )
    data = {}
    lists = []
    
    for row in class_table:
        course = {}
        if row.td['class'][0] != 'data':
            continue
        # code
        code = row.contents[9].text
        #data[code] = code
        # if data[code] alreadt exist, load
        #print(code)
        if code in data:
            course = data[code]
            
        # name
        name = row.contents[11].text
        course['name'] = name
        
        # t0, summer
        t0 = row.contents[1].find('a', href=True)
        if t0:
            tempURL = BASE_URL + t0['href']
            lists.append(tempURL)
            course[t0.text] = tempURL
        # t1
        t1 = row.contents[3].find('a', href=True)
        if t1:
            tempURL = BASE_URL + t1['href']
            lists.append(tempURL)
            course[t1.text] = tempURL
        # t2
        t2 = row.contents[5].find('a', href=True)
        if t2:
            tempURL = BASE_URL + t2['href']
            lists.append(tempURL)
            course[t2.text] = tempURL
        #t3
        t3 = row.contents[7].find('a', href=True)
        if t3:
            tempURL = BASE_URL + t3['href']
            lists.append(tempURL)
            course[t3.text] = tempURL
        #print(course)
        data[code] = course
    
    saveJson(data)
    return lists
    
def crawl(url):
    print(url)

if __name__ == '__main__':
    url_list = getURL()
    for url in url_list:
        crawl(url)

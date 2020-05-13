# -*- coding: utf-8 -*-
#! /usr/bin/python2

import urllib
import re
import json
import HTMLParser

#srodki = {u'warmińsko-mazurskie':{'lat':'53.85', 'lon':'20.816667'},u'dolnośląskie':{'lat':'51.083333', 'lon':'16.383333'},u'kujawsko-pomorskie':{'lat':'53.066667', 'lon': '18.483333'}, u'lubelskie': {'lat': '51.216667', 'lon': '22.9'}, u'lubuskie': {'lat': '52.183333', 'lon': '15.333333'}, u'łódzkie': {'lat':'51.6', 'lon': '19.416667'}, u'małopolskie':{'lat': '49.85', 'lon': '20.266667'}, u'mazowieckie': {'lat': '52.333333', 'lon': '21.1'}, u'opolskie':{'lat':'50.633333', 'lon': '17.9 '}, u'podkarpackie':{'lat': '49.95', 'lon': '22.166667'}, u'podlaskie':{'lat':'53.267219', 'lon': '22.931939'}, u'pomorskie':{'lat':'54.183333', 'lon': '18'}, u'śląskie':{'lat': '50.333333', 'lon': '19'}, u'świętokrzyskie':{'lat': '50.75', 'lon': '20.766667'}, u'wielkopolskie':{'lat':'52.333333', 'lon': '17.233333'}, u'zachodniopomorskie':{'lat': '53.6', 'lon': '15.533333'}}
srodki = {'warmińsko-mazurskie':{'lat':'53.85', 'lon':'20.816667'},'dolnośląskie':{'lat':'51.083333', 'lon':'16.383333'},'kujawsko-pomorskie':{'lat':'53.066667', 'lon': '18.483333'}, 'lubelskie': {'lat': '51.216667', 'lon': '22.9'}, 'lubuskie': {'lat': '52.183333', 'lon': '15.333333'}, 'łódzkie': {'lat':'51.6', 'lon': '19.416667'}, 'małopolskie':{'lat': '49.85', 'lon': '20.266667'}, 'mazowieckie': {'lat': '52.333333', 'lon': '21.1'}, 'opolskie':{'lat':'50.633333', 'lon': '17.9 '}, 'podkarpackie':{'lat': '49.95', 'lon': '22.166667'}, 'podlaskie':{'lat':'53.267219', 'lon': '22.931939'}, 'pomorskie':{'lat':'54.183333', 'lon': '18'}, 'śląskie':{'lat': '50.333333', 'lon': '19'}, 'świętokrzyskie':{'lat': '50.75', 'lon': '20.766667'}, 'wielkopolskie':{'lat':'52.333333', 'lon': '17.233333'}, 'zachodniopomorskie':{'lat': '53.6', 'lon': '15.533333'}}
#import pdb;pdb.set_trace()
a = urllib.urlopen('https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2')
b = a.read().decode('utf-8')
c = b.replace('\n','')
x = re.search('(?<=parsedData":"\[)[^\]]*', b)
xx = x.group(0).replace('\\','')
h = HTMLParser.HTMLParser()
xx = h.unescape(xx.replace('&quot;','')).encode('utf-8')
#regex = "((?<=\"Województwo\"\:\")[^\"]*)\",\"Liczba\"\:\"(\d*)\"\,\"Liczba\ zgonów\"\:\"(\d*)"
regex = "((?<=Wojew\\xc3\\xb3dztwo\:)[^,]*),Liczba\:(\d*)\,Liczba\ zgon\\xc3\\xb3w\:(\d*)"
matches = re.finditer(regex, xx, re.MULTILINE) 
res_list = [] 
for x, match in enumerate(matches, start=1): 
    voiv_dict = {} 
    for i, some in enumerate(match.groups(), start=1): 
        voiv_dict[i] = match.group(i) 
    res_list.append(voiv_dict)

result = []
for wojewodztwo in res_list[1:]:
    woj = {"id": wojewodztwo[1], "name": wojewodztwo[1], "location": srodki[wojewodztwo[1]], 'deaths': 0 if wojewodztwo[3] == '' else int(wojewodztwo[3]), "infected": int(wojewodztwo[2]), "cured": 0, "type": "ACTIVE"}
    result.append(woj)

#with open('./domains/koronamap.cal24.pl/public_html/data.json', 'wt') as fp:
with open('./data.json', 'wt') as fp:
    r = json.dumps({"points": result})
    fp.write(r)

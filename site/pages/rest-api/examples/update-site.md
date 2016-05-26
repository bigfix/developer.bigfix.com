---
title: Update Site
---

<<<<<<< HEAD
Updates the specified site on the server with the contents of 'site.xml'.

# cURL
```
curl -X PUT --data-binary @site.xml --user <username>:<password> https://<server>:<port>/api/site/{site type}/{site name}
=======
Updates an existing site on the server with the contents of `site.xml`. 

[Get](./get-sites.html) the list of sites, then run update on the desired site:

* `site type` is type of the site (Master Action, External, Custom, Operator)
* `site name` is the name of the site to be updated

# cURL
```
curl -X PUT --data-binary @site.xml --user {username}:{password} https://{server}:{port}/api/site/{site type}/{site name}
>>>>>>> ce630b54645c1d53bf84ba4eb25cd088cfdae899
```

# python
```python
import requests
with open('site.xml') as xml:
    xmldata = ''.join(xml.readlines())
<<<<<<< HEAD
    r = requests.put('https://localhost:52311/api/site/{site type}/{site name}', verify=False, auth=('user', 'password'), data=xmldata)
=======
    r = requests.put('https://{server}:{port}/api/site/{site type}/{site name}', auth=('{username}', '{password}'), data=xmldata)
>>>>>>> ce630b54645c1d53bf84ba4eb25cd088cfdae899
    print(r.text)
```

# Input
## site.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
        <CustomSite>
                <Name>TestSite</Name>
                <GatherURL>http://bigfix.test:52311/cgi-bin/bfgather.exe/CustomSite_TestSite</GatherURL>
                <Description></Description>
                <Domain>BESC</Domain>
                <GlobalReadPermission>true</GlobalReadPermission>
                <Subscription>
                        <Mode>None</Mode>
                </Subscription>
        </CustomSite>
</BES>
```



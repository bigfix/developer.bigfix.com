---
title: Update Site
---

Updates an existing site on the server with the contents of `site.xml`. 

[Get](./get-site.html) the list of sites, then run update on the desired site:

* `site type` is type of the site (Master Action, External, Custom, Operator)
* `site name` is the name of the site to be updated

# cURL
```
curl -X PUT --data-binary @site.xml --user {username}:{password} https://{server}:{port}/api/site/{site type}/{site name}
```

# python
```python
import requests
with open('site.xml', 'rb') as xml:
    r = requests.put('https://{server}:{port}/api/site/{site type}/{site name}', auth=('{username}', '{password}'), data=xml)
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



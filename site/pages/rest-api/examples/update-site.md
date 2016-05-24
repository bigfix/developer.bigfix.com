---
title: Update Site
---

Updates the specified site on the server with the contents of 'site.xml'.

# cURL
```
curl -X PUT --data-binary @site.xml --user <username>:<password> https://<server>:<port>/api/site/{site type}/{site name}
```

# python
```python
import requests
with open('site.xml') as xml:
    xmldata = ''.join(xml.readlines())
    r = requests.put('https://localhost:52311/api/site/{site type}/{site name}', verify=False, auth=('user', 'password'), data=xmldata)
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



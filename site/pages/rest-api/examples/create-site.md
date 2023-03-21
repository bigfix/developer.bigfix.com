---
title: Create Site
---

Creates the specified site on the server with the contents of `site.xml`. In this example, we create a custom site with a Relevance conditional that returns true if the name of the operating system contains "Win".

# cURL
```
curl -X POST --data-binary @site.xml --user {username}:{password} https://{server}:{port}/api/sites
```

# python
```python
import requests
with open('site.xml', 'rb') as xml:
    xmldata = ''.join(xml.readlines())
    r = requests.post('https://{server}:{port}/api/sites', auth=('{username}', '{password}'), data=xmldata)
    print(r.text)
```

# Input
## site.xml
```xml
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
        <CustomSite>
                <Name>Test</Name>
                <GatherURL>http://bigfix.test:52311/cgi-bin/bfgather.exe/CustomSite_Test</GatherURL>
                <Description>This is an example Custom Site</Description>
                <Domain>BESC</Domain>
                <GlobalReadPermission>false</GlobalReadPermission>
                <Subscription>
                        <Mode>Custom</Mode>
                        <CustomGroup JoinByIntersection="false">
                                <SearchComponentRelevance Comparison="IsTrue">
                                        <Relevance>name of operating system contains "Win"</Relevance>
                                </SearchComponentRelevance>
                        </CustomGroup>
                </Subscription>
        </CustomSite>
</BES>
```



---
title: Create Analysis
---

Create a new analysis for a site.

# cURL

```bash
curl -X POST --data-binary @analysis.xml --user {username}:{password} https://{server}:{port}/api/analyses/{site}
```

# python

```python
import requests
with open('analysis.xml', 'rb') as xml:
  r = requests.post('https://{server}:{port}/api/analyses/{site}', auth=('{username}', '{password}'), data=xml)
  print(r.text)
```

# Input
## analysis.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Analysis>
    <Title>Custom Analytics I</Title>
    <Description><![CDATA[my description]]></Description>
    <Relevance>true</Relevance>
    <Source>Internal</Source>
    <SourceReleaseDate>2016-05-25</SourceReleaseDate>
    <MIMEField>
      <Name>x-fixlet-modification-time</Name>
      <Value>Wed, 25 May 2016 20:59:59 +0000</Value>
    </MIMEField>
    <Domain>BESC</Domain>
    <Property Name="New Property" ID="1">operating system</Property>
  </Analysis>
</BES>
```

# Output

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Analysis Resource="https://{server}:{port}/api/analysis/{site}/1" LastModified="Wed, 25 May 2016 20:59:59 +0000">
    <Name>Custom Analysis I</Name>
    <ID>1</ID>
  </Analysis>
</BES>
```


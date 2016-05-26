---
title: Update Analysis
---

Update a previously created analysis.

# cURL

```bash
curl -X PUT --data-binary @analysis.xml --user {username}:{password} https://{server}:{port}/api/analysis/{site}/{analysis id}
```

# python

```python
import requests
with open('analysis.xml', 'rb') as xml:
  r = requests.put('https://{server}:{port}/api/analysis/{site}/{analysis id}', auth=('{username}', '{password}'), data=xml)
  print(r.text)
```

# Input
## analysis.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Analysis>
    <Title>Better Custom Analytics I</Title>
    <Description><![CDATA[my new description]]></Description>
    <Relevance>true</Relevance>
    <Source>Internal</Source>
    <SourceReleaseDate>2016-05-25</SourceReleaseDate>
    <MIMEField>
      <Name>x-fixlet-modification-time</Name>
      <Value>Wed, 25 May 2016 20:59:59 +0000</Value>
    </MIMEField>
    <Domain>BESC</Domain>
    <Property Name="Newer Property" ID="1">now</Property>
  </Analysis>
</BES>
```

# Output

```
{analysis id}
```


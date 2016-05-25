---
title: Create Fixlet
---

This command will genereate a POST request to create a fixlet specified by `new.xml` in the site `site type/site name`. 

* `site name` is the the name of the site under which the fixlet will be created
* `site type` is the type of the site

`site type` and `site name` can be inpsected via GET `/api/sites`


# python
```python
import requests
with open('new.xml') as xml:
	r = requests.post('https://{server}:{port}/api/fixlets/{site type}/{site name}', auth=('{username}', '{password}'), data=xml)
print(r.text)
```

# Input
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Fixlet>
		<Title>New Fixlet</Title>
		<Relevance>exists folder "C:\Programs Files"</Relevance>
		<Category></Category>
		<Source>Internal</Source>
		<SourceID></SourceID>
		<SourceReleaseDate>2016-05-21</SourceReleaseDate>
		<SourceSeverity></SourceSeverity>
		<CVENames></CVENames>
		<SANSID></SANSID>
		<Domain>BESC</Domain>
	</Fixlet>
</BES>
```


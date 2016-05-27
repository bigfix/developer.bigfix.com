---
title: Create Fixlet
---

This command will genereate a POST request to create a fixlet specified by `new.xml` in the site `site type/site name`. 

* `site name` is the the name of the site under which the fixlet will be created.
* `site type` is the type of the site.

`site type` and `site name` can be inpsected via GET `/api/sites`

Fixlet's XML schema can be found [here](https://www.ibm.com/support/knowledgecenter/?lang=en#!/SS6MCG_9.5.0/com.ibm.bigfix.doc/Platform/API_Reference/c_fixlet_or_task.html).

# cURL
```
curl -X POST --data-binary @new.xml --user {username}:{password} https://{server}:{port}/api/fixlets/{site type}/{site name}
```

# python
```python
import requests
with open('new.xml', 'rb') as xml:
	r = requests.post('https://{server}:{port}/api/fixlets/{site type}/{site name}', auth=('{username}', '{password}'), data=xml)
print(r.text)
```

# Input
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Fixlet>
	    <Title>New Fixlet</Title>
	    <Description> This is the example new fixlet to be created </Description>
	    <Relevance>exists folder "C:\Programs Files"</Relevance>
		<Category></Category>
		<Source>Internal</Source>
		<SourceID></SourceID>
		<SourceReleaseDate>2016-05-21</SourceReleaseDate>
	</Fixlet>
</BES>
```


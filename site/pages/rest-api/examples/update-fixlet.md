---
title: Update Fixlet
---

This command will genereate a PUT request to update the fixlet found with the id of `fixlet id` under `site type/site name`, replacing it with an updated fixlet specified in `update.xml`.

* `site type` is the type of the site containing the fixlet to be updated
* `site name` is the the name of the site containing the fixlet to be updated

`site type` and `site name` can be inpsected via GET `/api/sites`

# cURL
```
curl -X PUT --data-binary @update.xml --user {username}:{password} https://{server}:{port}/api/actions

```

# python
```python
import requests
with open('update.xml') as xml:
	r = requests.put('https://{server}:{port}/api/fixlets/{site type}/{site name}/{fixlet id}', auth=('{username}', '{password}'), data=xml)
print(r.text)
```

# Input
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Fixlet>
		<Title>Updated Fixlet</Title>
		<Description><![CDATA[&lt;enter a description of the problem and the corrective action here&gt; ]]></Description>
		<Relevance>exists folder "C:\"</Relevance>
		<Category></Category>
		<Source>Internal</Source>
		<SourceID></SourceID>
		<SourceReleaseDate>2016-05-24</SourceReleaseDate>
		<SourceSeverity></SourceSeverity>
		<CVENames></CVENames>
		<SANSID></SANSID>
		<Domain>BESC</Domain>
		<DefaultAction ID="Action1">
			<Description>
				<PreLink>Click </PreLink>
				<Link>here</Link>
				<PostLink> to deploy this action.</PostLink>
			</Description>
			<ActionScript MIMEType="application/x-Fixlet-Windows-Shell">// Updated Action here</ActionScript>
		</DefaultAction>
	</Fixlet>
</BES>
```


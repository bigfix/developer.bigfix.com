---
title: List Analyses
---

List a site's available analyses.

# cURL

```bash
curl --user {username}:{password} https://{server}:{port}/api/analyses/{site}
```

# python

```python
import requests
r = requests.get('https://{server}:{port}/api/analyses/{site}', auth=('{username}', '{password}'))
print(r.text)
```

# Output

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BES.xsd">
	<Analysis Resource="https://{server}:{port}/api/analysis/{site}/1" LastModified="Wed, 25 May 2016 20:59:59 +0000">
    <Name>Custom Analysis I</Name>
    <ID>1</ID>
  </Analysis>
	<Analysis Resource="https://{server}:{port}/api/analysis/{site}/2" LastModified="Wed, 25 May 2016 21:00:00 +0000">
    <Name>Custom Analysis II</Name>
    <ID>2</ID>
  </Analysis>
</BES>
```


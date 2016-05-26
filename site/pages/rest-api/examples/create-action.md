---
title: Create Action
---

Create and execute an action contained in `action.xml`.

# cURL
```
curl -X POST --data-binary @action.xml --user {username}:{password} https://{server}:{port}/api/actions
```

# python
```python
import requests
with open('action.xml', 'rb') as xml:
	r = requests.post('https://{server}:{port}/api/actions', auth=('{username}', '{password}'), data=xml)
	print(r.text)
```

# Input
## action.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<BES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" SkipUI="true">
    <SingleAction>
        <Title>test action</Title>
        <Relevance>true</Relevance>
        <ActionScript>setting "test action"="{now as string}" on "{now}" for client</ActionScript>
        <SuccessCriteria />
        <Settings />
        <SettingsLocks />
        <Target>
            <AllComputers>true</AllComputers>
        </Target>
    </SingleAction>
</BES>
```



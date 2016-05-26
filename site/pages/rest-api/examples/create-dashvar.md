---
title: Create Dashboard Variable
---

Creates a new dashboard variable with the contents of `dashvar.xml`. Adds the variable to the specified dashboard ID if the ID already exists, otherwise creates a dashboard ID with the specified dashboard variable.

* `dashboard ID` is the ID of the dashboard to which this variable belongs.
* `variable name` is the name of the variable to be created.

# cURL
```
curl -X POST --data-binary @dashvar.xml --user {username}:{password} https://{server}:{port}/api/dashboardvariables/{dashboard ID}
```

# python
```python
import requests
with open('site.xml', 'rb') as xml:
    r = requests.post('https://{server}:{port}/api/dashboardvariables/{dashboard ID}', auth=('{username}', '{password}'), data=xml)
    print(r.text)
```

# Input
## dashvar.xml
```xml
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
        <DashboardData Resource="https://localhost:52311/api/dashboardvariable/ShowNonRelevantContent/Show">
                <Dashboard>ShowNonRelevantContent</Dashboard>
                <Name>Show</Name>
                <IsPrivate>false</IsPrivate>
                <User>__op_1</User>
                <Value>true</Value>
        </DashboardData>
</BESAPI>
```



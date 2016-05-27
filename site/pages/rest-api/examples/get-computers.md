---
title: Get Computers
---

Retrieves the list of computers registered in the console.

# cURL

```
curl -X GET --user {username}:{password} https://{server}:{port}/api/computers
```

# python

```python
import requests
r = requests.get('https://{server}:{port}/api/computers)
print(r.text)
```

# Output

```xml
<?xml version="1.0" encoding="UTF-8"?>
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
    <Computer Resource="https://{server}:{port}/api/computer/11112538">
        <LastReportTime>Wed, 25 May 2016 22:28:03 +0000</LastReportTime>
        <ID>11112538</ID>
    </Computer>
    <Computer Resource="https://{server}:{port}/api/computer/11112539">
        <LastReportTime>Wed, 25 May 2016 22:28:03 +0000</LastReportTime>
        <ID>11112539</ID>
    </Computer>
    <Computer Resource="https://{server}:{port}/api/computer/11112540">
        <LastReportTime>Wed, 25 May 2016 22:28:03 +0000</LastReportTime>
        <ID>11112540</ID>
    </Computer>
</BESAPI>
```


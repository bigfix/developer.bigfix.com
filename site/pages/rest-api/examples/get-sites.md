---
title: Get Sites
---

Gets the current list of sites on the server.

# cURL
```
curl -X GET --user {username}:{password} https://{server}:{port}/api/sites
```

# python
```python
import requests
r = requests.get('https://{server}:{port}/api/sites)
print(r.text)
```
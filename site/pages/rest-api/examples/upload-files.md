---
title: Upload Files
---

Upload one or more files.


To upload a single file:

# cURL
```
curl -X POST -F file=@file.xml --user {username}:{password} https://{server}:{port}/api/upload
```

# python
```python
import requests
with open('file.xml', 'rb') as xml:
    r = requests.post('https://{server}:{port}/api/upload', auth=('{username}', '{password}'), file=xml)
    print(r.text)
```


You can also upload multiple files:

# cURL
```
curl -X POST -F file=@file1.xml -F file=@file2.xml --user {username}:{password} https://{server}:{port}/api/upload
```

# python
```python
import requests
filelist = [('file', open('file1.xml', 'rb')), ('file', open('file2.xml', 'rb'))]
r = requests.post('https://{server}:{port}/api/upload', auth=('{username}', '{password}'), files=filelist)
print(r.text)
```
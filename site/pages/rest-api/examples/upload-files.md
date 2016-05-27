---
title: Upload Files
---

Upload one or more files to the server.

#  cURL
#### Single File
```
curl -X POST -F file=@file.xml --user {username}:{password} https://{server}:{port}/api/upload
```
#### Multiple Files
```
curl -X POST -F file=@file1.xml -F file=@file2.xml --user {username}:{password} https://{server}:{port}/api/upload
```

# python
#### Single File
```python
import requests
with open('file.xml', 'rb') as xml:
    r = requests.post('https://{server}:{port}/api/upload', auth=('{username}', '{password}'), file=xml)
    print(r.text)
```
#### Multiple Files
```python
import requests
filelist = [('file', open('file1.xml', 'rb')), ('file', open('file2.xml', 'rb'))]
r = requests.post('https://{server}:{port}/api/upload', auth=('{username}', '{password}'), files=filelist)
print(r.text)
```

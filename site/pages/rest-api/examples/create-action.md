---
title: Create Action
---

This command will POST the file `actions.xml` to the server to create and execute the new action contained in `action.xml`.

# cURL
```
curl -X POST --data-binary @action.xml --user username:password https://server:port/api/actions
```

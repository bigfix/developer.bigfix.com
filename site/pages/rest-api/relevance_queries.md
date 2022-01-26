---
title: Relevance queries output
---

Output in XML format

The output of a relevance query using REST API is the XML output. This is the default output you get.

Output in JSON format

The output of a relevance query using REST API can also have a JSON format.

To obtain a JSON format output, you must add the 'output=value' key/value pair as described in the examples below.

Using a browser:

```
https://localhost:52311/api/query?relevance=number%20of%20bes%20computers&output=json
{"result":[12],"plural":false,"type":"integer","evaltime_ms":0}
```

Using the IEM CLI:

```iem get query --relevance="number of bes computers" --output=json
{"result":[20],"plural":false,"type":"integer","evaltime_ms":0}
```

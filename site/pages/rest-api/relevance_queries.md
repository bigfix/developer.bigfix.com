---
title: Relevance queries output
---

Output in XML format

XML is default output format of relevance queries to the REST API.

Output in JSON format

JSON is a popular alternative output format of relevance queries to the REST API.

To obtain a JSON output, you must pass the 'output=json' key/value pair in your query, as shown in the following examples.

Example

Relevance query performed with a browser

```
https://localhost:52311/api/query?relevance=number%20of%20bes%20computers&output=json
```

JSON output

```
{"result":[12],"plural":false,"type":"integer","evaltime_ms":0}
```

Example

Relevance query performed with the IEM CLI

```
iem get query --relevance="number of bes computers" --output=json
```

JSON output

```
{"result":[20],"plural":false,"type":"integer","evaltime_ms":0}
```
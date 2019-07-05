---
title: The Schema Files
---

During the installation of the BigFix server component, the [BESAPI.xsd](/rest-api/besapi_xsd.html) and 
[BES.xsd](/rest-api/bes_xsd.html) schema files are stored in the installation path. 
They contain the information needed to correctly represent the BigFix object instances in XML format.
To learn how to download an XSD file, click its name.  

These files are automatically updated, during the product upgrade, whenever fields are added or modified.

To ensure consistency, use the version of the schema files available on your BigFix server under the path:

- On Windows systems: `C:\Program Files (x86)\BigFix Enterprise\BigFix server\Reference`
- On RedHat Linux Enterprise version 5.0 or later: `/opt/BESServer/reference`

The schema files are also available via HTTP/HTTPS from the BigFix Root Server to facilitate automated XML validation:

```
https://<bigfix_server>:<port>/xmlschema/BES.xsd
https://<bigfix_server>:<port>/xmlschema/BESAPI.xsd
```

(where port is 52311 by default)

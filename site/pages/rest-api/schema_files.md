---
title: The Schema Files
---

During the installation of the BigFix server component, the [BESAPI.xsd](/rest-api/besapi_xsd.html) and 
[BES.xsd](/rest-api/bes_xsd.html) schema files are stored in the installation path. 
They contain the information needed to correctly represent the BigFix object instances in XML format.
If you click the names of the XSD files, the copy of the file available with IBM BigFix V9.5.3 is displayed. 

These files are automatically updated, during the product upgrade, whenever fields are added or modified.

To ensure consistency, use the version of the schema files available on your BigFix server under the path:


* *C:\Program Files (x86)\BigFix Enterprise\BigFix server\Reference* for Windows systems (by default)

* */opt/BESServer/reference* for Linux Red Hat Enterprise V.5.0 or later systems

Note that the XSD schema files are also available via HTTP/HTTPS from the BigFix Root Server to facilitate automated XML validation:

* https://root server:port/xmlschema/BES.xsd
* https://root server:port/xmlschema/BESAPI.xsd

(where port is 52311 by default)

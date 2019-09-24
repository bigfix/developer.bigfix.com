---
title: BES.xsd schema file
---
The BES.xsd schema file is avaliable for download (under the "Utilities" section) at [BigFix Enterprise Suite Download Center](http://support.bigfix.com/bes/release/) on the corresponding release pages. 
For releases older than 9.5.13, use the file avaliable (under the "Utilities" section) at the [Patch 13 release page](http://support.bigfix.com/bes/release/9.5/patch13).

**Important:** To ensure consistency, use the version of the schema files available on your BigFix server under the path:
- On Windows systems: `C:\Program Files (x86)\BigFix Enterprise\BigFix server\Reference`
- On RedHat Linux Enterprise version 5.0 or later: `/opt/BESServer/reference`

The file is also available via HTTP/HTTPS from the BigFix Root Server:

```
https://<bigfix_server>:<port>/xmlschema/BES.xsd
```

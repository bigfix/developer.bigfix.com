---
title: BES_SITEVERSIONS
---

The BES_SITEVERSIONS view lists all the Fixlet sites that are currently subscribed, and the current version of those sites that have been gathered and imported into the database. Sites that have been unsubscribed are not included in the table, even though their contents might not yet have been removed from the object definition tables.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| Sitename      | varchar(128) | The name of the Fixlet site. |
| Version | int | The version of the Fixlet site contents that is currently in the database. If the version is 0, then the site has been subscribed, but the contents of the site have not yet been imported into the database |

Example:
```sql
select * from BES_SITEVERSIONS where Version = 0
```


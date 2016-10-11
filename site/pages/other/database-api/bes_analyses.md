---
title: BES_ANALYSES
---

This view provides a list of all Analyses (including custom Analyses) in the BigFix 
Database.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| Sitename      | varchar(128) | Source Fixlet site name |
| ID      | int | Unique analysis ID |
| Name      | varchar(255) | Analysis name |

Example:
```
select Sitename, ID, Name from BES_ANALYSES where Sitename = 'BES Support'
order by Sitename, ID
```


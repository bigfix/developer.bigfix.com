---
title: BES_RELEVANT_FIXLETS
---

This view contains an entry for every Fixlet/computer pair in which the Fixlet is
relevant on that computer. This view includes custom Fixlet content.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| Sitename      | varchar(128) | Fixlet site name |
| ID      | int | Fixlet ID |
| ComputerID      | int | Computer ID |
| Version | int | Number of times the Fixlet is modified |

Example:
```
select F.Sitename, F.ID, F.Name, R.ComputerID from BES_FIXLETS F, BES_RELEVANT_FIXLETS R
where F.Sitename = R.Sitename AND F.ID = R.ID
```


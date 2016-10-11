---
title: BES_FIXLETS
---

This view provides a list of all Fixlets in the BigFix Database. This table is useful in
conjunction with the BES_RELEVANT_FIXLETS and BES_ACTIONS table to get
the Fixlet name. Custom Fixlet content is provided under the “ActionSite”
sitename.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| Sitename      | varchar(128) | Fixlet site name |
| ID      | int | Unique Fixlet ID |
| Name      | varchar(255) | Fixlet name |

Example:
```sql
select Sitename, ID, Name from BES_FIXLETS where Sitename = 'Enterprise Security'
order by Sitename, ID
```


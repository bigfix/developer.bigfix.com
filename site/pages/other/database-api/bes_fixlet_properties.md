---
title: BES_FIXLET_PROPERTIES
---

This view lists the different properties associated with each Fixlet (including
custom Fixlets), such as the severity.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| Sitename      | varchar(128) | Fixlet site name |
| ID      | int | Unique Fixlet ID |
| PropertyName      | varchar(32) | Property name |
| PropertyValue | text | Property Value |

Example:
```
select BF.Sitename, BF.ID, BF.Name, BFP.PropertyValue AS ’Severity’
from BES_FIXLETS BF, BES_FIXLET_PROPERTIES BFP
where BF.Sitename = BFP.Sitename
and BF.ID = BFP.ID AND BFP.PropertyName = ’Source Severity’
```


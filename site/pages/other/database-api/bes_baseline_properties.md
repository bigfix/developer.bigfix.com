---
title: BES_BASELINE_PROPERTIES
---

This view lists the different properties associated with each baseline, such as the severity.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| Sitename      | varchar(128) | Source Fixlet site name |
| ID      | int | Baseline ID |
| PropertyName      | varchar(32) | Property name |
| PropertyValue | text | Property Value |

Example:
```sql
select BB.Sitename, BB.ID, BB.Name, BBP.PropertyValue AS 'Severity'
from BES_BASELINES BB, BES_BASELINE_PROPERTIES BBP
where BB.Sitename = BBP.Sitename AND BB.ID = BBP.ID
and BBP.PropertyName = 'Source Severity'
```


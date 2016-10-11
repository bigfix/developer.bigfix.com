---
title: BES_TASK_PROPERTIES
---

This view lists the different properties associated with each task (including
custom tasks), such as the severity.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| Sitename      | varchar(128) | Source Fixlet site name |
| ID      | int | Task ID |
| PropertyName      | varchar(32) | Property name |
| PropertyValue | text | Property Value |

Example:
```
select BT.Sitename, BT.ID, BT.Name, BTP.PropertyValue AS ’Severity’
from BES_TASKS BT, BES_TASK_PROPERTIES BTP
where BT.Sitename = BTP.Sitename AND BT.ID = BTP.ID
and BTP.PropertyName = ’Source Severity’
```


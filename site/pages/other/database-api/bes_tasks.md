---
title: BES_TASKS
---

This view provides a list of all tasks (including custom tasks) in the BigFix Database.
This table is useful in conjunction with the BES_RELEVANT_TASKS and
BES_ACTIONS table to get the task name.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| Sitename      | varchar(128) | Source Fixlet site name |
| ID      | int | Unique Task ID |
| Name      | varchar(255) | Task name |

Example:
```sql
select Sitename, ID, Name from BES_TASKS where Sitename = 'Enterprise Security'
order by Sitename, ID
```


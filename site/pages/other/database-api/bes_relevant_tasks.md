---
title: BES_RELEVANT_TASKS
---

This view contains an entry for every task/computer pair (including custom Tasks)
in which the task is relevant on that computer.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| Sitename      | varchar(128) | Fixlet site name |
| ID      | int | Task ID |
| ComputerID      | int | Computer ID |
| Version | int | Number of times the task is modified |

Example:
```
select T.Sitename, T.ID, T.Name, R.ComputerID from BES_TASKS T, BES_RELEVANT_TASKS R
where T.Sitename = R.Sitename AND T.ID = R.ID
```


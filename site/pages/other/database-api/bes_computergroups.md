---
title: BES_COMPUTERGROUPS
---

This view provides a list of all Computer Groups in the BigFix Database.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| ID      | int | Unique Fixlet ID |
| Name      | varchar(255) | Computer group name |

Example:
```sql
select ID, Name from BES_ComputerGroups where Name LIKE 'Chicago Office%' order by ID
```


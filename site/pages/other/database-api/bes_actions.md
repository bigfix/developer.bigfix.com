---
title: BES_ACTIONS
---

This view contains an entry for every action/computer pair where the action was
received by the computer.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| ActionID      | int | Action ID |
| ComputerID      | int | Computer ID |
| Name      | varchar(255) | Title of the action |
| Username | varchar(32) | Database user name of action issuer |
| StartTime | datetime | Time at which the action was issued |
| FixletID | int | Source Fixlet ID |
| Sitename | varchar(128) | Source Fixlet site name |
| ActionStatus | text | A brief summary of the state of the action for this computer |

Example:
```
select * from BES_ACTIONS where ActionStatus = 'Executed'
```


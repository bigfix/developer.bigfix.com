---
title: BES_RELEVANT_BASELINES
---

This view contains an entry for every baseline/computer pair in which the baseline
is relevant on that computer.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| Sitename      | varchar(128) | Fixlet site name |
| ID      | int | Baseline ID |
| ComputerID      | int | Computer ID |
| Version | int | Number of times the baseline is modified |

Example:
```
select B.Sitename, B.ID, B.Name, R.ComputerID from BES_BASELINES B, BES_RELEVANT_BASELINES R
where B.Sitename = R.Sitename AND B.ID = R.ID
```


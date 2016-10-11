---
title: BES_BASELINES
---

This view provides a list of all Baselines in the BigFix Database. This table is useful
in conjunction with the BES_RELEVANT_BASELINES and BES_ACTIONS table to
get the baseline name.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- | 
| Sitename      | varchar(128) | Source Fixlet site name |
| ID      | int | Unique baseline ID |
| Name      | varchar(255) | Baseline name |

Example:
```
select Sitename, ID, Name from BES_BASELINES where Sitename = 'Enterprise Security'
order by Sitename, ID
```


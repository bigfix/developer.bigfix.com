---
title: BES_RELEVANT_TASK_HISTORY
---

This view contains an entry for every task/computer pair (including custom tasks)
that has ever been relevant, with timestamps indicating the first time it became
relevant, the last time it became relevant (the same as FirstBecameRelevant if it
became relevant only once), and the last time it became non-relevant. Some of
these fields might be NULL if the event in question never occurred.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| Sitename | varchar(128) | Source Fixlet site name |
| ID      | int | Task ID |
| ComputerID      | int | Computer ID |
| FirstBecameRelevant      | datetime | Time when the task first became relevant |
| LastBecameRelevant      | datetime | Time when the task last became relevant |
| LastBecameNotRelevant      | datetime | Time when the task last became not relevant |
| Version | int | Task version |




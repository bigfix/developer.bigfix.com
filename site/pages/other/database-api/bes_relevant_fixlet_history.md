---
title: BES_RELEVANT_FIXLET_HISTORY
---

This view contains an entry for every Fixlet/computer pair that has ever been
relevant, with timestamps indicating the first time it became relevant, the last time
it became relevant (the same as FirstBecameRelevant if it became relevant only
once), and the last time it became non-relevant. Some of these fields might be
NULL if the event in question never occurred. This view includes custom Fixlet
content.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| Sitename | varchar(128) | Fixlet site name |
| ID      | int | Fixlet ID |
| ComputerID      | int | Computer ID |
| FirstBecameRelevant      | datetime | Time when the Fixlet first became relevant |
| LastBecameRelevant      | datetime | Time when the Fixlet last became relevant |
| LastBecameNotRelevant      | datetime | Time when the Fixlet last became not relevant |
| Version | int | Fixlet version |




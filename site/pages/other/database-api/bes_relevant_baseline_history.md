---
title: BES_RELEVANT_BASELINE_HISTORY
---

This view contains an entry for every baseline/computer pair that has ever been
relevant, with timestamps indicating the first time it became relevant, the last time
it became relevant (the same as FirstBecameRelevant if it became relevant only
once), and the last time it became non-relevant. Some of these fields might be
NULL if the event in question never occurred.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| ID      | int | Baseline ID |
| ComputerID      | int | Computer ID |
| FirstBecameRelevant      | datetime | Time when the baseline first became relevant |
| LastBecameRelevant      | datetime | Time when the baseline last became relevant |
| LastBecameNotRelevant      | datetime | Time when the baseline last became not relevant |
| Version | int | Baseline version |




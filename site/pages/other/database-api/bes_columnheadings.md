---
title: BES_COLUMN_HEADINGS
---

This view provides access to all the retrieved property information collected about
client computers by the BigFix Database. Retrieved properties that return multiple
results are expressed in this view by a value field that contains the multiple results
separated by a newline character. Column headings whose “Value” contains more
than 8000 characters are truncated to 8000 characters in this view.

| Column        | Type           |  Description  |
| ------------- | ------------- | ----- |
| ComputerID | int | Computer ID |
| Name      | varchar(255) | Retrieved property name |
| Value | varchar(8000) | Newline separated list of retrieved property values |
| IsFailure | Tinyint | Nonzero if the retrieved property failed to evaluate on the BES Client |

Example:
```sql
select ComputerID, Name, Value, IsFailure from BES_COLUMN_HEADINGS where
Name = 'Total HD Space' order by ComputerID
```


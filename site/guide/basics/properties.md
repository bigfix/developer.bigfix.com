---
title: Properties
---

Properties of objects can be inspected and referenced. There are thousands of
property inspectors available to cover the majority of software and hardware
features of Windows, Mac, and Unix systems.

{{#example}}
Q: day_of_week of current date
A: Tuesday
{{/example}}

Returns a reference to the day of the week from today's system date.

{{#example}}
Q: year of current date
A: 2006
{{/example}}

Returns the year portion of today's date.

{{#example}}
Q: number of processors
A: 2
{{/example}}

Returns the number of processors of the client computer.

{{#example}}
Q: names of local groups
A: Administrators
A: Backup Operators
A: Guests
{{/example}}

Returns plural properties (names) as a list corresponding to the local group
names.

{{#example}}
Q: bit 0 of 5
A: True
{{/example}}

Returns the zero (low order) bit as `True` (1) or `False` (0).
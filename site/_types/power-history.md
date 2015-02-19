---
permalink: reference/power-history.html
name: power history
---

The <power history> inspectors retrieve information about your client computers and their displays within a tracking window (defaulting to 14 days). The information is in the form of a list of <interval, state> tuples for the system (computer) and <interval, state, monitor count> for monitors (attached displays). The first element of the list is the current state of the system. These inspectors allow you to track computer usage for power management applications. The event lists are fetched from the client whenever 'power history' is referenced, and referencing 'system intervals of <power history>' simply iterates over the built list of intervals. Avoid referencing 'power history' multiple times in relevance as it rebuilds the list each time (increasing overhead) and may introduce inconsistency if the window slides between references.
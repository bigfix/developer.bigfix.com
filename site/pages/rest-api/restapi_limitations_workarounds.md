---
title: Known limitations and workarounds
---

This section describes the known limitations and possible workarounds for the REST APIs.

{% section %}
Running REST API query involving plus symbols `+`

**Known limitation**: Relevance expressions containing plus symbols (`+`) are not evaluated correctly when passed as part of a REST API call. The limitation impacts both Web Reports and BigFix Explorer when they are used to resolve relevance queries via REST API.

For example, the following relevance expression cannot match Fixlets having `Notepad++` in their name.
```
names of fixlets whose ( name of it contains "Notepad++" ) of bes sites
```

**Workaround**: Change the plus symbol `+` with the corresponding percent encoded string `%2B`.

To make the relevance expression of the previous example work as intended, replace all its `+` characters with `%2B`.
```
names of fixlets whose ( name of it contains "Notepad%2B%2B" ) of bes sites
```
{% endsection %}

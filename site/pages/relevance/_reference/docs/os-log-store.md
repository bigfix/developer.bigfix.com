# type: os log store

The `OS Log Store` inspector allows access to macOS local unified logging system using the modern [OSLogStore](https://developer.apple.com/documentation/oslog?language=objc) APIs. It retrieves structured, system-wide and application-specific log data, offering granular visibility into system events. This inspector supports filtered searches on log data using parameters such as 

This inspector only supports macOS and requires access to the local log store. Access to remote or archived log stores is not supported.

It enables users to query logs within a defined time frame, either since the last system boot or since a specific number of days before the current time, using a flexible string-based filter syntax.

# search since boot &lt;string&gt; of &lt;os log store&gt; : os log entry log

Returns log entries from the macOS local OS log store, generated since the last system boot and filtered using the provided string.

The search string must be formatted as follows:
`"processName;sensitivity;entry"`

Where:

* "processName" is the name of the process to filter by.
* "sensitivity" can be "s" (case-sensitive and diacritics-sensitive), "c" (case-insensitive), "d" (diacritics-insensitive), or "cd" (case-insensitive and diacritics-insensitive).
* "entry" is part of the message to search within.

If more than 1000 matching entries are found, only the most recent 1000 will be returned.

{% qna %}
Q: exists search since boot "loginwindow;c;login state: " of local os log store
A: True
{% endqna %}

{% qna %}
Q: number of searches since boot "loginwindow;c;login state: " of local os log store
A: 17
{% endqna %}

# search since days &lt;string&gt; of &lt;os log store&gt; : os log entry log

Returns log entries from the local OS log store, generated during the specified number of days before the current time and filtered using the provided string.

The search string must be formatted as follows:
`"numberOfDays;processName;sensitivity;entry"`

Where:

* "numberOfDays" is the number of past days to consider. Only entries from the last 99 days can be retrieved.
* "processName" is the name of the process to filter by.
* "sensitivity" can be "s" (case-sensitive and diacritics-sensitive), "c" (case-insensitive), "d" (diacritics-insensitive), or "cd" (case-insensitive and diacritics-insensitive).
* "entry" is part of the message to search within.

If more than 1000 matching entries are found, only the most recent 1000 will be returned.

{% qna %}
Q: exists search since days "1;loginwindow;c;login state: " of local os log store
A: False
{% endqna %}

{% qna %}
Q: number of searches since days "40;loginwindow;c;login state: " of local os log store
A: 17
{% endqna %}

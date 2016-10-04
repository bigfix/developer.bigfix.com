---
title: Event Log
---

The `event log` Inspectors return information about the specified Windows Event logs.

You can query the System event log that records OS or component events, such as the failure of a bootup service.


You can query the Application event log. For example:

{% qna %}
Q:  description of record (oldest record number of it) of application event log
{% endqna %}

returns the description of the oldest record in the application event log.


You can query the event log of an application, for example:

{% qna %}
Q:  exists event log "Application"
{% endqna %}

returns TRUE if that application log exists.


You can query the security event log, which records global or local group policy events.

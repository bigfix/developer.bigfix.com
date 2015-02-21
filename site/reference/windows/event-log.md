---
title: event-log
---

{% type event log record%}

The &lt;event log record&gt; inspectors return individual records from the Windows Event logs, which record information about operating system events.

#### Properties

{% property user sid of <event log record> %}

Returns the user security ID for the specified record in the event log.

{% property time written of <event log record> %}

Returns the time that the specified event record was written to the log.

{% property time generated of <event log record> %}

Returns the time that the specified event log record was generated.

{% property source of <event log record> %}

Returns the source name (from the application, service, or component that logged the event) of the specified event log record.

{% property record number of <event log record> %}

Returns the integer value of the record number corresponding to the specified event log record.

{% property length of <event log record> %}

Returns the length of the specified record. This is not the same as the length of the description.

{% property event type of <event log record> %}

Returns the type of the specified event log record, such as error, warning, information, and others.

{% property event id of <event log record> %}

Returns an integer corresponding to the ID of the specified record in the Client computer&#39;s event log.

{% property description of <event log record> %}

Returns a human-readable description of the specified event log record.

{% property computer of <event log record> %}

Returns the name of the computer that has entered a record in the specified log.

{% property category of <event log record> %}

Returns the category of the specified event log, which is sometimes used to further describe the related action.

{% type event log event type%}

The &lt;event log event type&gt; inspectors return information about the types of Windows Event log entries, which record various operating system events including errors, warnings and general information.

{% type event log%}

The &lt;event log&gt; inspectors return information about the specified Windows Event logs, including the System, Security and the Application log.

#### Properties

{% property record of <event log> %}

Returns the record corresponding to the specified event log, for instance the application or system event log.

{% property record count of <event log> %}

Returns the record count for the specified event log.

{% property record <integer> of <event log> %}

Returns the nth record corresponding to the specified event log.

{% property oldest record number of <event log> %}

Returns an integer corresponding to the oldest record number on the Client computer&#39;s event log.


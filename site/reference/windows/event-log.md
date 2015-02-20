---
title: event-log
---

## event log record

The &lt;event log record&gt; inspectors return individual records from the Windows Event logs, which record information about operating system events.

#### user sid of &lt;event log record&gt; : security identifier

Returns the user security ID for the specified record in the event log.

#### time written of &lt;event log record&gt; : time

Returns the time that the specified event record was written to the log.

#### time generated of &lt;event log record&gt; : time

Returns the time that the specified event log record was generated.

#### source of &lt;event log record&gt; : string

Returns the source name (from the application, service, or component that logged the event) of the specified event log record.

#### record number of &lt;event log record&gt; : integer

Returns the integer value of the record number corresponding to the specified event log record.

#### length of &lt;event log record&gt; : integer

Returns the length of the specified record. This is not the same as the length of the description.

#### event type of &lt;event log record&gt; : event log event type

Returns the type of the specified event log record, such as error, warning, information, and others.

#### event id of &lt;event log record&gt; : integer

Returns an integer corresponding to the ID of the specified record in the Client computer&#39;s event log.

#### description of &lt;event log record&gt; : string

Returns a human-readable description of the specified event log record.

#### computer of &lt;event log record&gt; : string

Returns the name of the computer that has entered a record in the specified log.

#### category of &lt;event log record&gt; : integer

Returns the category of the specified event log, which is sometimes used to further describe the related action.

## event log event type

The &lt;event log event type&gt; inspectors return information about the types of Windows Event log entries, which record various operating system events including errors, warnings and general information.

## event log

The &lt;event log&gt; inspectors return information about the specified Windows Event logs, including the System, Security and the Application log.

#### record of &lt;event log&gt; : event log record

Returns the record corresponding to the specified event log, for instance the application or system event log.

#### record count of &lt;event log&gt; : integer

Returns the record count for the specified event log.

#### record &lt;integer&gt; of &lt;event log&gt; : event log record

Returns the nth record corresponding to the specified event log.

#### oldest record number of &lt;event log&gt; : integer

Returns an integer corresponding to the oldest record number on the Client computer&#39;s event log.


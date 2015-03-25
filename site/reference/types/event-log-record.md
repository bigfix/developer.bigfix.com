# type: event log record

The &amp;lt;event log record&amp;gt; inspectors return individual records from the Windows Event logs, which record information about operating system events.

# category of &lt;event log record&gt; : integer

Returns the category of the specified event log, which is sometimes used to further describe the related action.

# computer of &lt;event log record&gt; : string

Returns the name of the computer that has entered a record in the specified log.

# description of &lt;event log record&gt; : string

Returns a human-readable description of the specified event log record.

# event id of &lt;event log record&gt; : integer

Returns an integer corresponding to the ID of the specified record in the Client computer&amp;#39;s event log.

# event type of &lt;event log record&gt; : event log event type

Returns the type of the specified event log record, such as error, warning, information, and others.

# length of &lt;event log record&gt; : integer

Returns the length of the specified record. This is not the same as the length of the description.

# record number of &lt;event log record&gt; : integer

Returns the integer value of the record number corresponding to the specified event log record.

# source of &lt;event log record&gt; : string

Returns the source name (from the application, service, or component that logged the event) of the specified event log record.

# time generated of &lt;event log record&gt; : time

Returns the time that the specified event log record was generated.

# time written of &lt;event log record&gt; : time

Returns the time that the specified event record was written to the log.

# user sid of &lt;event log record&gt; : security identifier

Returns the user security ID for the specified record in the event log.

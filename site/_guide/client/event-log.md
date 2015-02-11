---
title: Event Log
---

Show me the events with this ID in the application log:

````
Q: (time generated of it, (if exists description of it then description of it else "NA")) of records whose (event id of it mod 65536 = 1 AND now - time generated of it < 5*day) of application event log  =
A: ( Wed, 12 Nov 2014 06:44:01 -0800 ), The Windows Security Center Service has started.
````

````
Q: number of records whose (event id of it mod 65536 = 7036 AND now - time generated of it < 1*day) of system event log
A: 30075
````

// this one is tricky and is due to a weird windows glitch

To get this working I think you'll need to find an example to work with where the error is available in the event log.

When you have an example, you'll need to mod the event ID by 2^15 or 2^30 most likely, but you'll have to experiment to see what ends up matching the IDs in your event viewer.

Windows ends up [throwing away](http://msdn.microsoft.com/en-us/library/aa363651.aspx) the highbits of stuff.

Which means we end up with event ids different than event viewer typically, as [discussed in the forum](https://www.ibm.com/developerworks/community/forums/html/topic?id=77777777-0000-0000-0000-000014748770).

So basically the event viewer in Windows throws away the "high bits" of the
event, but the event ID inspector doesn't do this. According to the Microsoft
technical documentation, the bits of the "EventID" [looks like this](http://msdn2.microsoft.com/en-us/library/aa363651.aspx).
As far as we can tell, you aren't technically supposed to throw away the high
bits of the event id so we are having a hard time calling this a full bug, but
it seems to me that we should allow you to get the Event Viewer's concept of the
ID that doesn't include the high-bits.

````
Q: exists records whose (event id of it = 7036) of event log "system"  =
A: False
````

````
Q: number of records whose (now - time generated of it < 3*day) of system event log
A: 1090
````

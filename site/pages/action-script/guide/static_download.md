---
title: Static Download
---

Before it runs an action, the BigFix Client parses it, looking for
download or prefetch commands. 

Static downloads include the URL, the SHA hash algorithm, and the size for each item as 
literal values in the action script. 
The literal values allows an operator to observe exactly what the action script is 
going to do.
These literals are used to construct a numbered list of downloads associated with
the action that is then stored on the BigFix Server. 
This stage of action processing is called **prefetch processing**.
To easily create prefetch commands, you can use the utility:
[make-prefetch](https://github.com/bigfix/make-prefetch)



As a consequence of prefetch processing, the Client notifies the nearest Relay the need 
for downloads by requesting a URL ending in &lt;actionid>/0, which in turn triggers the 
Relay to download all the items corresponding to that specified action. 
When they are ready, the Relay pings the clients back with the action ID. All the BigFix 
Clients running that action will then collect the files by asking for them one at a time as
&lt;actionid>/1, &lt;actionid>/2, etc.

However, because the download information is represented by literal expressions,
only those URLs already known when the action is authored can be represented.
This means that static downloads cannot be used for those instances where the
downloads change, but the action script remains the same.


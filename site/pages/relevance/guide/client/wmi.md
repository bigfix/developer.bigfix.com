---
title: WMI
---

It’s easy and fast to find the names of the drives connected to the local computer:

{% qna %}
Q: names of drives
A: A:
A: C:
A: D:
A: E:
A: F:
A: G:
{% endqna %}

But how do you find out about mapped drives?

{% qna %}
Q: (selects ("ProviderName from win32_LogicalDisk")of WMI)
A: ProviderName
A: ProviderName
A: ProviderName
A: ProviderName
A: ProviderName
A: ProviderName=\\Plato\shared docs
{% endqna %}

Using a WMI Inspector like the one above shows that the last drive is mapped to a shared docs folder. You can correlate the drive names to the shared names as well:

{% qna %}
Q: (if property "ProviderName" of it as string contains "=" then (substring after "=" of (property "Name" of it as string) &" -- " & substring after "=" of (property "ProviderName" of it as string)) else nothing) of select objects ("Name,ProviderName from win32_LogicalDisk")of WMI
A: G: -- \\Plato\shared docs
{% endqna %}

This expression finds all the mapped drives, and returns their names and their mapping.

**Note:** If you run the WMI query on a system with a local user, ZERO RESULTS is returned. This might be because either there are no results or because there is a lack of user context.



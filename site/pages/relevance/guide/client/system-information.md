---
title: System Information
---

The system information inspectors are particularly useful for identifying attributes of the running operating system. 

## Hardware

There are a large number of properties of the underlying hardware that we can query.

We'll start with processor information:

{% qna %}
Q: vendor names of processors
A: GenuineIntel
A: GenuineIntel
A: GenuineIntel
A: GenuineIntel
{% endqna %}

You'll notice quickly that this will return a bunch of identical entries even on single processor systems. That is because each CPU core is referenced as its own processor. 

You can collapse these identical results into a single one using the `unique values` inspector, like this:

{% qna %}
Q: unique values of vendor names of processors
A: GenuineIntel
{% endqna %}

Continuing, we can reference the speed of the processors:

{% qna %}
Q: speeds of processors
A: 2600000000 hertz
A: 2600000000 hertz
A: 2600000000 hertz
A: 2600000000 hertz
{% endqna %}

And the name:

{% qna %}
Q: family names of processors
A: Core i7-3720QM
A: Core i7-3720QM
A: Core i7-3720QM
A: Core i7-3720QM
{% endqna %}

## Operating System

We can easily pull the name of the operating system:

{% qna %}
Q: name of operating system
A: Mac OS X
{% endqna %}

{% qna %}
Q: name of operating system
A: Win2008R2
{% endqna %}

Or the version:

{% qna %}
Q: (name of it, version of it) of operating system
A: Mac OS X, 10.9.5
{% endqna %}

{% qna %}
Q: (name of it, version of it) of operating system
A: Win2008R2, 6.1.7601
{% endqna %}

We can also pull the architecture:

{% qna %}
Q: (name of it, architecture of it) of operating system
A: Mac OS X, x86_64
{% endqna %}

{% qna %}
Q: (name of it, architecture of it) of operating system
A: Win2008R2, 6.1.7601
{% endqna %}

There are simple ways to determine the OS of an endpoint without having to do string comparisons:

{% qna %}
Q: windows of operating system
A: False
{% endqna %}

{% qna %}
Q: unix of operating system
A: False
{% endqna %}

{% qna %}
Q: mac of operating system
A: True
{% endqna %}

Under Windows we can also query the service pack version:

{% qna %}
Q: service pack major version of operating system
A: 1
{% endqna %}

Finally we can query uptime

{% qna %}
Q: uptime of operating system
A: 28 days, 20:20:22.496818
{% endqna %}

## Drives

We can also query information related to mounted disk drives.

On a Mac:

{% qna %}
Q: free space of volume "Macintosh HD"
A: 402534928384
{% endqna %}

On Windows:

{% qna %}
Q: (free spaces of it, names of it) of drives
A: 53851201536, C:
{% endqna %}

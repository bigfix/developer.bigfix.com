---
title: services
---

{% type service%}

The &lt;service&gt; inspectors provide access to all services configured on Windows NT, 2K and XP systems. On a non-Windows system, expressions using these objects will fail gracefully instead of generating an error.

{% property <service> as string %}

Returns a string containing the Service name, Display name, and State of the service.

{% property version of <service> %}

This inspector takes the specified service property and retrieves its version (file version).

{% property state of <service> %}

Returns one of Continuing, Pausing, Paused, Running, Starting, Stopping, Stopped, Unknown.

{% property win32 exit code of <service> %}

Service specific Win32 exit code.

{% property start type of <service> %}

Returns a string that represents the service startup configuration. It describes when the driver is loaded, which can be one of:boot: started by OS loader (usually these are needed to launch the OS).system: started during OS initialization (used by PnP drivers that do device detection after the loader is finished).auto: started by the Service Control Manager (SCM).demand: started on demand, either by PnP manager when a device is enumerated or by the SCM in response to user demand.disabled: can&#39;t be started (used to temporarily disable driver services).

{% property service specific exit code of <service> %}

Service specific exit code.

{% property service name of <service> %}

Returns the name of the service.

{% property security descriptor of <service> %}

This Windows-specific inspector returns a security descriptor for the specified service.

{% property login account of <service> %}

Returns the login account under which the service is configured to run.

{% property image path of <service> %}

Returns the full path to the service executable.

{% property file of <service> %}

Returns a file object corresponding to the specified &lt;service&gt;.

{% property display name of <service> %}

Returns the display name of the service.

{% property checkpoint of <service> %}

Service specific value indicating its checkpoint state.

{% property can interact with desktop of <service> %}

Indicates the system is configured to allow the service to interact with the desktop.

{% property win32 type of <service> %}

Returns true if the specified service is a Win32 type.

{% property driver type of <service> %}

Returns true if the specified service is a driver type.

{% property running of <service> %}

No documentation exists for this property.

{% property pid of <service> %}

No documentation exists for this property.

{% property runlevel of <service> %}

No documentation exists for this property.

{% type runlevel%}

The &lt;runlevel&gt; inspectors refer to a mode of operation in various Unix systems. Typically, when a computer enters runlevel zero, it halts and when it enters runlevel six, it reboots. The intermediate runlevels differ widely among operating systems.

{% property <runlevel> as string %}

Casts a runlevel object as a string.

{% property value of <runlevel> %}

Returns the current runlevel. It evaluates to a platform-dependent string indicating the current runlevel. For instance, on Linux the value &#39;3&#39; indicates runlevel 3 and &#39;S&#39; indicates single user mode.

{% property previous value of <runlevel> %}

Returns the previous value of the runlevel. In the case where the runlevel has not changed since the system booted, this property evaluates to the empty string.

{% property effective time of <runlevel> %}

Returns the time at which the runlevel was set to its current value.


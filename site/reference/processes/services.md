---
title: services
---

## service

The &lt;service&gt; inspectors provide access to all services configured on Windows NT, 2K and XP systems. On a non-Windows system, expressions using these objects will fail gracefully instead of generating an error.

#### &lt;service&gt; as string : string

Returns a string containing the Service name, Display name, and State of the service.

#### version of &lt;service&gt; : version

This inspector takes the specified service property and retrieves its version (file version).

#### state of &lt;service&gt; : string

Returns one of Continuing, Pausing, Paused, Running, Starting, Stopping, Stopped, Unknown.

#### win32 exit code of &lt;service&gt; : integer

Service specific Win32 exit code.

#### start type of &lt;service&gt; : string

Returns a string that represents the service startup configuration. It describes when the driver is loaded, which can be one of:boot: started by OS loader (usually these are needed to launch the OS).system: started during OS initialization (used by PnP drivers that do device detection after the loader is finished).auto: started by the Service Control Manager (SCM).demand: started on demand, either by PnP manager when a device is enumerated or by the SCM in response to user demand.disabled: can&#39;t be started (used to temporarily disable driver services).

#### service specific exit code of &lt;service&gt; : integer

Service specific exit code.

#### service name of &lt;service&gt; : string

Returns the name of the service.

#### security descriptor of &lt;service&gt; : security descriptor

This Windows-specific inspector returns a security descriptor for the specified service.

#### login account of &lt;service&gt; : string

Returns the login account under which the service is configured to run.

#### image path of &lt;service&gt; : string

Returns the full path to the service executable.

#### file of &lt;service&gt; : file

Returns a file object corresponding to the specified &lt;service&gt;.

#### display name of &lt;service&gt; : string

Returns the display name of the service.

#### checkpoint of &lt;service&gt; : integer

Service specific value indicating its checkpoint state.

#### can interact with desktop of &lt;service&gt; : boolean

Indicates the system is configured to allow the service to interact with the desktop.

#### win32 type of &lt;service&gt; : boolean

Returns true if the specified service is a Win32 type.

#### driver type of &lt;service&gt; : boolean

Returns true if the specified service is a driver type.

#### running of &lt;service&gt; : boolean

No documentation exists for this property.

#### pid of &lt;service&gt; : integer

No documentation exists for this property.

#### runlevel of &lt;service&gt; : string

No documentation exists for this property.

## runlevel

The &lt;runlevel&gt; inspectors refer to a mode of operation in various Unix systems. Typically, when a computer enters runlevel zero, it halts and when it enters runlevel six, it reboots. The intermediate runlevels differ widely among operating systems.

#### &lt;runlevel&gt; as string : string

Casts a runlevel object as a string.

#### value of &lt;runlevel&gt; : string

Returns the current runlevel. It evaluates to a platform-dependent string indicating the current runlevel. For instance, on Linux the value &#39;3&#39; indicates runlevel 3 and &#39;S&#39; indicates single user mode.

#### previous value of &lt;runlevel&gt; : string

Returns the previous value of the runlevel. In the case where the runlevel has not changed since the system booted, this property evaluates to the empty string.

#### effective time of &lt;runlevel&gt; : time

Returns the time at which the runlevel was set to its current value.


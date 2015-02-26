# service

The &lt;service&gt; inspectors provide access to all services configured on Windows NT, 2K and XP systems. On a non-Windows system, expressions using these objects will fail gracefully instead of generating an error.

# can interact with desktop of <service>

Indicates the system is configured to allow the service to interact with the desktop.

# checkpoint of <service>

Service specific value indicating its checkpoint state.

# display name of <service>

Returns the display name of the service.

# driver type of <service>

Returns `True` if the specified service is a driver type.

# file of <service>

Returns a file object corresponding to the specified &lt;service&gt;.

# image path of <service>

Returns the full path to the service executable.

# login account of <service>

Returns the login account under which the service is configured to run.

# pid of <service>

No documentation exists.

# runlevel of <service>

No documentation exists.

# running of <service>

No documentation exists.

# security descriptor of <service>

This Windows-specific inspector returns a security descriptor for the specified service.

# service name of <service>

Returns the name of the service.

# service specific exit code of <service>

Service specific exit code.

# start type of <service>

Returns a string that represents the service startup configuration. It describes when the driver is loaded, which can be one of:boot: started by OS loader (usually these are needed to launch the OS).system: started during OS initialization (used by PnP drivers that do device detection after the loader is finished).auto: started by the Service Control Manager (SCM).demand: started on demand, either by PnP manager when a device is enumerated or by the SCM in response to user demand.disabled: can&#39;t be started (used to temporarily disable driver services).

# state of <service>

Returns one of Continuing, Pausing, Paused, Running, Starting, Stopping, Stopped, Unknown.

# version of <service>

This inspector takes the specified service property and retrieves its version (file version).

# win32 exit code of <service>

Service specific Win32 exit code.

# win32 type of <service>

Returns `True` if the specified service is a Win32 type.

# <service> as string

Returns a string containing the Service name, Display name, and State of the service.

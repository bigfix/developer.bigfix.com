# type: service

The &lt;service&gt; inspectors provide access to all services configured on Windows NT, 2K and XP systems. On a non-Windows system, expressions using these objects will fail gracefully instead of generating an error.

# can interact with desktop of &lt;service&gt; : boolean

Indicates the system is configured to allow the service to interact with the desktop.

# checkpoint of &lt;service&gt; : integer

Service specific value indicating its checkpoint state.

# display name of &lt;service&gt; : string

Returns the display name of the service.

# driver type of &lt;service&gt; : boolean

Returns `True` if the specified service is a driver type.

# file of &lt;service&gt; : file

Returns a file object corresponding to the specified &lt;service&gt;.

# image path of &lt;service&gt; : string

Returns the full path to the service executable.

# login account of &lt;service&gt; : string

Returns the login account under which the service is configured to run.

# pid of &lt;service&gt; : integer

No documentation exists.

# runlevel of &lt;service&gt; : string

Returns the list of runlevels for which the service is active.

Note: On RedHat 7, this also lists the targets of systemd services.

{{#example}}
Q: (it as string, runlevels of it) of services whose (it as string contains "ssh")
A: "sshd.service" "sshd" "Stopped", multi-user.target
{{/example}}

# running of &lt;service&gt; : boolean

No documentation exists.

# security descriptor of &lt;service&gt; : security descriptor

This Windows-specific inspector returns a security descriptor for the specified service.

# service name of &lt;service&gt; : string

Returns the name of the service.

# service specific exit code of &lt;service&gt; : integer

Service specific exit code.

# start type of &lt;service&gt; : string

Returns a string that represents the service startup configuration. It describes when the driver is loaded, which can be one of:boot: started by OS loader (usually these are needed to launch the OS).system: started during OS initialization (used by PnP drivers that do device detection after the loader is finished).auto: started by the Service Control Manager (SCM).demand: started on demand, either by PnP manager when a device is enumerated or by the SCM in response to user demand.disabled: can&#39;t be started (used to temporarily disable driver services).

# state of &lt;service&gt; : string

Returns one of Continuing, Pausing, Paused, Running, Starting, Stopping, Stopped, Unknown.

# version of &lt;service&gt; : version

This inspector takes the specified service property and retrieves its version (file version).

# win32 exit code of &lt;service&gt; : integer

Service specific Win32 exit code.

# win32 type of &lt;service&gt; : boolean

Returns `True` if the specified service is a Win32 type.

# &lt;service&gt; as string : string

Returns a string containing the Service name, Display name, and State of the service.

# type: service

The &lt;service&gt; inspectors provide access to all services configured on supported operating systems. Using an inspector for which there is no service results in an error referring to a nonexistent object.

{% qna %}
Q: relay service
E: Singular expression refers to nonexistent object.
{% endqna %}

To avoid errors, check if the service exists before trying to use its inspector.

{% qna %}
Q: exists relay service
A: False
{% endqna %}

# can interact with desktop of &lt;service&gt; : boolean

Indicates the system is configured to allow the service to interact with the desktop.

# checkpoint of &lt;service&gt; : integer

Service specific value indicating its checkpoint state.

# display name of &lt;service&gt; : string

Returns the display name of the service.

# driver type of &lt;service&gt; : boolean

Returns `True` if the specified service is a driver type.

# file of &lt;service&gt; : file

Returns the file object that corresponds to the executable of the specified &lt;service&gt;.

Example running the QnA on a Windows computer.

{% qna %}
Q: file of service "BESRootServer"
A: "BESRootServer.exe" "99.99.5.878" "Server component of BigFix" "99.99.5.878" "HCL Technologies Limited"
{% endqna %}

Example running the QnA on a Linux computer.

{% qna %}
Q: file of service "BESClient
A: /opt/BESClient/bin/BESClient
{% endqna %}

# folder of &lt;service&gt; : folder

Returns the folder object representing the directory where the executable of the specified &lt;service&gt; is located.

Example running the QnA on a Windows computer.

{% qna %}
Q: folder of service "BESRootServer"
A: C:\Program Files (x86)\BigFix Enterprise\BES Server
{% endqna %}

Example running the QnA on a Linux computer.

{% qna %}
Q: folder of service "BESClient
A: /opt/BESClient/bin
{% endqna %}

# image path of &lt;service&gt; : string

Returns the full file system path to the executable image associated with the specified &lt;service&gt;.

Example running the QnA on a Windows computer.

{% qna %}
Q: image path of service "BESRootServer"
A: "C:\Program Files (x86)\BigFix Enterprise\BES Server\BESRootServer.exe"
{% endqna %}

Example running the QnA on a Linux computer.

{% qna %}
Q: image path of service "BESClient"
A: /opt/BESClient/bin/BESClient
{% endqna %}

# login account of &lt;service&gt; : string

Returns the login account under which the service is configured to run.

# pid of &lt;service&gt; : integer

Returns the process ID(s) of the active service.

Note: On Red Hat and SUSE, this property applies to services managed by systemd. 

{% qna %}
Q:pid of service "sshd"
A: 1104
{% endqna %}

{% qna %}
Q: pid of service "EventLog"
A: 1208
{% endqna %}

# runlevel of &lt;service&gt; : string

Returns the list of runlevels for which the service is active.

Note: For Systemd services, use the `target` property.

{% qna %}
Q: runlevels of service "network"
A: 2
A: 3
A: 4
A: 5
{% endqna %}

# running of &lt;service&gt; : boolean

The service name must be passed between double quotes (e.g. "BESClient"). On Debian, Raspbian, Ubuntu, AIX, HP-UX and Solaris, the inspector only works for BigFix services. The BigFix service names are: BESClient, BESExplorer, BESFillDB, BESGatherDB, BESPluginPortal, BESRelay, BESRootServer, BESWebReportsServer and BESWebUI.

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
The service name must be passed between double quotes (e.g. "BESClient"). On Debian, Raspbian, Ubuntu, AIX, HP-UX and Solaris, the inspector only works for BigFix services. The BigFix service names are: BESClient, BESExplorer, BESFillDB, BESGatherDB, BESPluginPortal, BESRelay, BESRootServer, BESWebReportsServer and BESWebUI.

# target of &lt;service&gt; : string

Returns all the targets list of systemd services.
Note: For SystemV services, use the `runlevel` property.

{% qna %}
Q: target of service "postfix"
A: multi-user.target
{% endqna %}

# version of &lt;service&gt; : version

This inspector takes the specified service property and retrieves its version (file version).
The service name must be passed between double quotes (e.g. "BESClient"). On Debian, Raspbian, Ubuntu, AIX, HP-UX and Solaris, the inspector only works for BigFix services. The BigFix service names are: BESClient, BESExplorer, BESFillDB, BESGatherDB, BESPluginPortal, BESRelay, BESRootServer, BESWebReportsServer and BESWebUI.

# win32 exit code of &lt;service&gt; : integer

Service specific Win32 exit code.

# win32 type of &lt;service&gt; : boolean

Returns `True` if the specified service is a Win32 type.

# &lt;service&gt; as string : string

Returns a string containing the Service name, Display name, and State of the service.

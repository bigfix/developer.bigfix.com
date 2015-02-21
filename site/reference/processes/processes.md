---
title: processes
---

{% type priority class%}

Threads are scheduled based on priority, which ranges from zero, the lowest, to 31, the highest. The zero-page thread, a system thread in charge of zeroing free pages when all other threads are finished, is the only thread allowed to have a priority of zero.

{% type environment variable%}

Every variable defined by the environment has both a name and a value. Both names and values are treated as strings.

#### Casts

{% property <environment variable> as string %}

Casting the variable as a string yields a string containing the variable name and the value of the variable separated by &#39; = &#39;.

#### Properties

{% property value of <environment variable> %}

Returns the value of the variable.

{% property name of <environment variable> %}

Returns the name of the variable.

{% type environment%}

Environment variables define a particular set of paths and variables for a computer or an application. These inspectors let you examine this set.

#### Properties

{% property variable of <environment> %}

Iterates through all the environment variables defined.

{% property variable <string> of <environment> %}

Returns an environment variable that matches the given name.

{% property x64 variable of <environment> %}

Returns the same as the the variable inspector, but from outside the WOW64 environment.

{% property x64 variable <string> of <environment> %}

Returns the same as the the named variable inspector, but from outside the WOW64 environment.

{% type process%}

Processes allocate the various resources needed to execute a program. Processes have a process identifier, a virtual address space, associated code, a priority class, security settings, environment variables, min and max working set sizes, and at least one executing thread. Processes are typically started with a single primary thread which in turn can spawn additional threads.

#### Properties

{% property process id of <process> %}

Returns the integer process ID for the specified process.

{% property pid of <process> %}

Returns the integer process ID for the specified process.

{% property name of <process> %}

Returns the name (as a string) of the specified process.

{% property id of <process> %}

Returns the integer ID of the specified process.

{% property environment of <process> %}

Returns the environment of the specified process.

{% property command line argument of <process> %}

Returns the command line arguments of the specified process.

{% property command line argument <integer> of <process> %}

Returns the Nth command line argument of the specified process.

{% property zone of <process> %}

Returns the Solaris Zone corresponding to the specified process.

{% property wow64 of <process> %}

Returns a boolean TRUE if the specified process is a 32-bit process running in WOW64 compatibility mode. Always returns FALSE on pre-WinXP SP2.

{% property working set size of <process> %}

Returns the amount of memory (as an integer number of bytes) required by a process for efficient execution under an operating system that uses paged memory. Thrashing may occur in systems without sufficient memory. This value allow you to monitor the changing memory requirements of the specified process.

{% property user time of <process> %}

Returns the time in user mode as a time interval.

{% property user of <process> %}

Returns a security identifier associated with the user of specified process. This inspector requires Terminal Services or Win2000+, and may not be available if the inspector application does not have sufficient permissions. This object corresponds to the &#39;User Name&#39; column in Task Manager.

{% property user object count of <process> %}

Returns the count of USER objects associated with the specified process as an integer.

{% property session id of <process> %}

Returns the ID of the session under which the process is running. This requires Win2000 or later and corresponds to the &#39;Session ID&#39; column in Task Manager.

{% property quota peak paged pool usage of <process> %}

Returns the peak quota amount of paged pool usage for the specified process.

{% property quota peak nonpaged pool usage of <process> %}

Returns the peak quota amount of nonpaged pool usage for the specified process.

{% property quota paged pool usage of <process> %}

Returns the quota amount of paged pool usage for the specified process.

{% property quota nonpaged pool usage of <process> %}

Returns the quota amount of nonpaged pool usage for the specified process.

{% property peak working set size of <process> %}

Returns the size of the peak working set of the specified process.

{% property peak page file usage of <process> %}

Returns the maximum page file space used throughout the lifetime of the specified process.

{% property page file usage of <process> %}

Returns the amount of page file space used by the specified process. This value is equal to the VMSize in TaskMgr.

{% property page fault count of <process> %}

Returns the number of page faults generated by the specified process.

{% property kernel time of <process> %}

Returns the time in kernel mode, as a time interval.

{% property io write size of <process> %}

Refers to the number of bytes written in I/O operations generated by a process, including file, network, and device I/Os, but excluding write bytes directed to the console input object handles.

{% property io write count of <process> %}

Refers to the number of write I/O operations generated by a process, including file, network, and device I/Os, but excluding I/O writes directed to the console input object handles.

{% property io read size of <process> %}

Refers to the number of bytes read in I/O operations generated by a process, including file, network, and device I/Os, but excluding read bytes directed to the console input object handles.

{% property io read count of <process> %}

Refers to the number of read I/O operations generated by a process, including file, network, and device I/Os, but excluding I/O reads directed to the console input object handles.

{% property io other size of <process> %}

Refers to the number of bytes transferred in I/O operations generated by a process  including file, network, and device I/Os but excluding reads, writes and bytes directed to the console input object.

{% property io other count of <process> %}

Refers to the number of I/O process operations that are neither reads nor writes, including file, network, and device I/O, but excluding I/O directed to the console input object handles. An example might be a control function.

{% property image file of <process> %}

Returns a file object representing the image file used to launch the process. In some cases, this subproperty may not exist. For example, the &quot;System&quot; process does not have an image file.

{% property handle count of <process> %}

Refers to the number of object handles in the object table of the specified process.

{% property gdi object count of <process> %}

Returns the count of the GDI (Graphics Device Interface) objects associated with the specified process as an integer.

{% property creation time of <process> %}

Returns the creation time of the specified process as a time type.

{% property base priority of <process> %}

Refers to the base priority of the process, which determines the order in which threads are scheduled for the processor. The base priority is set by the process code (not the OS), however the OS sets and changes the dynamic priorities of threads in the process within the range of the base. Use the Task Manager to change the base priority of processes.

{% property ppid of <process> %}

Returns the PPID of the process specified

{% property effective user of <process> %}

Returns the effective user of the process specified

{% property dep enabled of <process> %}

No documentation exists for this property.

{% property selinux context of <process> %}

No documentation exists for this property.


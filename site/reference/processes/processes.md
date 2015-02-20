---
title: processes
---

## priority class

Threads are scheduled based on priority, which ranges from zero, the lowest, to 31, the highest. The zero-page thread, a system thread in charge of zeroing free pages when all other threads are finished, is the only thread allowed to have a priority of zero.

## environment variable

Every variable defined by the environment has both a name and a value. Both names and values are treated as strings.

#### &lt;environment variable&gt; as string : string

Casting the variable as a string yields a string containing the variable name and the value of the variable separated by &#39; = &#39;.

#### value of &lt;environment variable&gt; : string

Returns the value of the variable.

#### name of &lt;environment variable&gt; : string

Returns the name of the variable.

## environment

Environment variables define a particular set of paths and variables for a computer or an application. These inspectors let you examine this set.

#### variable of &lt;environment&gt; : environment variable

Iterates through all the environment variables defined.

#### variable &lt;string&gt; of &lt;environment&gt; : environment variable

Returns an environment variable that matches the given name.

#### x64 variable of &lt;environment&gt; : environment variable

Returns the same as the the variable inspector, but from outside the WOW64 environment.

#### x64 variable &lt;string&gt; of &lt;environment&gt; : environment variable

Returns the same as the the named variable inspector, but from outside the WOW64 environment.

## process

Processes allocate the various resources needed to execute a program. Processes have a process identifier, a virtual address space, associated code, a priority class, security settings, environment variables, min and max working set sizes, and at least one executing thread. Processes are typically started with a single primary thread which in turn can spawn additional threads.

#### process id of &lt;process&gt; : integer

Returns the integer process ID for the specified process.

#### pid of &lt;process&gt; : integer

Returns the integer process ID for the specified process.

#### name of &lt;process&gt; : string

Returns the name (as a string) of the specified process.

#### id of &lt;process&gt; : integer

Returns the integer ID of the specified process.

#### environment of &lt;process&gt; : environment

Returns the environment of the specified process.

#### command line argument of &lt;process&gt; : string

Returns the command line arguments of the specified process.

#### command line argument &lt;integer&gt; of &lt;process&gt; : string

Returns the Nth command line argument of the specified process.

#### zone of &lt;process&gt; : zone

Returns the Solaris Zone corresponding to the specified process.

#### wow64 of &lt;process&gt; : boolean

Returns a boolean TRUE if the specified process is a 32-bit process running in WOW64 compatibility mode. Always returns FALSE on pre-WinXP SP2.

#### working set size of &lt;process&gt; : integer

Returns the amount of memory (as an integer number of bytes) required by a process for efficient execution under an operating system that uses paged memory. Thrashing may occur in systems without sufficient memory. This value allow you to monitor the changing memory requirements of the specified process.

#### user time of &lt;process&gt; : time interval

Returns the time in user mode as a time interval.

#### user of &lt;process&gt; : user

Returns a security identifier associated with the user of specified process. This inspector requires Terminal Services or Win2000+, and may not be available if the inspector application does not have sufficient permissions. This object corresponds to the &#39;User Name&#39; column in Task Manager.

#### user object count of &lt;process&gt; : integer

Returns the count of USER objects associated with the specified process as an integer.

#### session id of &lt;process&gt; : integer

Returns the ID of the session under which the process is running. This requires Win2000 or later and corresponds to the &#39;Session ID&#39; column in Task Manager.

#### quota peak paged pool usage of &lt;process&gt; : integer

Returns the peak quota amount of paged pool usage for the specified process.

#### quota peak nonpaged pool usage of &lt;process&gt; : integer

Returns the peak quota amount of nonpaged pool usage for the specified process.

#### quota paged pool usage of &lt;process&gt; : integer

Returns the quota amount of paged pool usage for the specified process.

#### quota nonpaged pool usage of &lt;process&gt; : integer

Returns the quota amount of nonpaged pool usage for the specified process.

#### peak working set size of &lt;process&gt; : integer

Returns the size of the peak working set of the specified process.

#### peak page file usage of &lt;process&gt; : integer

Returns the maximum page file space used throughout the lifetime of the specified process.

#### page file usage of &lt;process&gt; : integer

Returns the amount of page file space used by the specified process. This value is equal to the VMSize in TaskMgr.

#### page fault count of &lt;process&gt; : integer

Returns the number of page faults generated by the specified process.

#### kernel time of &lt;process&gt; : time interval

Returns the time in kernel mode, as a time interval.

#### io write size of &lt;process&gt; : integer

Refers to the number of bytes written in I/O operations generated by a process, including file, network, and device I/Os, but excluding write bytes directed to the console input object handles.

#### io write count of &lt;process&gt; : integer

Refers to the number of write I/O operations generated by a process, including file, network, and device I/Os, but excluding I/O writes directed to the console input object handles.

#### io read size of &lt;process&gt; : integer

Refers to the number of bytes read in I/O operations generated by a process, including file, network, and device I/Os, but excluding read bytes directed to the console input object handles.

#### io read count of &lt;process&gt; : integer

Refers to the number of read I/O operations generated by a process, including file, network, and device I/Os, but excluding I/O reads directed to the console input object handles.

#### io other size of &lt;process&gt; : integer

Refers to the number of bytes transferred in I/O operations generated by a process  including file, network, and device I/Os but excluding reads, writes and bytes directed to the console input object.

#### io other count of &lt;process&gt; : integer

Refers to the number of I/O process operations that are neither reads nor writes, including file, network, and device I/O, but excluding I/O directed to the console input object handles. An example might be a control function.

#### image file of &lt;process&gt; : file

Returns a file object representing the image file used to launch the process. In some cases, this subproperty may not exist. For example, the &quot;System&quot; process does not have an image file.

#### handle count of &lt;process&gt; : integer

Refers to the number of object handles in the object table of the specified process.

#### gdi object count of &lt;process&gt; : integer

Returns the count of the GDI (Graphics Device Interface) objects associated with the specified process as an integer.

#### creation time of &lt;process&gt; : time

Returns the creation time of the specified process as a time type.

#### base priority of &lt;process&gt; : priority class

Refers to the base priority of the process, which determines the order in which threads are scheduled for the processor. The base priority is set by the process code (not the OS), however the OS sets and changes the dynamic priorities of threads in the process within the range of the base. Use the Task Manager to change the base priority of processes.

#### ppid of &lt;process&gt; : integer

Returns the PPID of the process specified

#### effective user of &lt;process&gt; : user

Returns the effective user of the process specified

#### dep enabled of &lt;process&gt; : boolean

No documentation exists for this property.

#### selinux context of &lt;process&gt; : string

No documentation exists for this property.


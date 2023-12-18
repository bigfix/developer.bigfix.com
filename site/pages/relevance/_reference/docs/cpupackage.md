# type: cpupackage

The `cpupackage` inspector is used to identify the number of cores and processors in the client CPU.

# core of &lt;cpupackage&gt; : integer

On most platforms, returns the number of physical cores in a single cpupackage (a single socket or physical CPU).

On AIX platforms, returns the number of SMT threads (not of physical cores).

# count of &lt;cpupackage&gt; : integer

On most platforms, returns the count of physical cpu packages (the number of sockets or physical CPUs). Multiply this number by the number of cores to get the total core count of the system.

On AIX platforms, returns the number of the virtual online CPUs divided by the number of SMT threads, rounded to the lower integer. For example, if there are 15 virtual online CPUs and 8 SMT threads, the returned value is 1. That is, 15/8 = 1.875 rounded to the lower integer, 1.

# smt capable of &lt;cpupackage&gt; : boolean

If detectable, returns `True` if the cpupackage is capable of SMT threads (Simultaneous multithreading, called "Hyper-Threading" on some platforms).

# smt enabled of &lt;cpupackage&gt; : boolean

If detectable, returns `True` if the cpupackage is using SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms).

# thread of &lt;cpupackage&gt; : integer

Returns the number of SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms) in a single cpupackage (a single socket or physical CPU).

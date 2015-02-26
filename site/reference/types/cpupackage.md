# cpupackage

No documentation exists.

# core of &lt;cpupackage&gt;

Returns the number of physical cores in a single cpupackage (a single socket or physical CPU)

# count of &lt;cpupackage&gt;

Returns the count of physical cpu packages packages (the number of sockets or physical CPUs). Multiply this number by the number of cores to get the total core count of the system.

# smt capable of &lt;cpupackage&gt;

If detectable, returns `True` if the cpupackage is capable of SMT threads (Simultaneous multithreading, called &quot;Hyper-Threading&quot; on some platforms)

# smt enabled of &lt;cpupackage&gt;

If detectable, returns `True` if the cpupackage is using SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms)

# thread of &lt;cpupackage&gt;

Returns the number of SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms) in a single cpupackage (a single socket or physical CPU)

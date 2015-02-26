# cpupackage

No documentation exists.

# core of <cpupackage>

Returns the number of physical cores in a single cpupackage (a single socket or physical CPU)

# count of <cpupackage>

Returns the count of physical cpu packages packages (the number of sockets or physical CPUs). Multiply this number by the number of cores to get the total core count of the system.

# smt capable of <cpupackage>

If detectable, returns `True` if the cpupackage is capable of SMT threads (Simultaneous multithreading, called &quot;Hyper-Threading&quot; on some platforms)

# smt enabled of <cpupackage>

If detectable, returns `True` if the cpupackage is using SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms)

# thread of <cpupackage>

Returns the number of SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms) in a single cpupackage (a single socket or physical CPU)

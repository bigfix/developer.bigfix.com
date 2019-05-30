# type: processor

The &lt;processor&gt; inspector is used to identify the number and properties of processors in the system. Many operating systems support multiple CPUs and processors. You can inspect any one of them by their ordinal number. On Linux, most of these inspector properties look into the /proc/cpuinfo file to find the requested information.

# adjustment &lt;integer&gt; of &lt;processor&gt; : integer

s390 processors only. Returns the processor Adjustment Way (guest performance)

# altivec of &lt;processor&gt; : boolean

PPC64 processors only. Returns `True` if the specified processor supports the AltiVec instruction set.

# architected of &lt;processor&gt; : boolean

PPC64 processors only. Returns `True` if the specified processor is running in architected mode.

# bogomips of &lt;processor&gt; : integer

Returns the Bogomips of the specified processor, which provides a rough indication of its speed.

# brand id of &lt;processor&gt; : integer

This inspector returns the integer known as the brand id, returned from the assembly language cpuid extended instruction.

# brand string of &lt;processor&gt; : string

Returns the vendor-defined brand names for newer processors.

# capability of &lt;processor&gt; : integer

s390 processors only. Returns the capability code of the processor

# coma bug of &lt;processor&gt; : boolean

Returns `True` if the specified processor is afflicted by the coma bug. The coma bug afflicts certain Cyrix CPUs, causing them to occasionally lock up. The affected CPUs include the Cyrix/IBM 6x86, 6x86L, and 6x86MX.

# cpuid level of &lt;processor&gt; : integer

Returns an integer corresponding to the cpuid level for the given processor.

# cpus configured of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors configured for the system

# cpus reserved of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors reserved for the system

# cpus standby of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors in standby for the system

# cpus total of &lt;processor&gt; : integer

s390 processors only. Returns the number of total processors for the system

# decimal fpu of &lt;processor&gt; : boolean

PPC64 processors only. Returns True if the specified processor has a decimal floating point unit.

# extended family of &lt;processor&gt; : integer

Integer representing the extended family of CPU. See the notes for the meaning of these numbers.

# extended feature mask of &lt;processor&gt; : integer

Returns a mask of the extended feature bits of an x86 processor

# extended model of &lt;processor&gt; : integer

Integer representing the extended model of CPU. See the notes for the meaning of these numbers.

# f00f bug of &lt;processor&gt; : boolean

Returns `True` if the specified processor is afflicted by the f00f bug. This bug is named after the first two of a four-byte assembly language sequence that can freeze up x86 Pentium processors.

# family name of &lt;processor&gt; : string

Returns the family name of the CPU, dependent on the type of client computer, for instance Pentium, Sparc, PowerPC G4, etcetera.

# family of &lt;processor&gt; : integer

Linux, Mac and Windows only. Returns an integer representing the family of the specified processor.

# family of &lt;processor&gt; : string

Solaris and AIX only. Returns a string representing the family of the specified processor.

# fdiv bug of &lt;processor&gt; : boolean

Returns `True` if the specified processor is afflicted by the fdiv bug, which occasionally causes incorrect floating point division answers.

# feature mask of &lt;processor&gt; : integer

Returns the feature flags from the CPUID instruction. The feature mask contains bits that identify extra features the processor may provide such as MMX support or if the Processor ID is enabled on the processor.

# flag list of &lt;processor&gt; : string

Returns a string containing the processor flags. To check if a processor has a particular flag, use the &#39;contains&#39; operator.

# fpu exception of &lt;processor&gt; : boolean

Returns `True` if the fpu exception has occurred on this processor.

# fpu of &lt;processor&gt; : boolean

Returns `True` if the specified processor contains a floating point unit.

# fputype of &lt;processor&gt; : string

Returns pi_fputypes, a string containing the comma-separated types of floating-point units (FPUs) attached to the processor. This string will be empty if no FPU is attached.

# hlt bug of &lt;processor&gt; : boolean

Returns `True` if the specified processor is afflicted by the hlt bug.

# ic snoop of &lt;processor&gt; : boolean

PPC64 processors only. Returns `True` if the specified processor supports icache snooping capabilities.

# id of &lt;processor&gt; : integer

Returns an integer corresponding to the ID of the specified processor.

# index of &lt;processor&gt; : integer

Returns the ordinal number of the processor on a multi processor machine.

# lpar adjustment of &lt;processor&gt; : integer

s390 processors only. Returns the LPAR agjustment for the processor

# lpar characteristics of &lt;processor&gt; : string

s390 processors only. Returns the characteristic of the processor. ie: Shared

# lpar cpus configured of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors configured for the LPAR

# lpar cpus dedicated of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors dedicated for the LPAR

# lpar cpus reserved of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors reserved for the LPAR

# lpar cpus shared of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors shared for the LPAR

# lpar cpus standby of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors in standby for the LPAR

# lpar cpus total of &lt;processor&gt; : integer

s390 processors only. Returns the total number of processors for the LPAR

# lpar name of &lt;processor&gt; : string

s390 processors only. Returns the name of the processor for the LPAR

# lpar number of &lt;processor&gt; : integer

s390 processors only. Returns the LPAR number for this processor

# machine name of &lt;processor&gt; : string

PPC64 processors only. Returns a string representing the machine name of the specified processor.

{% qna %}
Q: machine name of main processor
A: 8247-22l
{% endqna %}

# machine serial number of &lt;processor&gt; : string

s390 processors only. Returns the serial number of the processor

# mmu of &lt;processor&gt; : boolean

PPC64 processors only. Returns `True` if the specified processor has a memory management unit.

# model name of &lt;processor&gt; : string

Returns a string containing the name of the processor model.

# model of &lt;processor&gt; : integer

Linux, Mac and Windows only. Returns an integer representing the model number of the specified processor.

# model of &lt;processor&gt; : string

AIX, HP-UX and Solaris only. Returns a string representing the model number of the specified processor.

# revision of &lt;processor&gt; : string

PPC64 processors only. Returns a string representing the revision number of the specified processor.

{% qna %}
Q: revision of main processor
A: 2.1
{% endqna %}

# run mode of &lt;processor&gt; : string

PPC64 processors only. Returns a string representing what mode the specified processor is running in. If you specifically want to know whether the processor is running in "architected" mode or in "raw" mode, check the "architected" processor property also.

{% qna %}
Q: run mode of main processor
A: power8
{% endqna %}

# sep bug of &lt;processor&gt; : boolean

Returns `True` if the given processor improperly reports the value of its SEP (Sysenter/sysexit Present) flag.

# sequence code of &lt;processor&gt; : string

s390 processors only. Returns the Sequence Code for the processor.

# smt of &lt;processor&gt; : boolean

PPC64 processors only. Returns `True` if the specified processor supports simultaneous multi-threading. 

# spe double of &lt;processor&gt; : boolean

PPC64 processors only. Returns `True` if the specified processor has a SPE double precision floating point unit.

# spe float of &lt;processor&gt; : boolean

PPC64 processors only. Returns `True` if the specified processor has a SPE single precision floating point unit. 

# spe of &lt;processor&gt; : boolean

PPC64 processors only. Returns `True` if the specified processor has a SPE (Signal Processing Engine) unit.

# speed of &lt;processor&gt; : hertz

Returns the speed of the processor in Hertz.

# state of &lt;processor&gt; : string

Returns the current processor state, which can be "online", "offline", "poweroff", or "unknown".

# stepping of &lt;processor&gt; : integer

Returns the stepping number of the processor. This item can be helpful in identifying very specific processor features or limitations.

# type of &lt;processor&gt; : integer

Windows only. Returns an integer representing the type of specified processor. Values include: 

- 0 - standard
- 1 - overdrive
- 2 - dual CPU capable
- 3 - reserved

# type of &lt;processor&gt; : string

AIX, Mac and Solaris only. Returns a string representing the type of the CPU. Values include:
- i386
- sparc

<strong>Note</strong>: This inspector returns a &lt;string&gt; type as on AIX, Mac and Solaris platform.

# vendor name of &lt;processor&gt; : string

The manufacturer of the CPU. Names include: GenuineIntelAuthenticAMDCyrixInsteadCentaurHaulsAmbiguousCPU.

# version of &lt;processor&gt; : string

The hardware version of the cpu.

# vm adjustment of &lt;processor&gt; : integer

s390 processors only. Returns the VM Adjustment for the processor

# vm control program of &lt;processor&gt; : string

s390 processors only. Returns the VM Control Program for the processor. ie: z/VM 5.2.0

# vm cpus configured of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors configured for the VM

# vm cpus reserved of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors configured for the VM

# vm cpus standby of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors in standby for the VM

# vm cpus total of &lt;processor&gt; : integer

s390 processors only. Returns the total number of processors for the VM

# vm name of &lt;processor&gt; : string

s390 processors only. Returns the name of the VM

# wp of &lt;processor&gt; : boolean

Returns `True` if the specified processor has the WP feature.

# processor

The &lt;processor&gt; object is used to identify the number and properties of processors in the system. You can identify the manufacturer of the CPU as well as the speed and other features. Many operating systems provide for multiple processors. You can inspect any one of them by their ordinal number.For more information on Windows processors, see the Resource section at the end of this guide.

# adjustment <integer> of <processor>

s390 processors only. Returns the processor Adjustment Way (guest performance)

# altivec of <processor>

No documentation exists.

# architected of <processor>

No documentation exists.

# bogomips of <processor>

Returns the Bogomips of the specified processor, which provides a rough indication of its speed.

# brand id of <processor>

This inspector returns the integer known as the brand id, returned from the assembly language cpuid extended instruction.

# brand string of <processor>

Returns the vendor-defined brand names for newer processors.

# capability of <processor>

s390 processors only. Returns the capability code of the processor

# coma bug of <processor>

Returns `True` if the specified processor is afflicted by the coma bug. The coma bug afflicts certain Cyrix CPUs, causing them to occasionally lock up. The affected CPUs include the Cyrix/IBM 6x86, 6x86L, and 6x86MX.

# cpuid level of <processor>

Returns an integer corresponding to the cpuid level for the given processor.

# cpus configured of <processor>

s390 processors only. Returns the number of processors configured for the system

# cpus reserved of <processor>

s390 processors only. Returns the number of processors reserved for the system

# cpus standby of <processor>

s390 processors only. Returns the number of processors in standby for the system

# cpus total of <processor>

s390 processors only. Returns the number of total processors for the system

# decimal fpu of <processor>

No documentation exists.

# extended family of <processor>

Integer representing the extended family of CPU. See the notes for the meaning of these numbers.

# extended feature mask of <processor>

Returns a mask of the extended feature bits of an x86 processor

# extended model of <processor>

Integer representing the extended model of CPU. See the notes for the meaning of these numbers.

# f00f bug of <processor>

Returns `True` if the specified processor is afflicted by the f00f bug. This bug is named after the first two of a four-byte assembly language sequence that can freeze up x86 Pentium processors.

# family name of <processor>

Returns the family name of the CPU, dependent on the type of client computer, for instance Pentium, Sparc, PowerPC G4, etcetera.

# family of <processor>

Returns an integer representing the family of the CPU. See the notes for the meaning of these numbers. As of BES 6.0, this inspector returns a string on Solaris and AIX computers.

# fdiv bug of <processor>

Returns `True` if the specified processor is afflicted by the fdiv bug, which occasionally causes incorrect floating point division answers.

# feature mask of <processor>

Returns the feature flags from the CPUID instruction. The feature mask contains bits that identify extra features the processor may provide such as MMX support or if the Processor ID is enabled on the processor.

# flag list of <processor>

Returns a string containing the processor flags. To check if a processor has a particular flag, use the &#39;contains&#39; operator.

# fpu exception of <processor>

Returns `True` if the fpu exception has occurred on this processor.

# fpu of <processor>

Returns `True` if the specified processor contains a floating point unit.

# fputype of <processor>

Returns pi_fputypes, a string containing the comma-separated types of floating-point units (FPUs) attached to the processor. This string will be empty if no FPU is attached.

# hlt bug of <processor>

Returns `True` if the specified processor is afflicted by the hlt bug.

# ic snoop of <processor>

No documentation exists.

# id of <processor>

Returns an integer corresponding to the ID of the specified processor.

# index of <processor>

Returns the ordinal number of the processor on a multi processor machine.

# lpar adjustment of <processor>

s390 processors only. Returns the LPAR agjustment for the processor

# lpar characteristics of <processor>

s390 processors only. Returns the characteristic of the processor. ie: Shared

# lpar cpus configured of <processor>

s390 processors only. Returns the number of processors configured for the LPAR

# lpar cpus dedicated of <processor>

s390 processors only. Returns the number of processors dedicated for the LPAR

# lpar cpus reserved of <processor>

s390 processors only. Returns the number of processors reserved for the LPAR

# lpar cpus shared of <processor>

s390 processors only. Returns the number of processors shared for the LPAR

# lpar cpus standby of <processor>

s390 processors only. Returns the number of processors in standby for the LPAR

# lpar cpus total of <processor>

s390 processors only. Returns the total number of processors for the LPAR

# lpar name of <processor>

s390 processors only. Returns the name of the processor for the LPAR

# lpar number of <processor>

s390 processors only. Returns the LPAR number for this processor

# machine name of <processor>

No documentation exists.

# machine serial number of <processor>

s390 processors only. Returns the serial number of the processor

# mmu of <processor>

No documentation exists.

# model name of <processor>

Returns a string containing the name of the processor model.

# model of <processor>

Returns the model number of the CPU as a string.Note: On Windows and Linux platforms, this inspector returns an integer.

# revision of <processor>

No documentation exists.

# run mode of <processor>

No documentation exists.

# sep bug of <processor>

Returns `True` if the given processor improperly reports the value of its SEP (Sysenter/sysexit Present) flag.

# sequence code of <processor>

s390 processors only. Returns the Sequence Code for the processor.

# smt of <processor>

No documentation exists.

# spe double of <processor>

No documentation exists.

# spe float of <processor>

No documentation exists.

# spe of <processor>

No documentation exists.

# speed of <processor>

Returns the speed of the processor in Hertz.

# state of <processor>

Returns the current processor state, which can be &quot;online&quot;, &quot;offline&quot;, &quot;poweroff&quot;, or &quot;unknown&quot;.

# stepping of <processor>

Returns the stepping number of the processor. This item can be helpful in identifying very specific processor features or limitations.

# type of <processor>

Numeric type of the CPU. Values include: 0 - standard1 - overdrive2 - dual CPU capable3 - reservedNote: this inspector returns an &lt;integer&gt; type as on Windows platforms.

# vendor name of <processor>

The manufacturer of the CPU. Names include: GenuineIntelAuthenticAMDCyrixInsteadCentaurHaulsAmbiguousCPU.

# version of <processor>

The hardware version of the cpu.

# vm adjustment of <processor>

s390 processors only. Returns the VM Adjustment for the processor

# vm control program of <processor>

s390 processors only. Returns the VM Control Program for the processor. ie: z/VM 5.2.0

# vm cpus configured of <processor>

s390 processors only. Returns the number of processors configured for the VM

# vm cpus reserved of <processor>

s390 processors only. Returns the number of processors configured for the VM

# vm cpus standby of <processor>

s390 processors only. Returns the number of processors in standby for the VM

# vm cpus total of <processor>

s390 processors only. Returns the total number of processors for the VM

# vm name of <processor>

s390 processors only. Returns the name of the VM

# wp of <processor>

Returns `True` if the specified processor has the WP feature.

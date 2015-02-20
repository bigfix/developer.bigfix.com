---
title: processor
---

## processor

The &lt;processor&gt; object is used to identify the number and properties of processors in the system. You can identify the manufacturer of the CPU as well as the speed and other features. Many operating systems provide for multiple processors. You can inspect any one of them by their ordinal number.For more information on Windows processors, see the Resource section at the end of this guide.

#### wp of &lt;processor&gt; : boolean

Returns TRUE if the specified processor has the WP feature.

#### vendor name of &lt;processor&gt; : string

The manufacturer of the CPU. Names include: GenuineIntelAuthenticAMDCyrixInsteadCentaurHaulsAmbiguousCPU.

#### stepping of &lt;processor&gt; : integer

Returns the stepping number of the processor. This item can be helpful in identifying very specific processor features or limitations.

#### speed of &lt;processor&gt; : hertz

Returns the speed of the processor in Hertz.

#### sep bug of &lt;processor&gt; : boolean

Returns TRUE if the given processor improperly reports the value of its SEP (Sysenter/sysexit Present) flag.

#### model of &lt;processor&gt; : string

Returns the model number of the CPU as a string.Note: On Windows and Linux platforms, this inspector returns an integer.

#### model name of &lt;processor&gt; : string

Returns a string containing the name of the processor model.

#### index of &lt;processor&gt; : integer

Returns the ordinal number of the processor on a multi processor machine.

#### hlt bug of &lt;processor&gt; : boolean

Returns TRUE if the specified processor is afflicted by the hlt bug.

#### fpu of &lt;processor&gt; : boolean

Returns TRUE if the specified processor contains a floating point unit.

#### fpu exception of &lt;processor&gt; : boolean

Returns TRUE if the fpu exception has occurred on this processor.

#### flag list of &lt;processor&gt; : string

Returns a string containing the processor flags. To check if a processor has a particular flag, use the &#39;contains&#39; operator.

#### fdiv bug of &lt;processor&gt; : boolean

Returns TRUE if the specified processor is afflicted by the fdiv bug, which occasionally causes incorrect floating point division answers.

#### family of &lt;processor&gt; : string

Returns an integer representing the family of the CPU. See the notes for the meaning of these numbers. As of BES 6.0, this inspector returns a string on Solaris and AIX computers.

#### family name of &lt;processor&gt; : string

Returns the family name of the CPU, dependent on the type of client computer, for instance Pentium, Sparc, PowerPC G4, etcetera.

#### f00f bug of &lt;processor&gt; : boolean

Returns TRUE if the specified processor is afflicted by the f00f bug. This bug is named after the first two of a four-byte assembly language sequence that can freeze up x86 Pentium processors.

#### cpuid level of &lt;processor&gt; : integer

Returns an integer corresponding to the cpuid level for the given processor.

#### coma bug of &lt;processor&gt; : boolean

Returns TRUE if the specified processor is afflicted by the coma bug. The coma bug afflicts certain Cyrix CPUs, causing them to occasionally lock up. The affected CPUs include the Cyrix/IBM 6x86, 6x86L, and 6x86MX.

#### bogomips of &lt;processor&gt; : integer

Returns the Bogomips of the specified processor, which provides a rough indication of its speed.

#### type of &lt;processor&gt; : string

Numeric type of the CPU. Values include: 0 - standard1 - overdrive2 - dual CPU capable3 - reservedNote: this inspector returns an &lt;integer&gt; type as on Windows platforms.

#### version of &lt;processor&gt; : string

The hardware version of the cpu.

#### state of &lt;processor&gt; : string

Returns the current processor state, which can be &quot;online&quot;, &quot;offline&quot;, &quot;poweroff&quot;, or &quot;unknown&quot;.

#### id of &lt;processor&gt; : integer

Returns an integer corresponding to the ID of the specified processor.

#### fputype of &lt;processor&gt; : string

Returns pi_fputypes, a string containing the comma-separated types of floating-point units (FPUs) attached to the processor. This string will be empty if no FPU is attached.

#### feature mask of &lt;processor&gt; : integer

Returns the feature flags from the CPUID instruction. The feature mask contains bits that identify extra features the processor may provide such as MMX support or if the Processor ID is enabled on the processor.

#### extended model of &lt;processor&gt; : integer

Integer representing the extended model of CPU. See the notes for the meaning of these numbers.

#### extended family of &lt;processor&gt; : integer

Integer representing the extended family of CPU. See the notes for the meaning of these numbers.

#### brand string of &lt;processor&gt; : string

Returns the vendor-defined brand names for newer processors.

#### brand id of &lt;processor&gt; : integer

This inspector returns the integer known as the brand id, returned from the assembly language cpuid extended instruction.

#### vm name of &lt;processor&gt; : string

s390 processors only. Returns the name of the VM

#### vm cpus total of &lt;processor&gt; : integer

s390 processors only. Returns the total number of processors for the VM

#### vm cpus standby of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors in standby for the VM

#### vm cpus reserved of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors configured for the VM

#### vm cpus configured of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors configured for the VM

#### vm control program of &lt;processor&gt; : string

s390 processors only. Returns the VM Control Program for the processor. ie: z/VM 5.2.0

#### vm adjustment of &lt;processor&gt; : integer

s390 processors only. Returns the VM Adjustment for the processor

#### sequence code of &lt;processor&gt; : string

s390 processors only. Returns the Sequence Code for the processor.

#### machine serial number of &lt;processor&gt; : string

s390 processors only. Returns the serial number of the processor

#### lpar number of &lt;processor&gt; : integer

s390 processors only. Returns the LPAR number for this processor

#### lpar name of &lt;processor&gt; : string

s390 processors only. Returns the name of the processor for the LPAR

#### lpar cpus total of &lt;processor&gt; : integer

s390 processors only. Returns the total number of processors for the LPAR

#### lpar cpus standby of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors in standby for the LPAR

#### lpar cpus shared of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors shared for the LPAR

#### lpar cpus reserved of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors reserved for the LPAR

#### lpar cpus dedicated of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors dedicated for the LPAR

#### lpar cpus configured of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors configured for the LPAR

#### lpar characteristics of &lt;processor&gt; : string

s390 processors only. Returns the characteristic of the processor. ie: Shared

#### lpar adjustment of &lt;processor&gt; : integer

s390 processors only. Returns the LPAR agjustment for the processor

#### cpus total of &lt;processor&gt; : integer

s390 processors only. Returns the number of total processors for the system

#### cpus standby of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors in standby for the system

#### cpus reserved of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors reserved for the system

#### cpus configured of &lt;processor&gt; : integer

s390 processors only. Returns the number of processors configured for the system

#### capability of &lt;processor&gt; : integer

s390 processors only. Returns the capability code of the processor

#### adjustment &lt;integer&gt; of &lt;processor&gt; : integer

s390 processors only. Returns the processor Adjustment Way (guest performance)

#### extended feature mask of &lt;processor&gt; : integer

Returns a mask of the extended feature bits of an x86 processor

#### spe of &lt;processor&gt; : boolean

No documentation exists for this property.

#### spe float of &lt;processor&gt; : boolean

No documentation exists for this property.

#### spe double of &lt;processor&gt; : boolean

No documentation exists for this property.

#### smt of &lt;processor&gt; : boolean

No documentation exists for this property.

#### run mode of &lt;processor&gt; : string

No documentation exists for this property.

#### revision of &lt;processor&gt; : string

No documentation exists for this property.

#### mmu of &lt;processor&gt; : boolean

No documentation exists for this property.

#### machine name of &lt;processor&gt; : string

No documentation exists for this property.

#### ic snoop of &lt;processor&gt; : boolean

No documentation exists for this property.

#### decimal fpu of &lt;processor&gt; : boolean

No documentation exists for this property.

#### architected of &lt;processor&gt; : boolean

No documentation exists for this property.

#### altivec of &lt;processor&gt; : boolean

No documentation exists for this property.

## cpupackage

No documentation exists for this type.

#### thread of &lt;cpupackage&gt; : integer

Returns the number of SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms) in a single cpupackage (a single socket or physical CPU)

#### smt enabled of &lt;cpupackage&gt; : boolean

If detectable, returns true if the cpupackage is using SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms)

#### smt capable of &lt;cpupackage&gt; : boolean

If detectable, returns true if the cpupackage is capable of SMT threads (Simultaneous multithreading, called &quot;Hyper-Threading&quot; on some platforms)

#### count of &lt;cpupackage&gt; : integer

Returns the count of physical cpu packages packages (the number of sockets or physical CPUs). Multiply this number by the number of cores to get the total core count of the system.

#### core of &lt;cpupackage&gt; : integer

Returns the number of physical cores in a single cpupackage (a single socket or physical CPU)

## hertz

The &lt;hertz&gt; object is useful to measure clock cycles. It is used primarily to measure clock frequency by the speed of the processor inspector. Hertz objects have a resolution of 1 hertz and are stored internally as a 64 bit signed integer.

#### &lt;hertz&gt; as string : string

Returns a string formatted &quot;##### hertz&quot;.

#### unique value of &lt;hertz&gt; : hertz with multiplicity

Returns the unique values of a given list of &lt;hertz&gt; types, removing duplicates and sorting by value.

#### significant digits &lt;integer&gt; of &lt;hertz&gt; : hertz

Returns the value of a hertz object with &lt;integer&gt; significant digits (for example. significant digits 3 of 1235569 = 1240000).

#### minimum of &lt;hertz&gt; : hertz

Returns the minimum value from a list of &lt;hertz&gt; types.

#### maximum of &lt;hertz&gt; : hertz

Returns the maximum value from a list of &lt;hertz&gt; types.

#### extrema of &lt;hertz&gt; : ( hertz, hertz )

Returns the minimum and maximum extreme values of the given list of &lt;hertz&gt; types.

#### absolute value of &lt;hertz&gt; : hertz

Returns the positive value of the hertz object.

## hertz with multiplicity

The &lt;hertz with multiplicity&gt; inspectors deal with hertz arrays, allowing you to extract unique hertz values and count them. 

#### multiplicity of &lt;hertz with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;hertz&gt; types.


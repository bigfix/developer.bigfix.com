---
title: processor
---

{% type cpupackage %}

No documentation exists for this type.

#### Properties of cpupackage

{% property core of <cpupackage> %}

Returns the number of physical cores in a single cpupackage (a single socket or physical CPU)

{% property count of <cpupackage> %}

Returns the count of physical cpu packages packages (the number of sockets or physical CPUs). Multiply this number by the number of cores to get the total core count of the system.

{% property smt capable of <cpupackage> %}

If detectable, returns true if the cpupackage is capable of SMT threads (Simultaneous multithreading, called &quot;Hyper-Threading&quot; on some platforms)

{% property smt enabled of <cpupackage> %}

If detectable, returns true if the cpupackage is using SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms)

{% property thread of <cpupackage> %}

Returns the number of SMT threads (Simultaneous multithreading, called Hyper-Threading on some platforms) in a single cpupackage (a single socket or physical CPU)

{% type hertz %}

The &lt;hertz&gt; object is useful to measure clock cycles. It is used primarily to measure clock frequency by the speed of the processor inspector. Hertz objects have a resolution of 1 hertz and are stored internally as a 64 bit signed integer.

#### Properties of hertz

{% property absolute value of <hertz> %}

Returns the positive value of the hertz object.

{% property extrema of <hertz> %}

Returns the minimum and maximum extreme values of the given list of &lt;hertz&gt; types.

{% property maximum of <hertz> %}

Returns the maximum value from a list of &lt;hertz&gt; types.

{% property minimum of <hertz> %}

Returns the minimum value from a list of &lt;hertz&gt; types.

{% property significant digits <integer> of <hertz> %}

Returns the value of a hertz object with &lt;integer&gt; significant digits (for example. significant digits 3 of 1235569 = 1240000).

{% property unique value of <hertz> %}

Returns the unique values of a given list of &lt;hertz&gt; types, removing duplicates and sorting by value.

#### Casts of hertz

{% cast <hertz> as string %}

Returns a string formatted &quot;##### hertz&quot;.

{% type hertz with multiplicity %}

The &lt;hertz with multiplicity&gt; inspectors deal with hertz arrays, allowing you to extract unique hertz values and count them. 

#### Properties of hertz with multiplicity

{% property multiplicity of <hertz with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;hertz&gt; types.

{% type processor %}

The &lt;processor&gt; object is used to identify the number and properties of processors in the system. You can identify the manufacturer of the CPU as well as the speed and other features. Many operating systems provide for multiple processors. You can inspect any one of them by their ordinal number.For more information on Windows processors, see the Resource section at the end of this guide.

#### Properties of processor

{% property adjustment <integer> of <processor> %}

s390 processors only. Returns the processor Adjustment Way (guest performance)

{% property altivec of <processor> %}

No documentation exists for this property.

{% property architected of <processor> %}

No documentation exists for this property.

{% property bogomips of <processor> %}

Returns the Bogomips of the specified processor, which provides a rough indication of its speed.

{% property brand id of <processor> %}

This inspector returns the integer known as the brand id, returned from the assembly language cpuid extended instruction.

{% property brand string of <processor> %}

Returns the vendor-defined brand names for newer processors.

{% property capability of <processor> %}

s390 processors only. Returns the capability code of the processor

{% property coma bug of <processor> %}

Returns TRUE if the specified processor is afflicted by the coma bug. The coma bug afflicts certain Cyrix CPUs, causing them to occasionally lock up. The affected CPUs include the Cyrix/IBM 6x86, 6x86L, and 6x86MX.

{% property cpuid level of <processor> %}

Returns an integer corresponding to the cpuid level for the given processor.

{% property cpus configured of <processor> %}

s390 processors only. Returns the number of processors configured for the system

{% property cpus reserved of <processor> %}

s390 processors only. Returns the number of processors reserved for the system

{% property cpus standby of <processor> %}

s390 processors only. Returns the number of processors in standby for the system

{% property cpus total of <processor> %}

s390 processors only. Returns the number of total processors for the system

{% property decimal fpu of <processor> %}

No documentation exists for this property.

{% property extended family of <processor> %}

Integer representing the extended family of CPU. See the notes for the meaning of these numbers.

{% property extended feature mask of <processor> %}

Returns a mask of the extended feature bits of an x86 processor

{% property extended model of <processor> %}

Integer representing the extended model of CPU. See the notes for the meaning of these numbers.

{% property f00f bug of <processor> %}

Returns TRUE if the specified processor is afflicted by the f00f bug. This bug is named after the first two of a four-byte assembly language sequence that can freeze up x86 Pentium processors.

{% property family name of <processor> %}

Returns the family name of the CPU, dependent on the type of client computer, for instance Pentium, Sparc, PowerPC G4, etcetera.

{% property family of <processor> %}

Returns an integer representing the family of the CPU. See the notes for the meaning of these numbers. As of BES 6.0, this inspector returns a string on Solaris and AIX computers.

{% property fdiv bug of <processor> %}

Returns TRUE if the specified processor is afflicted by the fdiv bug, which occasionally causes incorrect floating point division answers.

{% property feature mask of <processor> %}

Returns the feature flags from the CPUID instruction. The feature mask contains bits that identify extra features the processor may provide such as MMX support or if the Processor ID is enabled on the processor.

{% property flag list of <processor> %}

Returns a string containing the processor flags. To check if a processor has a particular flag, use the &#39;contains&#39; operator.

{% property fpu exception of <processor> %}

Returns TRUE if the fpu exception has occurred on this processor.

{% property fpu of <processor> %}

Returns TRUE if the specified processor contains a floating point unit.

{% property fputype of <processor> %}

Returns pi_fputypes, a string containing the comma-separated types of floating-point units (FPUs) attached to the processor. This string will be empty if no FPU is attached.

{% property hlt bug of <processor> %}

Returns TRUE if the specified processor is afflicted by the hlt bug.

{% property ic snoop of <processor> %}

No documentation exists for this property.

{% property id of <processor> %}

Returns an integer corresponding to the ID of the specified processor.

{% property index of <processor> %}

Returns the ordinal number of the processor on a multi processor machine.

{% property lpar adjustment of <processor> %}

s390 processors only. Returns the LPAR agjustment for the processor

{% property lpar characteristics of <processor> %}

s390 processors only. Returns the characteristic of the processor. ie: Shared

{% property lpar cpus configured of <processor> %}

s390 processors only. Returns the number of processors configured for the LPAR

{% property lpar cpus dedicated of <processor> %}

s390 processors only. Returns the number of processors dedicated for the LPAR

{% property lpar cpus reserved of <processor> %}

s390 processors only. Returns the number of processors reserved for the LPAR

{% property lpar cpus shared of <processor> %}

s390 processors only. Returns the number of processors shared for the LPAR

{% property lpar cpus standby of <processor> %}

s390 processors only. Returns the number of processors in standby for the LPAR

{% property lpar cpus total of <processor> %}

s390 processors only. Returns the total number of processors for the LPAR

{% property lpar name of <processor> %}

s390 processors only. Returns the name of the processor for the LPAR

{% property lpar number of <processor> %}

s390 processors only. Returns the LPAR number for this processor

{% property machine name of <processor> %}

No documentation exists for this property.

{% property machine serial number of <processor> %}

s390 processors only. Returns the serial number of the processor

{% property mmu of <processor> %}

No documentation exists for this property.

{% property model name of <processor> %}

Returns a string containing the name of the processor model.

{% property model of <processor> %}

Returns the model number of the CPU as a string.Note: On Windows and Linux platforms, this inspector returns an integer.

{% property revision of <processor> %}

No documentation exists for this property.

{% property run mode of <processor> %}

No documentation exists for this property.

{% property sep bug of <processor> %}

Returns TRUE if the given processor improperly reports the value of its SEP (Sysenter/sysexit Present) flag.

{% property sequence code of <processor> %}

s390 processors only. Returns the Sequence Code for the processor.

{% property smt of <processor> %}

No documentation exists for this property.

{% property spe double of <processor> %}

No documentation exists for this property.

{% property spe float of <processor> %}

No documentation exists for this property.

{% property spe of <processor> %}

No documentation exists for this property.

{% property speed of <processor> %}

Returns the speed of the processor in Hertz.

{% property state of <processor> %}

Returns the current processor state, which can be &quot;online&quot;, &quot;offline&quot;, &quot;poweroff&quot;, or &quot;unknown&quot;.

{% property stepping of <processor> %}

Returns the stepping number of the processor. This item can be helpful in identifying very specific processor features or limitations.

{% property type of <processor> %}

Numeric type of the CPU. Values include: 0 - standard1 - overdrive2 - dual CPU capable3 - reservedNote: this inspector returns an &lt;integer&gt; type as on Windows platforms.

{% property vendor name of <processor> %}

The manufacturer of the CPU. Names include: GenuineIntelAuthenticAMDCyrixInsteadCentaurHaulsAmbiguousCPU.

{% property version of <processor> %}

The hardware version of the cpu.

{% property vm adjustment of <processor> %}

s390 processors only. Returns the VM Adjustment for the processor

{% property vm control program of <processor> %}

s390 processors only. Returns the VM Control Program for the processor. ie: z/VM 5.2.0

{% property vm cpus configured of <processor> %}

s390 processors only. Returns the number of processors configured for the VM

{% property vm cpus reserved of <processor> %}

s390 processors only. Returns the number of processors configured for the VM

{% property vm cpus standby of <processor> %}

s390 processors only. Returns the number of processors in standby for the VM

{% property vm cpus total of <processor> %}

s390 processors only. Returns the total number of processors for the VM

{% property vm name of <processor> %}

s390 processors only. Returns the name of the VM

{% property wp of <processor> %}

Returns TRUE if the specified processor has the WP feature.


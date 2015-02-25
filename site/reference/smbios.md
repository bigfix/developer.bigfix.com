# smbios

The SMBIOS (System Management BIOS) is a database containing information about the system hardware and firmware. It consists of a series of structures that each contain a logical grouping of basic system information such as processor, baseboard, memory, ports, slots, and more. Each structure, in turn, contains specific named values that can be interrogated. For instance, you easily access information about the client processor chip, including the manufacturer, speed and more by accessing the desired value of the &#39;processor information&#39; structure. These SMBIOS inspectors are based on DMTF Standard version 2.6.1. For a complete listing of the SMBIOS structures and the strings used to query them, refer to the SMBIOS inspectors in the Resources section at the end of this guide.

# structure [string] of [smbios]

Returns the smbios structure corresponding to the specified string as defined in the &#39;Type&#39; entries in the SMBIOS specification.

# structure of [smbios]

A property containing information pertaining to an instance of a given smbios structure as defined in the &#39;Type&#39; entries in the SMBIOS specification. This is implemented as a named iterated property.

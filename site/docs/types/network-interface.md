# type: network interface

The network interface object describes a generic network interface, and has information about the name and family of that interface. On the Mac these are commonly of type AF_INET, AF_LINK and AF_INET6.

# family name of &lt;network interface&gt;

Returns the name of the interface family. There are about 35 of these, but the most common is AF_INET, or normal IP interface. AF_LINK is used for wifi devices and AF_INET6 is for IP v6 addresses. There are specific inspectors for AF_INET (ip interface) and AF_LINK (link interface). The family name of inspector returns this type as a string corresponding to the #define value in the header file.

# family of &lt;network interface&gt;

Returns an family designator of the address family (i.e., 2=AFI_NET).

# name of &lt;network interface&gt;

Returns the name of the network interface object.

# up of &lt;network interface&gt;

Returns `True` if the specified network interface is currently working. Interfaces like wifi may be turned it off to save power, but this inspector will still tell you if it is active.

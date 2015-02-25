# smf property

No documentation exists.

# fmri of [smf property]

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of an smf property. The FMRI is used to identify a specific instance for administrative use.

# name of [smf property]

Returns the name of an smf property. Each smf property represents a setting as a name/value pair.

# type of [smf property]

Returns a string identifying the type of an smf property. These types can have values of SCF_TYPE_INVALID, SCF_TYPE_BOOLEAN, SCF_TYPE_COUNT, SCF_TYPE_INTEGER, SCF_TYPE_TIME, SCF_TYPE_ASTRING, SCF_TYPE_OPAQUE, SCF_TYPE_USTRING, SCF_TYPE_URI, SCF_TYPE_FMRI, SCF_TYPE_HOST, SCF_TYPE_HOSTNAME, SCF_TYPE_NET_ADDR_V4, SCF_TYPE_NET_ADDR_V6.

# value of [smf property]

Returns the value of an smf property. Each smf property represents a setting as a name/value pair. Although most smf property inspectors are only assigned a single value, it is possible for one to be assigned multiple values of the same type. The types that an smf value can have are BOOLEAN, COUNT, INTEGER, TIME, OPAQUE, ASTRING, USTRING, URI, HOST, FMRI, HOSTNAME, NET_ADDR_V4, and NET_ADDR_V6.

# [smf property] as string

Returns a string representation of an smf property object. Each smf property represents a setting as a name/value pair. This string representation is just the name portion of the property.

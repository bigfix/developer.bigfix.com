# type: smf value

No documentation exists.

# type of &lt;smf value&gt; : string

Returns a string representation of the type of an smf value. These types can have values of SCF_TYPE_INVALID, SCF_TYPE_BOOLEAN, SCF_TYPE_COUNT, SCF_TYPE_INTEGER, SCF_TYPE_TIME, SCF_TYPE_ASTRING, SCF_TYPE_OPAQUE, SCF_TYPE_USTRING, SCF_TYPE_URI, SCF_TYPE_FMRI, SCF_TYPE_HOST, SCF_TYPE_HOSTNAME, SCF_TYPE_NET_ADDR_V4, SCF_TYPE_NET_ADDR_V6.

# &lt;smf value&gt; as boolean : boolean

Returns the boolean state for values of type SCF_TYPE_BOOLEAN. Returns type conversion error for other types.

# &lt;smf value&gt; as integer : integer

Returns the numeric value for values of type SCF_TYPE_INTEGER or SCF_TYPE_COUNT. Returns type conversion error for other types.

# &lt;smf value&gt; as smf time : smf time

Returns an smf time object for values of type SCF_TYPE_TIME. Returns type conversion error for other types.

# &lt;smf value&gt; as string : string

Returns a string representation of the value for all types of smf values.

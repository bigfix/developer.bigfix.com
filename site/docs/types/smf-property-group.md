# type: smf property group

No documentation exists.

# fmri of &lt;smf property group&gt;

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a property group. The FMRI is used to identify a specific property group for administrative use.

# name of &lt;smf property group&gt;

Returns the name of a property group. An smf property group is a group of name/value pairs that represent configuration settings.

# nonpersistent flag of &lt;smf property group&gt;

Returns a boolean value indicating that the property group configuration will not be retained beyond a system shutdown or reboot.

# parent instance of &lt;smf property group&gt;

Returns the specific service instance to which this property group belongs.

# parent service of &lt;smf property group&gt;

Returns the service to which this property group belongs.

# parent snapshot part of &lt;smf property group&gt;

Returns an object that represents a part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

# property &lt;string&gt; of &lt;smf property group&gt;

Returns the specified smf property object of the property group. Each smf property represents a setting as a name/value pair.

# property of &lt;smf property group&gt;

Iterates over the smf properties of a property group. Each smf property represents a setting as a name/value pair.

# type of &lt;smf property group&gt;

Returns a string representing the type of the property group. Each property group has a type corresponding to its purpose. The core property group types are method, dependency, application, and framework. Additional property group types can be introduced, provided they conform to the extended naming convention in smf(5).

# &lt;smf property group&gt; as string

A string representation of an smf property group. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

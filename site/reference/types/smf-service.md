# type: smf service

No documentation exists.

# fmri of &lt;smf service&gt; : smf fmri

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a service. The FMRI is used to identify a service for administrative use.

# instance &lt;string&gt; of &lt;smf service&gt; : smf instance

Returns the specified instance of an smf service. An smf instance represents a particular piece of server software (such as &#39;Apache&#39;).

# instance of &lt;smf service&gt; : smf instance

Iterates over the instances of a service. An smf instance represents a particular piece of server software (such as &#39;Apache&#39;).

# name of &lt;smf service&gt; : string

Returns the name of the service.

# property group &lt;string&gt; of &lt;smf service&gt; : smf property group

Returns the specified property group of a service. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

# property group of &lt;smf service&gt; : smf property group

Iterates over the property groups of a service. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

# &lt;smf service&gt; as string : string

Returns a string representation of an smf service object. This is the same as the name of the service.

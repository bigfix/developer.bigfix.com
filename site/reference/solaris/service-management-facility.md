---
title: service-management-facility
---

{% type smf %}

No documentation exists for this type.

#### Properties of smf

{% property service <string> of <smf> %}

Returns the smf service object identified by the specified name. Services have unique names, so this is a singular property. An smf service inspector represents a type of service (such as &#39;web server&#39;) without specifying a particular piece of server software (such as &#39;Apache&#39;).

{% property service of <smf> %}

Iterates over all installed smf service objects on the local machine.

{% type smf fmri %}

No documentation exists for this type.

#### Casts of smf fmri

{% cast <smf fmri> as string %}

Returns a string representation of the smf fmri object. The string has the general form &#39;svc:&lt;service name&gt;:&lt;service instance&gt;&#39;. For example &#39;svc:/network/login:rlogin&#39;, where &#39;svc&#39; signifies an SMF service, &#39;/network/login&#39; is the service name, and &#39;rlogin&#39; is the service instance.

{% type smf instance %}

No documentation exists for this type.

#### Properties of smf instance

{% property fmri of <smf instance> %}

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a service instance. The FMRI is used to identify a specific instance of a service for administrative use.

{% property name of <smf instance> %}

Returns the name of the smf instance object. This is the same as the end component of the FMRI (&#39;Fault Management Resource Identifier&#39;) of the instance.

{% property parent service of <smf instance> %}

Returns the smf service to which this instance belongs. Each service can have multiple instances which can share configuration with each other as well as maintain individual configuration and  characteristics.

{% property property group <string> of <smf instance> %}

Returns the specified smf property group of a particular service instance. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

{% property property group of <smf instance> %}

Iterates over property groups of a service instance. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

{% property snapshot <string> of <smf instance> %}

Returns the specified smf snapshot of a service instance. A snapshot is an unchanging picture of the full set of  property  groups  associated  with  an  instance. Snapshots are automatically created and managed by the Service Management Facility. A snapshot consists of a set of snaplevels, each of which holds copies of the property groups associated with an instance or service in the resolution path of the base instance. Typically, there is one snaplevel for the instance and one for the instance&#39;s parent service.

{% property snapshot of <smf instance> %}

Iterates over the snapshots of a service instance. A snapshot is an unchanging picture of the full set of  property  groups  associated  with  an  instance. Snapshots are automatically created and managed by the Service Management Facility. A snapshot consists of a set of snaplevels, each of which holds copies of the property groups associated with an instance or service in the resolution path of the base instance. Typically, there is one snaplevel for the instance and one for the instance&#39;s parent service.

#### Casts of smf instance

{% cast <smf instance> as string %}

Returns a string representation of the smf instance object. This is the same as the end component of the FMRI (&#39;Fault Management Resource Identifier&#39;) of the instance, and the same as the name of the instance.

{% type smf property %}

No documentation exists for this type.

#### Properties of smf property

{% property fmri of <smf property> %}

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of an smf property. The FMRI is used to identify a specific instance for administrative use.

{% property name of <smf property> %}

Returns the name of an smf property. Each smf property represents a setting as a name/value pair.

{% property type of <smf property> %}

Returns a string identifying the type of an smf property. These types can have values of SCF_TYPE_INVALID, SCF_TYPE_BOOLEAN, SCF_TYPE_COUNT, SCF_TYPE_INTEGER, SCF_TYPE_TIME, SCF_TYPE_ASTRING, SCF_TYPE_OPAQUE, SCF_TYPE_USTRING, SCF_TYPE_URI, SCF_TYPE_FMRI, SCF_TYPE_HOST, SCF_TYPE_HOSTNAME, SCF_TYPE_NET_ADDR_V4, SCF_TYPE_NET_ADDR_V6.

{% property value of <smf property> %}

Returns the value of an smf property. Each smf property represents a setting as a name/value pair. Although most smf property inspectors are only assigned a single value, it is possible for one to be assigned multiple values of the same type. The types that an smf value can have are BOOLEAN, COUNT, INTEGER, TIME, OPAQUE, ASTRING, USTRING, URI, HOST, FMRI, HOSTNAME, NET_ADDR_V4, and NET_ADDR_V6.

#### Casts of smf property

{% cast <smf property> as string %}

Returns a string representation of an smf property object. Each smf property represents a setting as a name/value pair. This string representation is just the name portion of the property.

{% type smf property group %}

No documentation exists for this type.

#### Properties of smf property group

{% property fmri of <smf property group> %}

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a property group. The FMRI is used to identify a specific property group for administrative use.

{% property name of <smf property group> %}

Returns the name of a property group. An smf property group is a group of name/value pairs that represent configuration settings.

{% property nonpersistent flag of <smf property group> %}

Returns a boolean value indicating that the property group configuration will not be retained beyond a system shutdown or reboot.

{% property parent instance of <smf property group> %}

Returns the specific service instance to which this property group belongs.

{% property parent service of <smf property group> %}

Returns the service to which this property group belongs.

{% property parent snapshot part of <smf property group> %}

Returns an object that represents a part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

{% property property <string> of <smf property group> %}

Returns the specified smf property object of the property group. Each smf property represents a setting as a name/value pair.

{% property property of <smf property group> %}

Iterates over the smf properties of a property group. Each smf property represents a setting as a name/value pair.

{% property type of <smf property group> %}

Returns a string representing the type of the property group. Each property group has a type corresponding to its purpose. The core property group types are method, dependency, application, and framework. Additional property group types can be introduced, provided they conform to the extended naming convention in smf(5).

#### Casts of smf property group

{% cast <smf property group> as string %}

A string representation of an smf property group. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

{% type smf service %}

No documentation exists for this type.

#### Properties of smf service

{% property fmri of <smf service> %}

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a service. The FMRI is used to identify a service for administrative use.

{% property instance <string> of <smf service> %}

Returns the specified instance of an smf service. An smf instance represents a particular piece of server software (such as &#39;Apache&#39;).

{% property instance of <smf service> %}

Iterates over the instances of a service. An smf instance represents a particular piece of server software (such as &#39;Apache&#39;).

{% property name of <smf service> %}

Returns the name of the service.

{% property property group <string> of <smf service> %}

Returns the specified property group of a service. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

{% property property group of <smf service> %}

Iterates over the property groups of a service. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

#### Casts of smf service

{% cast <smf service> as string %}

Returns a string representation of an smf service object. This is the same as the name of the service.

{% type smf snapshot %}

No documentation exists for this type.

#### Properties of smf snapshot

{% property instance part of <smf snapshot> %}

Represents an instance part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

{% property name of <smf snapshot> %}

Returns the name of an smf snapshot.

{% property parent instance of <smf snapshot> %}

Returns the service instance to which this snapshot belongs.

{% property part of <smf snapshot> %}

Represents a part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

{% property service part of <smf snapshot> %}

Represents a service part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

#### Casts of smf snapshot

{% cast <smf snapshot> as string %}

A string representation of an smf snapshot. This is the same as the name of the snapshot.

{% type smf snapshot part %}

No documentation exists for this type.

#### Properties of smf snapshot part

{% property parent snapshot of <smf snapshot part> %}

Returns the snapshot to which this snapshot part belongs.

{% property property group <string> of <smf snapshot part> %}

Returns the specified property group of a snapshot part.

{% property property group of <smf snapshot part> %}

Iterates over the property groups of a snapshot part.

{% type smf time %}

No documentation exists for this type.

#### Properties of smf time

{% property nanoseconds value of <smf time> %}

Returns a number corresponding to the nanoseconds portion of an smf time.

{% property seconds value of <smf time> %}

Returns a number corresponding to the seconds portion of an smf time.

#### Casts of smf time

{% cast <smf time> as string %}

Returns a string representation of an smf time. An smf time consists of a seconds portion and a nanoseconds portion.

{% type smf value %}

No documentation exists for this type.

#### Properties of smf value

{% property type of <smf value> %}

Returns a string representation of the type of an smf value. These types can have values of SCF_TYPE_INVALID, SCF_TYPE_BOOLEAN, SCF_TYPE_COUNT, SCF_TYPE_INTEGER, SCF_TYPE_TIME, SCF_TYPE_ASTRING, SCF_TYPE_OPAQUE, SCF_TYPE_USTRING, SCF_TYPE_URI, SCF_TYPE_FMRI, SCF_TYPE_HOST, SCF_TYPE_HOSTNAME, SCF_TYPE_NET_ADDR_V4, SCF_TYPE_NET_ADDR_V6.

#### Casts of smf value

{% cast <smf value> as boolean %}

Returns the boolean state for values of type SCF_TYPE_BOOLEAN. Returns type conversion error for other types.

{% cast <smf value> as integer %}

Returns the numeric value for values of type SCF_TYPE_INTEGER or SCF_TYPE_COUNT. Returns type conversion error for other types.

{% cast <smf value> as smf time %}

Returns an smf time object for values of type SCF_TYPE_TIME. Returns type conversion error for other types.

{% cast <smf value> as string %}

Returns a string representation of the value for all types of smf values.


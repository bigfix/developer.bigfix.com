---
title: service-management-facility
---

## smf value

No documentation exists for this type.

#### &lt;smf value&gt; as string : string

Returns a string representation of the value for all types of smf values.

#### &lt;smf value&gt; as smf time : smf time

Returns an smf time object for values of type SCF_TYPE_TIME. Returns type conversion error for other types.

#### &lt;smf value&gt; as integer : integer

Returns the numeric value for values of type SCF_TYPE_INTEGER or SCF_TYPE_COUNT. Returns type conversion error for other types.

#### &lt;smf value&gt; as boolean : boolean

Returns the boolean state for values of type SCF_TYPE_BOOLEAN. Returns type conversion error for other types.

#### type of &lt;smf value&gt; : string

Returns a string representation of the type of an smf value. These types can have values of SCF_TYPE_INVALID, SCF_TYPE_BOOLEAN, SCF_TYPE_COUNT, SCF_TYPE_INTEGER, SCF_TYPE_TIME, SCF_TYPE_ASTRING, SCF_TYPE_OPAQUE, SCF_TYPE_USTRING, SCF_TYPE_URI, SCF_TYPE_FMRI, SCF_TYPE_HOST, SCF_TYPE_HOSTNAME, SCF_TYPE_NET_ADDR_V4, SCF_TYPE_NET_ADDR_V6.

## smf time

No documentation exists for this type.

#### &lt;smf time&gt; as string : string

Returns a string representation of an smf time. An smf time consists of a seconds portion and a nanoseconds portion.

#### seconds value of &lt;smf time&gt; : integer

Returns a number corresponding to the seconds portion of an smf time.

#### nanoseconds value of &lt;smf time&gt; : integer

Returns a number corresponding to the nanoseconds portion of an smf time.

## smf snapshot part

No documentation exists for this type.

#### property group of &lt;smf snapshot part&gt; : smf property group

Iterates over the property groups of a snapshot part.

#### property group &lt;string&gt; of &lt;smf snapshot part&gt; : smf property group

Returns the specified property group of a snapshot part.

#### parent snapshot of &lt;smf snapshot part&gt; : smf snapshot

Returns the snapshot to which this snapshot part belongs.

## smf snapshot

No documentation exists for this type.

#### &lt;smf snapshot&gt; as string : string

A string representation of an smf snapshot. This is the same as the name of the snapshot.

#### service part of &lt;smf snapshot&gt; : smf snapshot part

Represents a service part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

#### part of &lt;smf snapshot&gt; : smf snapshot part

Represents a part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

#### parent instance of &lt;smf snapshot&gt; : smf instance

Returns the service instance to which this snapshot belongs.

#### name of &lt;smf snapshot&gt; : string

Returns the name of an smf snapshot.

#### instance part of &lt;smf snapshot&gt; : smf snapshot part

Represents an instance part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

## smf service

No documentation exists for this type.

#### &lt;smf service&gt; as string : string

Returns a string representation of an smf service object. This is the same as the name of the service.

#### property group of &lt;smf service&gt; : smf property group

Iterates over the property groups of a service. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

#### property group &lt;string&gt; of &lt;smf service&gt; : smf property group

Returns the specified property group of a service. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

#### name of &lt;smf service&gt; : string

Returns the name of the service.

#### instance of &lt;smf service&gt; : smf instance

Iterates over the instances of a service. An smf instance represents a particular piece of server software (such as &#39;Apache&#39;).

#### instance &lt;string&gt; of &lt;smf service&gt; : smf instance

Returns the specified instance of an smf service. An smf instance represents a particular piece of server software (such as &#39;Apache&#39;).

#### fmri of &lt;smf service&gt; : smf fmri

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a service. The FMRI is used to identify a service for administrative use.

## smf property group

No documentation exists for this type.

#### &lt;smf property group&gt; as string : string

A string representation of an smf property group. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

#### type of &lt;smf property group&gt; : string

Returns a string representing the type of the property group. Each property group has a type corresponding to its purpose. The core property group types are method, dependency, application, and framework. Additional property group types can be introduced, provided they conform to the extended naming convention in smf(5).

#### property of &lt;smf property group&gt; : smf property

Iterates over the smf properties of a property group. Each smf property represents a setting as a name/value pair.

#### property &lt;string&gt; of &lt;smf property group&gt; : smf property

Returns the specified smf property object of the property group. Each smf property represents a setting as a name/value pair.

#### parent snapshot part of &lt;smf property group&gt; : smf snapshot part

Returns an object that represents a part of an smf snapshot. Each snapshot has two parts: a &#39;service part&#39; and an &#39;instance part&#39;.

#### parent service of &lt;smf property group&gt; : smf service

Returns the service to which this property group belongs.

#### parent instance of &lt;smf property group&gt; : smf instance

Returns the specific service instance to which this property group belongs.

#### nonpersistent flag of &lt;smf property group&gt; : boolean

Returns a boolean value indicating that the property group configuration will not be retained beyond a system shutdown or reboot.

#### name of &lt;smf property group&gt; : string

Returns the name of a property group. An smf property group is a group of name/value pairs that represent configuration settings.

#### fmri of &lt;smf property group&gt; : smf fmri

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a property group. The FMRI is used to identify a specific property group for administrative use.

## smf property

No documentation exists for this type.

#### &lt;smf property&gt; as string : string

Returns a string representation of an smf property object. Each smf property represents a setting as a name/value pair. This string representation is just the name portion of the property.

#### value of &lt;smf property&gt; : smf value

Returns the value of an smf property. Each smf property represents a setting as a name/value pair. Although most smf property inspectors are only assigned a single value, it is possible for one to be assigned multiple values of the same type. The types that an smf value can have are BOOLEAN, COUNT, INTEGER, TIME, OPAQUE, ASTRING, USTRING, URI, HOST, FMRI, HOSTNAME, NET_ADDR_V4, and NET_ADDR_V6.

#### type of &lt;smf property&gt; : string

Returns a string identifying the type of an smf property. These types can have values of SCF_TYPE_INVALID, SCF_TYPE_BOOLEAN, SCF_TYPE_COUNT, SCF_TYPE_INTEGER, SCF_TYPE_TIME, SCF_TYPE_ASTRING, SCF_TYPE_OPAQUE, SCF_TYPE_USTRING, SCF_TYPE_URI, SCF_TYPE_FMRI, SCF_TYPE_HOST, SCF_TYPE_HOSTNAME, SCF_TYPE_NET_ADDR_V4, SCF_TYPE_NET_ADDR_V6.

#### name of &lt;smf property&gt; : string

Returns the name of an smf property. Each smf property represents a setting as a name/value pair.

#### fmri of &lt;smf property&gt; : smf fmri

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of an smf property. The FMRI is used to identify a specific instance for administrative use.

## smf instance

No documentation exists for this type.

#### &lt;smf instance&gt; as string : string

Returns a string representation of the smf instance object. This is the same as the end component of the FMRI (&#39;Fault Management Resource Identifier&#39;) of the instance, and the same as the name of the instance.

#### snapshot of &lt;smf instance&gt; : smf snapshot

Iterates over the snapshots of a service instance. A snapshot is an unchanging picture of the full set of  property  groups  associated  with  an  instance. Snapshots are automatically created and managed by the Service Management Facility. A snapshot consists of a set of snaplevels, each of which holds copies of the property groups associated with an instance or service in the resolution path of the base instance. Typically, there is one snaplevel for the instance and one for the instance&#39;s parent service.

#### snapshot &lt;string&gt; of &lt;smf instance&gt; : smf snapshot

Returns the specified smf snapshot of a service instance. A snapshot is an unchanging picture of the full set of  property  groups  associated  with  an  instance. Snapshots are automatically created and managed by the Service Management Facility. A snapshot consists of a set of snaplevels, each of which holds copies of the property groups associated with an instance or service in the resolution path of the base instance. Typically, there is one snaplevel for the instance and one for the instance&#39;s parent service.

#### property group of &lt;smf instance&gt; : smf property group

Iterates over property groups of a service instance. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

#### property group &lt;string&gt; of &lt;smf instance&gt; : smf property group

Returns the specified smf property group of a particular service instance. An smf property group is a group of name/value pairs that represent configuration settings. Thus, there are some configuration settings that are applicable in general to a particular type of service, and others that are applicable only to a particular instance of a service.

#### parent service of &lt;smf instance&gt; : smf service

Returns the smf service to which this instance belongs. Each service can have multiple instances which can share configuration with each other as well as maintain individual configuration and  characteristics.

#### name of &lt;smf instance&gt; : string

Returns the name of the smf instance object. This is the same as the end component of the FMRI (&#39;Fault Management Resource Identifier&#39;) of the instance.

#### fmri of &lt;smf instance&gt; : smf fmri

Returns an smf fmri object representing the &#39;Fault Management Resource Identifier&#39; of a service instance. The FMRI is used to identify a specific instance of a service for administrative use.

## smf fmri

No documentation exists for this type.

#### &lt;smf fmri&gt; as string : string

Returns a string representation of the smf fmri object. The string has the general form &#39;svc:&lt;service name&gt;:&lt;service instance&gt;&#39;. For example &#39;svc:/network/login:rlogin&#39;, where &#39;svc&#39; signifies an SMF service, &#39;/network/login&#39; is the service name, and &#39;rlogin&#39; is the service instance.

## smf

No documentation exists for this type.

#### service of &lt;smf&gt; : smf service

Iterates over all installed smf service objects on the local machine.

#### service &lt;string&gt; of &lt;smf&gt; : smf service

Returns the smf service object identified by the specified name. Services have unique names, so this is a singular property. An smf service inspector represents a type of service (such as &#39;web server&#39;) without specifying a particular piece of server software (such as &#39;Apache&#39;).


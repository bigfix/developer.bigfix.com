---
title: general
---

{% type apar %}

No documentation exists for this type.

#### Properties of apar

{% property abstract of <apar> %}

Returns a string containing a short description of the APAR.

{% property fileset version requirement <string> of <apar> %}

Returns the fileset version requirement for the APAR if a fileset with the LPP name that matches the string is a requirement for the APAR.

{% property fileset version requirement of <apar> %}

Returns all the required filesets version requirements for the APAR.

{% property installed satisfied fileset version requirement of <apar> %}

Returns all the fileset version requirements for the APAR that are installed and meet the version requirement.

{% property installed unsatisfied fileset version requirement of <apar> %}

Returns all the fileset version requirements for the APAR that are installed but do not meet the version requirement.

{% property name of <apar> %}

Returns a string containing the APAR number.

{% property symptom of <apar> %}

Returns a string with the visible symptoms exhibited by the APAR. The string may be empty.

{% property uninstalled fileset version requirement of <apar> %}

Returns all the fileset version requirements for the APAR that are not installed.

#### Casts of apar

{% cast <apar> as string %}

Returns a string containing the APAR number.

{% type fileset %}

The &lt;fileset&gt; objects represent the set of files required for installing a software package.

#### Properties of fileset

{% property description of <fileset> %}

Returns a description of a set of installation files.

{% property lpp_name of <fileset> %}

Licensed Program Product(s) of the fileset.Example: (lpp_name of it &amp; &quot; ver = &quot; &amp; version of it as string) of filesets matching &quot;lpp_name = &#39;bos.terminfo.rte&#39;&quot; of object repository - Returns a formatted list of filesets with the specified Licensed Program Product name.

{% property product of <fileset> %}

Returns the product corresponding to the specified fileset.

{% property root part of <fileset> %}

Returns the machine-specific portions of the specified fileset (the root part), which contains the part of the product that cannot be shared among machines -- each client must have its own copy. For a standard system, files in the root part are stored in the root (/) file tree.

{% property share part of <fileset> %}

Returns the share part of the specified fileset.

{% property update of <fileset> %}

Returns the update number for the specified fileset.Example: updates of filesets matching &quot;lpp_name = &#39;bos.terminfo.rte&#39;&quot; of object repository - Returns the update numbers of the specified filesets.

{% property usr part of <fileset> %}

Returns the machine-shareable portions of the specified fileset (the usr part), which contains the part of the product that can be shared among several machines with compatible hardware architectures. The usr part of the fileset contains files that reside in the /usr or /opt file system.

{% property version of <fileset> %}

Returns the version of the specified fileset.

{% property version record of <fileset> %}

Returns the version record corresponding to the specified fileset as a fileset version record.

#### Casts of fileset

{% cast <fileset> as string %}

Casts a fileset as a string type.

{% type fileset part %}

No documentation exists for this type.

{% type fileset version record %}

No documentation exists for this type.

#### Properties of fileset version record

{% property extrema of <fileset version record> %}

Returns a tuple with the lowest and highest fileset version records from a collection for fileset version records.

{% property fix_part of <fileset version record> %}

Returns the fourth component from a fileset version in the format &quot;ver.rel.mod.(fix)&quot;.

{% property maximum of <fileset version record> %}

Returns the highest fileset version record from a collection for fileset version records.

{% property minimum of <fileset version record> %}

Returns the lowest fileset version record from a collection for fileset version records.

{% property mod_part of <fileset version record> %}

Returns the third component from a fileset version in the format &quot;ver.rel.(mod).fix&quot;.

{% property rel_part of <fileset version record> %}

Returns the second component from a fileset version in the format &quot;ver.(rel).mod.fix&quot;.

{% property unique value of <fileset version record> %}

Returns a list of all unique fileset version records along with their respective counts.

{% property ver_part of <fileset version record> %}

Returns the first component from a fileset version in the format &quot;(ver).rel.mod.fix&quot;.

#### Casts of fileset version record

{% cast <fileset version record> as fileset version record %}

A self cast, used only for simplifying relevance.

{% cast <fileset version record> as string %}

Returns a string containing the version of the fileset in the format &quot;ver.rel.mod.fix&quot;.

{% type fileset version record with multiplicity %}

No documentation exists for this type.

#### Properties of fileset version record with multiplicity

{% property multiplicity of <fileset version record with multiplicity> %}

Returns an the number of times a fileset version record occurs.

{% type fileset version requirement %}

No documentation exists for this type.

#### Properties of fileset version requirement

{% property latest installed fileset of <fileset version requirement> %}

Returns the filesets that are installed with the same LPP name, regardless of version.

{% property lpp_name of <fileset version requirement> %}

Returns a string with the LPP name of the fileset.

{% property satisfying fileset of <fileset version requirement> %}

Returns the filesets that are installed with the same LPP name and a greater or equal version.

{% property version record of <fileset version requirement> %}

Returns the version of the fileset requirement.

#### Casts of fileset version requirement

{% cast <fileset version requirement> as fileset version requirement %}

A self cast, used only for simplifying relevance.

{% cast <fileset version requirement> as string %}

Returns a string contain the LLP name and the version of a fileset separated by a space.

{% type kernel_extension %}

No documentation exists for this type.

#### Properties of kernel_extension

{% property file of <kernel_extension> %}

No documentation exists for this property.

{% property size of <kernel_extension> %}

No documentation exists for this property.

{% property text address of <kernel_extension> %}

No documentation exists for this property.

#### Casts of kernel_extension

{% cast <kernel_extension> as string %}

No documentation exists for this cast.

{% type message_catalog %}

No documentation exists for this type.

#### Properties of message_catalog

{% property set <integer> of <message_catalog> %}

No documentation exists for this property.

{% type message_catalog_set %}

No documentation exists for this type.

#### Properties of message_catalog_set

{% property message <integer> of <message_catalog_set> %}

No documentation exists for this property.

{% type network_option %}

No documentation exists for this type.

#### Properties of network_option

{% property name of <network_option> %}

No documentation exists for this property.

{% property value of <network_option> %}

No documentation exists for this property.

#### Casts of network_option

{% cast <network_option> as string %}

No documentation exists for this cast.

{% type object repository %}

No documentation exists for this type.

#### Properties of object repository

{% property fileset <string> of <object repository> %}

Returns all filesets exactly matching the string in the format &quot;lpp_name ver.rel.mod.fix&quot;.

{% property fileset matching <string> of <object repository> %}

Returns all filesets matching the supplied ODM query string.

{% property fileset of <object repository> %}

Returns all filesets. This may include multiple versions with the same LPP name.

{% property fileset with name <string> of <object repository> %}

Returns all filesets whose LPP name exactly matches the string.

{% property latest fileset <string> of <object repository> %}

Returns the fileset whose LPP name exactly matches the string and has the highest version record.

{% property product <string> of <object repository> %}

Returns the product whose LPP name exactly matches the string.

{% property product of <object repository> %}

Returns all products. Each product may contain multiple filesets of differing versions.

{% type product %}

The &lt;product&gt; object contains properties (such as vendor and revision) of the associated software product. On AIX, products are installed into an Object Repository.On HPUX products are installed in the Software Depot.

#### Properties of product

{% property bundle of <product> %}

Returns the bundle to which the product belongs.

{% property fileset of <product> %}

Returns a list of the filesets (installable software packages) in the specified product.

{% property name of <product> %}

Returns the name of the specified product.

{% property revision of <product> %}

Version identifier of installed software product.Example: revision of product &quot;OS-Core&quot; of software depot - Returns a string such as &quot;B.11.00&quot;.

{% property tag of <product> %}

Short identifying name of installed software product. Tag is used as identifier in named product accessor.Example: tag of product whose (vendor of it = &quot;BigFix&quot;) of software depot - Returns a string such as &quot;BESAgent 4.0.3.7&quot;.

{% property title of <product> %}

Long identifying name of installed software product.Example: title of product &quot;OS-Core&quot; of software depot - Returns a string such as &quot;Core Operating System&quot;.

{% property vendor of <product> %}

Text identifying the vendor of the installed software product.Example: vendor of product &quot;BESAgent&quot; of software depot - Returns a string such as &quot;BigFix&quot;.

#### Casts of product

{% cast <product> as string %}

Brief text string identifying a product including the tag and version.Example: product &quot;BESAgent&quot; of software depot as string - Returns the full name of the product, such as &quot;BESAgent 4.0.3.7&quot;.

{% type rpc_program %}

No documentation exists for this type.

#### Properties of rpc_program

{% property port of <rpc_program> %}

No documentation exists for this property.

{% property program of <rpc_program> %}

No documentation exists for this property.

{% property protocol of <rpc_program> %}

No documentation exists for this property.

{% property version of <rpc_program> %}

No documentation exists for this property.

#### Casts of rpc_program

{% cast <rpc_program> as string %}

No documentation exists for this cast.


---
title: general
---

## fileset version requirement

No documentation exists for this type.

#### &lt;fileset version requirement&gt; as string : string

Returns a string contain the LLP name and the version of a fileset separated by a space.

#### &lt;fileset version requirement&gt; as fileset version requirement : fileset version requirement

A self cast, used only for simplifying relevance.

#### version record of &lt;fileset version requirement&gt; : fileset version record

Returns the version of the fileset requirement.

#### satisfying fileset of &lt;fileset version requirement&gt; : fileset

Returns the filesets that are installed with the same LPP name and a greater or equal version.

#### lpp_name of &lt;fileset version requirement&gt; : string

Returns a string with the LPP name of the fileset.

#### latest installed fileset of &lt;fileset version requirement&gt; : fileset

Returns the filesets that are installed with the same LPP name, regardless of version.

## fileset version record with multiplicity

No documentation exists for this type.

#### multiplicity of &lt;fileset version record with multiplicity&gt; : integer

Returns an the number of times a fileset version record occurs.

## fileset version record

No documentation exists for this type.

#### &lt;fileset version record&gt; as string : string

Returns a string containing the version of the fileset in the format &quot;ver.rel.mod.fix&quot;.

#### &lt;fileset version record&gt; as fileset version record : fileset version record

A self cast, used only for simplifying relevance.

#### ver_part of &lt;fileset version record&gt; : integer

Returns the first component from a fileset version in the format &quot;(ver).rel.mod.fix&quot;.

#### unique value of &lt;fileset version record&gt; : fileset version record with multiplicity

Returns a list of all unique fileset version records along with their respective counts.

#### rel_part of &lt;fileset version record&gt; : integer

Returns the second component from a fileset version in the format &quot;ver.(rel).mod.fix&quot;.

#### mod_part of &lt;fileset version record&gt; : integer

Returns the third component from a fileset version in the format &quot;ver.rel.(mod).fix&quot;.

#### minimum of &lt;fileset version record&gt; : fileset version record

Returns the lowest fileset version record from a collection for fileset version records.

#### maximum of &lt;fileset version record&gt; : fileset version record

Returns the highest fileset version record from a collection for fileset version records.

#### fix_part of &lt;fileset version record&gt; : integer

Returns the fourth component from a fileset version in the format &quot;ver.rel.mod.(fix)&quot;.

#### extrema of &lt;fileset version record&gt; : ( fileset version record, fileset version record )

Returns a tuple with the lowest and highest fileset version records from a collection for fileset version records.

## fileset part

No documentation exists for this type.

## apar

No documentation exists for this type.

#### &lt;apar&gt; as string : string

Returns a string containing the APAR number.

#### uninstalled fileset version requirement of &lt;apar&gt; : fileset version requirement

Returns all the fileset version requirements for the APAR that are not installed.

#### symptom of &lt;apar&gt; : string

Returns a string with the visible symptoms exhibited by the APAR. The string may be empty.

#### name of &lt;apar&gt; : string

Returns a string containing the APAR number.

#### installed unsatisfied fileset version requirement of &lt;apar&gt; : fileset version requirement

Returns all the fileset version requirements for the APAR that are installed but do not meet the version requirement.

#### installed satisfied fileset version requirement of &lt;apar&gt; : fileset version requirement

Returns all the fileset version requirements for the APAR that are installed and meet the version requirement.

#### fileset version requirement of &lt;apar&gt; : fileset version requirement

Returns all the required filesets version requirements for the APAR.

#### fileset version requirement &lt;string&gt; of &lt;apar&gt; : fileset version requirement

Returns the fileset version requirement for the APAR if a fileset with the LPP name that matches the string is a requirement for the APAR.

#### abstract of &lt;apar&gt; : string

Returns a string containing a short description of the APAR.

## kernel_extension

No documentation exists for this type.

#### &lt;kernel_extension&gt; as string : string

No documentation exists for this cast.

#### text address of &lt;kernel_extension&gt; : string

No documentation exists for this property.

#### size of &lt;kernel_extension&gt; : string

No documentation exists for this property.

#### file of &lt;kernel_extension&gt; : string

No documentation exists for this property.

## network_option

No documentation exists for this type.

#### &lt;network_option&gt; as string : string

No documentation exists for this cast.

#### value of &lt;network_option&gt; : string

No documentation exists for this property.

#### name of &lt;network_option&gt; : string

No documentation exists for this property.

## rpc_program

No documentation exists for this type.

#### &lt;rpc_program&gt; as string : string

No documentation exists for this cast.

#### version of &lt;rpc_program&gt; : string

No documentation exists for this property.

#### protocol of &lt;rpc_program&gt; : string

No documentation exists for this property.

#### program of &lt;rpc_program&gt; : string

No documentation exists for this property.

#### port of &lt;rpc_program&gt; : string

No documentation exists for this property.

## object repository

No documentation exists for this type.

#### product of &lt;object repository&gt; : product

Returns all products. Each product may contain multiple filesets of differing versions.

#### product &lt;string&gt; of &lt;object repository&gt; : product

Returns the product whose LPP name exactly matches the string.

#### latest fileset &lt;string&gt; of &lt;object repository&gt; : fileset

Returns the fileset whose LPP name exactly matches the string and has the highest version record.

#### fileset with name &lt;string&gt; of &lt;object repository&gt; : fileset

Returns all filesets whose LPP name exactly matches the string.

#### fileset of &lt;object repository&gt; : fileset

Returns all filesets. This may include multiple versions with the same LPP name.

#### fileset matching &lt;string&gt; of &lt;object repository&gt; : fileset

Returns all filesets matching the supplied ODM query string.

#### fileset &lt;string&gt; of &lt;object repository&gt; : fileset

Returns all filesets exactly matching the string in the format &quot;lpp_name ver.rel.mod.fix&quot;.

## message_catalog_set

No documentation exists for this type.

#### message &lt;integer&gt; of &lt;message_catalog_set&gt; : string

No documentation exists for this property.

## message_catalog

No documentation exists for this type.

#### set &lt;integer&gt; of &lt;message_catalog&gt; : message_catalog_set

No documentation exists for this property.

## fileset

The &lt;fileset&gt; objects represent the set of files required for installing a software package.

#### &lt;fileset&gt; as string : string

Casts a fileset as a string type.

#### version of &lt;fileset&gt; : version

Returns the version of the specified fileset.

#### update of &lt;fileset&gt; : integer

Returns the update number for the specified fileset.Example: updates of filesets matching &quot;lpp_name = &#39;bos.terminfo.rte&#39;&quot; of object repository - Returns the update numbers of the specified filesets.

#### product of &lt;fileset&gt; : product

Returns the product corresponding to the specified fileset.

#### lpp_name of &lt;fileset&gt; : string

Licensed Program Product(s) of the fileset.Example: (lpp_name of it &amp; &quot; ver = &quot; &amp; version of it as string) of filesets matching &quot;lpp_name = &#39;bos.terminfo.rte&#39;&quot; of object repository - Returns a formatted list of filesets with the specified Licensed Program Product name.

#### description of &lt;fileset&gt; : string

Returns a description of a set of installation files.

#### version record of &lt;fileset&gt; : fileset version record

Returns the version record corresponding to the specified fileset as a fileset version record.

#### usr part of &lt;fileset&gt; : fileset part

Returns the machine-shareable portions of the specified fileset (the usr part), which contains the part of the product that can be shared among several machines with compatible hardware architectures. The usr part of the fileset contains files that reside in the /usr or /opt file system.

#### share part of &lt;fileset&gt; : fileset part

Returns the share part of the specified fileset.

#### root part of &lt;fileset&gt; : fileset part

Returns the machine-specific portions of the specified fileset (the root part), which contains the part of the product that cannot be shared among machines -- each client must have its own copy. For a standard system, files in the root part are stored in the root (/) file tree.

## product

The &lt;product&gt; object contains properties (such as vendor and revision) of the associated software product. On AIX, products are installed into an Object Repository.On HPUX products are installed in the Software Depot.

#### &lt;product&gt; as string : string

Brief text string identifying a product including the tag and version.Example: product &quot;BESAgent&quot; of software depot as string - Returns the full name of the product, such as &quot;BESAgent 4.0.3.7&quot;.

#### vendor of &lt;product&gt; : string

Text identifying the vendor of the installed software product.Example: vendor of product &quot;BESAgent&quot; of software depot - Returns a string such as &quot;BigFix&quot;.

#### title of &lt;product&gt; : string

Long identifying name of installed software product.Example: title of product &quot;OS-Core&quot; of software depot - Returns a string such as &quot;Core Operating System&quot;.

#### tag of &lt;product&gt; : string

Short identifying name of installed software product. Tag is used as identifier in named product accessor.Example: tag of product whose (vendor of it = &quot;BigFix&quot;) of software depot - Returns a string such as &quot;BESAgent 4.0.3.7&quot;.

#### revision of &lt;product&gt; : string

Version identifier of installed software product.Example: revision of product &quot;OS-Core&quot; of software depot - Returns a string such as &quot;B.11.00&quot;.

#### bundle of &lt;product&gt; : bundle

Returns the bundle to which the product belongs.

#### name of &lt;product&gt; : string

Returns the name of the specified product.

#### fileset of &lt;product&gt; : fileset

Returns a list of the filesets (installable software packages) in the specified product.


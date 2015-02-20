---
title: computers
---

## bes property with multiplicity

The &lt;bes property with multiplicity&gt; inspectors deal with arrays of BES properties, allowing you to extract unique properties and count them.

#### multiplicity of &lt;bes property with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes property&gt; types.

## bes property set

The &lt;bes property set&gt; inspectors iterate over the current set of BES properties and package them as a mathematical set, suitable for further set manipulation.

#### &lt;bes property set&gt; as xml : utf8 string

Converts the specified set of BES Properties to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

#### union of &lt;bes property set&gt; : bes property set

Returns the union of multiple BES property sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### size of &lt;bes property set&gt; : integer

Returns the number of unique BES Properties in the specified set.

#### intersection of &lt;bes property set&gt; : bes property set

Returns the intersection of multiple BES property sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### element of &lt;bes property set&gt; : bes property

Returns the unique elements of the specified &lt;bes property set&gt;, removing duplicates and sorting by value.

## bes property result

The &lt;bes property result&gt; inspectors return the results returned by the given properties of the specified BES Client computers. 

#### value of &lt;bes property result&gt; : string

Returns a list of the &lt;string&gt; values reported by this computer for the specified property result.

#### value count of &lt;bes property result&gt; : integer

Returns the number of values reported by this computer for the specified property result.

#### property of &lt;bes property result&gt; : bes property

Returns the property corresponding to the specified BES property result.

#### plural flag of &lt;bes property result&gt; : boolean

Returns TRUE if the specified BES property result is a multiple result.

#### error message of &lt;bes property result&gt; : string

If the specified BES property result is an error, this inspector returns the error message.

#### error flag of &lt;bes property result&gt; : boolean

Returns TRUE if the specified BES property result is an error.

#### computer of &lt;bes property result&gt; : bes computer

Returns the computer corresponding to the specified BES property result.

## bes property

The &lt;bes property&gt; inspectors return information about the properties of BES Client computers. Properties -- along with their names, IDs and definitions -- can be iterated to produce property lists of all your networked BES computers.

#### &lt;bes property&gt; as xml : utf8 string

Converts the specified BES Property to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

#### unique value of &lt;bes property&gt; : bes property with multiplicity

Returns the unique values of a given list of &lt;bes property&gt; types, removing duplicates and sorting by value.

#### statistic range of &lt;bes property&gt; : statistic range

Returns the range of statistical bins associated with the given property. The property must be marked for statistical aggregation. If not, or if no clients have reported results, it throws NoSuchObject.

#### source name of &lt;bes property&gt; : string

Returns the name of the property as specified by the analysis that defines it. This name is not necessarily the same as the name of the property.

#### source id of &lt;bes property&gt; : integer

Returns the ID of the property as specified by the analysis that defines it. This is not the same as the unique property ID.

#### source evaluation period of &lt;bes property&gt; : time interval

Returns the period of the property as specified by the analysis that defines it. This period is not necessarily the same as the period of the property.

#### source analysis of &lt;bes property&gt; : bes fixlet

Returns the &lt;bes fixlet&gt; object corresponding to the analysis that defines the specified property.

#### simple name of &lt;bes property&gt; : string

Returns the non-category portion of the property name.

#### set of &lt;bes property&gt; : bes property set

Converts the specified BES Property list to a set that can be arithmetically manipulated.

#### result of &lt;bes property&gt; : bes property result

Returns a list of the BES property results for every computer reporting a result for the specified property.

#### result from &lt;bes computer&gt; of &lt;bes property&gt; : bes property result

Returns the result of the specified BES property and computer.

#### reserved flag of &lt;bes property&gt; : boolean

Returns TRUE if the specified BES property is reserved.

#### reported computer set of &lt;bes property&gt; : bes computer set

Returns a list of all the computers that have reported for the specified BES property. The list is formatted as a mathematical set.

#### name of &lt;bes property&gt; : string

Returns the name of the specified BES property. This name is not guaranteed to be unique.

#### memory usage of &lt;bes property&gt; : integer

Returns an estimate of the number of bytes of virtual memory that is currently being used to store the result of the given property.

#### keep statistics flag of &lt;bes property&gt; : boolean

Returns TRUE if statistics are being kept for the specified BES property.

#### id of &lt;bes property&gt; : ( integer, integer, integer )

Returns a 3-tuple of integers composed of the site ID, analysis ID and property ID. The first integer identifies the site hosting the Analysis. For custom properties not contained in an analysis (those created using the Manage Properties dialog), it is the ID of the Action site. The second integer indentifies the Analysis containing the property. For custom properties, this is 0. The third integer identifies the property itself. This is the same as the source ID if the property is defined in an Analysis. If it is not defined in an Analysis then this is the unique object ID for the property.

#### evaluation period of &lt;bes property&gt; : time interval

Returns the &lt;time interval&gt; that controls how frequently clients will submit reports for the specified property.

#### display simple name of &lt;bes property&gt; : string

Returns the simple name of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### display name of &lt;bes property&gt; : string

Returns the name of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### display category of &lt;bes property&gt; : string

Returns the category of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### disk usage of &lt;bes property&gt; : integer

Gives the size in bytes of the cache file holding the results for the given property.

#### definition of &lt;bes property&gt; : string

Returns the relevance expression which defines the specified property.

#### default flag of &lt;bes property&gt; : boolean

Returns TRUE if the specified BES property is the default.

#### database id of &lt;bes property&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database containing the specified BES property.

#### custom flag of &lt;bes property&gt; : boolean

Returns TRUE if the specified BES property is custom.

#### category of &lt;bes property&gt; : string

Returns the optional category created for the specified BES property.

#### analysis flag of &lt;bes property&gt; : boolean

Returns TRUE if the specified BES property is an analysis property.

## bes client setting

The &lt;bes client setting&gt; inspectors return the name, value and scope of BES Client settings. These are named variables that are used to report on and control various client behaviors.

#### value of &lt;bes client setting&gt; : string

Returns the value associated with the specified BES Client setting.

#### scope of &lt;bes client setting&gt; : string

Depending on the scope of the specified Client setting, returns &#39;Local&#39; or a site URL.

#### name of &lt;bes client setting&gt; : string

Returns the name of the specified BES client setting.

## bes computer with multiplicity

The &lt;bes computer with multiplicity&gt; inspectors deal with arrays of BES computers, allowing you to extract unique computers and count them.

#### multiplicity of &lt;bes computer with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes computer&gt; types.

## bes computer set

The &lt;bes computer set&gt; inspectors convert an iterated list of computers into a set, which allows you to perform intersections, unions and other mathematical operations on them.

#### union of &lt;bes computer set&gt; : bes computer set

Returns the union of multiple BES computer sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### size of &lt;bes computer set&gt; : integer

Returns the number of unique BES Computers in the specified set.

#### intersection of &lt;bes computer set&gt; : bes computer set

Returns the intersection of multiple BES computer sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### element of &lt;bes computer set&gt; : bes computer

Returns the unique elements of the specified &lt;bes computer set&gt;, removing duplicates and sorting by value.

## bes computer group with multiplicity

The &lt;bes computer group with multiplicity&gt; inspectors deal with arrays of BES computer groups, allowing you to extract unique computer groups and count them.

#### multiplicity of &lt;bes computer group with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes computer group&gt; types.

## bes computer group set

The &lt;bes computer group set&gt; inspectors convert an iterated list of computer groups into a set, which allows you to perform intersections, unions and other mathematical operations on them.

#### &lt;bes computer group set&gt; as xml : utf8 string

Converts the specified set of BES computer groups to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

#### union of &lt;bes computer group set&gt; : bes computer group set

Returns the union of multiple BES computer group sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### size of &lt;bes computer group set&gt; : integer

Returns the number of unique BES Computer Groups in the specified set.

#### intersection of &lt;bes computer group set&gt; : bes computer group set

Returns the intersection of multiple BES computer group sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### element of &lt;bes computer group set&gt; : bes computer group

Returns the unique elements of the specified &lt;bes computer group set&gt;, removing duplicates and sorting by value.

## bes computer group

The &lt;bes computer group&gt; inspectors return an iterated list of computer groups, as defined in the BES Console.

#### &lt;bes computer group&gt; as xml : utf8 string

Converts the specified BES computer group to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

#### unique value of &lt;bes computer group&gt; : bes computer group with multiplicity

Returns the unique values of a given list of &lt;bes computer group&gt; types, removing duplicates and sorting by value.

#### site of &lt;bes computer group&gt; : bes site

Returns the site corresponding to the specified BES Computer Group.

#### set of &lt;bes computer group&gt; : bes computer group set

Converts the specified BES computer group list to a set that can be arithmetically manipulated.

#### name of &lt;bes computer group&gt; : string

Returns the name corresponding to the specified BES Computer Group.

#### member set of &lt;bes computer group&gt; : bes computer set

Returns the computer set that comprise the specified BES Computer Group.

#### member of &lt;bes computer group&gt; : bes computer

Returns the set of computers that comprise the specified BES Computer Group.

#### manual flag of &lt;bes computer group&gt; : boolean

Returns the value of the &#39;Manual&#39; flag corresponding to the specified BES Computer Group. Groups can be manual, automatic or ad-hoc.

#### issuer of &lt;bes computer group&gt; : bes user

Returns the &lt;bes user&gt; object corresponding to the bes computer group that issued the specified activation.

#### id of &lt;bes computer group&gt; : integer

Returns the numeric ID corresponding to the specified BES Computer Group.

#### domain of &lt;bes computer group&gt; : bes domain

A domain is attached to a BES computer group when one is created. This inspector returns the domain associated with the specified group.

#### database id of &lt;bes computer group&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES computer group resides.

#### creation time of &lt;bes computer group&gt; : time

Returns the time when the specified BES computer group was created.

#### client evaluated flag of &lt;bes computer group&gt; : boolean

Returns TRUE if the specified BES computer group is determined by client acknowledgement.

#### automatic flag of &lt;bes computer group&gt; : boolean

Returns the value of the &#39;Automatic&#39; flag corresponding to the specified BES Computer Group. Groups can be manual, automatic or ad-hoc.

## bes computer

The &lt;bes computer&gt; inspectors return lists of the computers currently visible through the BES Console.

#### unique value of &lt;bes computer&gt; : bes computer with multiplicity

Returns the unique values of a given list of &lt;bes computer&gt; types, removing duplicates and sorting by value.

#### subscribed site set of &lt;bes computer&gt; : bes site set

Returns a list of the BES sites subscribed to by the specified BES computer, organized as a set.

#### subscribed site of &lt;bes computer&gt; : bes site

Returns a list of the BES sites subscribed to by the specified BES computer.

#### subscribed &lt;bes site&gt; of &lt;bes computer&gt; : boolean

Returns TRUE if the specified computer is currently subscribed to the given BES site.

#### set of &lt;bes computer&gt; : bes computer set

Converts the specified BES computer list to a set that can be arithmetically manipulated.

#### root server of &lt;bes computer&gt; : string

Returns the result of the &#39;BES Root Server&#39; property of the specified computer.

#### root server flag of &lt;bes computer&gt; : boolean

Returns TRUE iff the result of the &#39;BES Relay Server Installed&#39; property for the specified computer indicates that it&#39;s a BES root server.

#### result from &lt;bes property&gt; of &lt;bes computer&gt; : bes property result

Returns the result of the specified BES property and computer.

#### result from &lt;bes fixlet&gt; of &lt;bes computer&gt; : bes fixlet result

Returns a Fixlet result for the given computer and Fixlet.

#### result from &lt;bes action&gt; of &lt;bes computer&gt; : bes action result

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result &lt;( bes action, bes computer )&gt;.Example: detailed status of result from (bes action whose (id of it is 1234)) of (bes computer whose (id of it is 1234567)) - Returns the detailed status of the specified action on the given computer.

#### reported property set of &lt;bes computer&gt; : bes property set

Returns a list of all the BES properties that have reported on the specified computer(s). The list is formatted as a mathematical set.

#### reported action set of &lt;bes computer&gt; : bes action set

Returns a list of all the reported Actions for the specified computer. These may be Actions that are running, fixed, failed, and others. The list is formatted as a mathematical set.

#### relevant fixlet set of &lt;bes computer&gt; : bes fixlet set

Returns a list of all the &lt;bes fixlet&gt; objects that the specified computer has reported are relevant. The list is formatted as a mathematical set.

#### relevant fixlet of &lt;bes computer&gt; : bes fixlet

Returns a list of all the &lt;bes fixlet&gt; objects that the specified computer has reported are relevant.

#### relevant &lt;bes fixlet&gt; of &lt;bes computer&gt; : boolean

Returns TRUE if the given Fixlet message is relevant on the specified computer.

#### relay server of &lt;bes computer&gt; : string

Returns the result of the &#39;Relay&#39; property of the specified computer.

#### relay server flag of &lt;bes computer&gt; : boolean

Returns TRUE iff the result of the &#39;BES Relay Server Installed&#39; property for the specified computer indicates that the BES Relay is installed.

#### relay selection method of &lt;bes computer&gt; : string

Returns the result of the &#39;BES Relay Selection Method&#39; property for the specified computer.

#### relay hostname of &lt;bes computer&gt; : string

Returns the result of the &#39;Relay Name of Client&#39; property for the specified computer.

#### relay distance of &lt;bes computer&gt; : integer

Returns the result of the &#39;Distance to BES Relay&#39; property for the specified computer.

#### property result of &lt;bes computer&gt; : bes property result

Returns a list of all of the &lt;bes property result&gt; objects that the specified BES computer has reported.

#### operating system of &lt;bes computer&gt; : string

Returns the result of the &#39;OS&#39; Property for the specified computer.

#### name of &lt;bes computer&gt; : string

Returns the value of the specified &#39;Computer Name&#39; property for the specified BES computer.

#### locked flag of &lt;bes computer&gt; : boolean

Returns the result of the &#39;Locked&#39; property of the specified computer.

#### link of &lt;bes computer&gt; : html

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

#### link href of &lt;bes computer&gt; : string

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes computer&gt;). Note that link href returns a string, not an HTML string.

#### link &lt;string&gt; of &lt;bes computer&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

#### link &lt;html&gt; of &lt;bes computer&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

#### license type of &lt;bes computer&gt; : string

Returns the license type of the specified BES Client.  This is a result of a reserved property that assigns computers to a license type such as workstation, windows server, or non-windows server.

#### last report time of &lt;bes computer&gt; : time

Returns the time of the last report submitted by the specified BES computer.

#### ip address of &lt;bes computer&gt; : ipv4or6 address

Returns the result of the &#39;IP Address&#39; property of the specified computer as an ipv4or6 address type.

#### id of &lt;bes computer&gt; : integer

Returns the numeric ID unique to the specified BES computer.

#### hostname of &lt;bes computer&gt; : string

Returns the result of the &#39;DNS Name&#39; Property for the specified computer.

#### database name of &lt;bes computer&gt; : string

In a Web Reports context, this inspector returns the name (as a string) of the database containing the specified BES computer.

#### database id of &lt;bes computer&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES computer resides.

#### cpu of &lt;bes computer&gt; : string

Returns the result of the &#39;CPU&#39; Property for the specified computer.

#### comment of &lt;bes computer&gt; : bes comment

Returns the comments assigned to the specified BES Computer.

#### client setting of &lt;bes computer&gt; : bes client setting

Returns the client setting(s) for the specified computer.

#### administrator set of &lt;bes computer&gt; : bes user set

Returns the set of users who have administrative rights on this computer.

#### administrator of &lt;bes computer&gt; : bes user

Iterates over the users who have administrative rights on this computer.

#### administrator &lt;bes user&gt; of &lt;bes computer&gt; : boolean

Returns TRUE if the specified user is an administrator of the given computers.

#### active directory path of &lt;bes computer&gt; : distinguished name

Returns the result of the &#39;Active Directory Path&#39; property of the specified computer.

#### action result of &lt;bes computer&gt; : bes action result

Returns the results of BES Actions that have occurred on the specified computer.

#### device type of &lt;bes computer&gt; : string

No documentation exists for this property.

#### agent version of &lt;bes computer&gt; : string

No documentation exists for this property.

#### agent type of &lt;bes computer&gt; : string

No documentation exists for this property.

#### bes computer group set of &lt;bes computer&gt; : bes computer group set

No documentation exists for this property.

#### bes computer group of &lt;bes computer&gt; : bes computer group

No documentation exists for this property.


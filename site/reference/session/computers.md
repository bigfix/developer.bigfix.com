---
title: computers
---

{% type bes property with multiplicity%}

The &lt;bes property with multiplicity&gt; inspectors deal with arrays of BES properties, allowing you to extract unique properties and count them.

{% property multiplicity of <bes property with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes property&gt; types.

{% type bes property set%}

The &lt;bes property set&gt; inspectors iterate over the current set of BES properties and package them as a mathematical set, suitable for further set manipulation.

{% property <bes property set> as xml %}

Converts the specified set of BES Properties to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

{% property union of <bes property set> %}

Returns the union of multiple BES property sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property size of <bes property set> %}

Returns the number of unique BES Properties in the specified set.

{% property intersection of <bes property set> %}

Returns the intersection of multiple BES property sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property element of <bes property set> %}

Returns the unique elements of the specified &lt;bes property set&gt;, removing duplicates and sorting by value.

{% type bes property result%}

The &lt;bes property result&gt; inspectors return the results returned by the given properties of the specified BES Client computers. 

{% property value of <bes property result> %}

Returns a list of the &lt;string&gt; values reported by this computer for the specified property result.

{% property value count of <bes property result> %}

Returns the number of values reported by this computer for the specified property result.

{% property property of <bes property result> %}

Returns the property corresponding to the specified BES property result.

{% property plural flag of <bes property result> %}

Returns TRUE if the specified BES property result is a multiple result.

{% property error message of <bes property result> %}

If the specified BES property result is an error, this inspector returns the error message.

{% property error flag of <bes property result> %}

Returns TRUE if the specified BES property result is an error.

{% property computer of <bes property result> %}

Returns the computer corresponding to the specified BES property result.

{% type bes property%}

The &lt;bes property&gt; inspectors return information about the properties of BES Client computers. Properties -- along with their names, IDs and definitions -- can be iterated to produce property lists of all your networked BES computers.

{% property <bes property> as xml %}

Converts the specified BES Property to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

{% property unique value of <bes property> %}

Returns the unique values of a given list of &lt;bes property&gt; types, removing duplicates and sorting by value.

{% property statistic range of <bes property> %}

Returns the range of statistical bins associated with the given property. The property must be marked for statistical aggregation. If not, or if no clients have reported results, it throws NoSuchObject.

{% property source name of <bes property> %}

Returns the name of the property as specified by the analysis that defines it. This name is not necessarily the same as the name of the property.

{% property source id of <bes property> %}

Returns the ID of the property as specified by the analysis that defines it. This is not the same as the unique property ID.

{% property source evaluation period of <bes property> %}

Returns the period of the property as specified by the analysis that defines it. This period is not necessarily the same as the period of the property.

{% property source analysis of <bes property> %}

Returns the &lt;bes fixlet&gt; object corresponding to the analysis that defines the specified property.

{% property simple name of <bes property> %}

Returns the non-category portion of the property name.

{% property set of <bes property> %}

Converts the specified BES Property list to a set that can be arithmetically manipulated.

{% property result of <bes property> %}

Returns a list of the BES property results for every computer reporting a result for the specified property.

{% property result from <bes computer> of <bes property> %}

Returns the result of the specified BES property and computer.

{% property reserved flag of <bes property> %}

Returns TRUE if the specified BES property is reserved.

{% property reported computer set of <bes property> %}

Returns a list of all the computers that have reported for the specified BES property. The list is formatted as a mathematical set.

{% property name of <bes property> %}

Returns the name of the specified BES property. This name is not guaranteed to be unique.

{% property memory usage of <bes property> %}

Returns an estimate of the number of bytes of virtual memory that is currently being used to store the result of the given property.

{% property keep statistics flag of <bes property> %}

Returns TRUE if statistics are being kept for the specified BES property.

{% property id of <bes property> %}

Returns a 3-tuple of integers composed of the site ID, analysis ID and property ID. The first integer identifies the site hosting the Analysis. For custom properties not contained in an analysis (those created using the Manage Properties dialog), it is the ID of the Action site. The second integer indentifies the Analysis containing the property. For custom properties, this is 0. The third integer identifies the property itself. This is the same as the source ID if the property is defined in an Analysis. If it is not defined in an Analysis then this is the unique object ID for the property.

{% property evaluation period of <bes property> %}

Returns the &lt;time interval&gt; that controls how frequently clients will submit reports for the specified property.

{% property display simple name of <bes property> %}

Returns the simple name of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property display name of <bes property> %}

Returns the name of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property display category of <bes property> %}

Returns the category of the specified BES property. This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property disk usage of <bes property> %}

Gives the size in bytes of the cache file holding the results for the given property.

{% property definition of <bes property> %}

Returns the relevance expression which defines the specified property.

{% property default flag of <bes property> %}

Returns TRUE if the specified BES property is the default.

{% property database id of <bes property> %}

In the Web Reports environment, this inspector returns the numeric ID of the database containing the specified BES property.

{% property custom flag of <bes property> %}

Returns TRUE if the specified BES property is custom.

{% property category of <bes property> %}

Returns the optional category created for the specified BES property.

{% property analysis flag of <bes property> %}

Returns TRUE if the specified BES property is an analysis property.

{% type bes client setting%}

The &lt;bes client setting&gt; inspectors return the name, value and scope of BES Client settings. These are named variables that are used to report on and control various client behaviors.

{% property value of <bes client setting> %}

Returns the value associated with the specified BES Client setting.

{% property scope of <bes client setting> %}

Depending on the scope of the specified Client setting, returns &#39;Local&#39; or a site URL.

{% property name of <bes client setting> %}

Returns the name of the specified BES client setting.

{% type bes computer with multiplicity%}

The &lt;bes computer with multiplicity&gt; inspectors deal with arrays of BES computers, allowing you to extract unique computers and count them.

{% property multiplicity of <bes computer with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes computer&gt; types.

{% type bes computer set%}

The &lt;bes computer set&gt; inspectors convert an iterated list of computers into a set, which allows you to perform intersections, unions and other mathematical operations on them.

{% property union of <bes computer set> %}

Returns the union of multiple BES computer sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property size of <bes computer set> %}

Returns the number of unique BES Computers in the specified set.

{% property intersection of <bes computer set> %}

Returns the intersection of multiple BES computer sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property element of <bes computer set> %}

Returns the unique elements of the specified &lt;bes computer set&gt;, removing duplicates and sorting by value.

{% type bes computer group with multiplicity%}

The &lt;bes computer group with multiplicity&gt; inspectors deal with arrays of BES computer groups, allowing you to extract unique computer groups and count them.

{% property multiplicity of <bes computer group with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes computer group&gt; types.

{% type bes computer group set%}

The &lt;bes computer group set&gt; inspectors convert an iterated list of computer groups into a set, which allows you to perform intersections, unions and other mathematical operations on them.

{% property <bes computer group set> as xml %}

Converts the specified set of BES computer groups to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

{% property union of <bes computer group set> %}

Returns the union of multiple BES computer group sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property size of <bes computer group set> %}

Returns the number of unique BES Computer Groups in the specified set.

{% property intersection of <bes computer group set> %}

Returns the intersection of multiple BES computer group sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property element of <bes computer group set> %}

Returns the unique elements of the specified &lt;bes computer group set&gt;, removing duplicates and sorting by value.

{% type bes computer group%}

The &lt;bes computer group&gt; inspectors return an iterated list of computer groups, as defined in the BES Console.

{% property <bes computer group> as xml %}

Converts the specified BES computer group to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

{% property unique value of <bes computer group> %}

Returns the unique values of a given list of &lt;bes computer group&gt; types, removing duplicates and sorting by value.

{% property site of <bes computer group> %}

Returns the site corresponding to the specified BES Computer Group.

{% property set of <bes computer group> %}

Converts the specified BES computer group list to a set that can be arithmetically manipulated.

{% property name of <bes computer group> %}

Returns the name corresponding to the specified BES Computer Group.

{% property member set of <bes computer group> %}

Returns the computer set that comprise the specified BES Computer Group.

{% property member of <bes computer group> %}

Returns the set of computers that comprise the specified BES Computer Group.

{% property manual flag of <bes computer group> %}

Returns the value of the &#39;Manual&#39; flag corresponding to the specified BES Computer Group. Groups can be manual, automatic or ad-hoc.

{% property issuer of <bes computer group> %}

Returns the &lt;bes user&gt; object corresponding to the bes computer group that issued the specified activation.

{% property id of <bes computer group> %}

Returns the numeric ID corresponding to the specified BES Computer Group.

{% property domain of <bes computer group> %}

A domain is attached to a BES computer group when one is created. This inspector returns the domain associated with the specified group.

{% property database id of <bes computer group> %}

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES computer group resides.

{% property creation time of <bes computer group> %}

Returns the time when the specified BES computer group was created.

{% property client evaluated flag of <bes computer group> %}

Returns TRUE if the specified BES computer group is determined by client acknowledgement.

{% property automatic flag of <bes computer group> %}

Returns the value of the &#39;Automatic&#39; flag corresponding to the specified BES Computer Group. Groups can be manual, automatic or ad-hoc.

{% type bes computer%}

The &lt;bes computer&gt; inspectors return lists of the computers currently visible through the BES Console.

{% property unique value of <bes computer> %}

Returns the unique values of a given list of &lt;bes computer&gt; types, removing duplicates and sorting by value.

{% property subscribed site set of <bes computer> %}

Returns a list of the BES sites subscribed to by the specified BES computer, organized as a set.

{% property subscribed site of <bes computer> %}

Returns a list of the BES sites subscribed to by the specified BES computer.

{% property subscribed <bes site> of <bes computer> %}

Returns TRUE if the specified computer is currently subscribed to the given BES site.

{% property set of <bes computer> %}

Converts the specified BES computer list to a set that can be arithmetically manipulated.

{% property root server of <bes computer> %}

Returns the result of the &#39;BES Root Server&#39; property of the specified computer.

{% property root server flag of <bes computer> %}

Returns TRUE iff the result of the &#39;BES Relay Server Installed&#39; property for the specified computer indicates that it&#39;s a BES root server.

{% property result from <bes property> of <bes computer> %}

Returns the result of the specified BES property and computer.

{% property result from <bes fixlet> of <bes computer> %}

Returns a Fixlet result for the given computer and Fixlet.

{% property result from <bes action> of <bes computer> %}

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result &lt;( bes action, bes computer )&gt;.Example: detailed status of result from (bes action whose (id of it is 1234)) of (bes computer whose (id of it is 1234567)) - Returns the detailed status of the specified action on the given computer.

{% property reported property set of <bes computer> %}

Returns a list of all the BES properties that have reported on the specified computer(s). The list is formatted as a mathematical set.

{% property reported action set of <bes computer> %}

Returns a list of all the reported Actions for the specified computer. These may be Actions that are running, fixed, failed, and others. The list is formatted as a mathematical set.

{% property relevant fixlet set of <bes computer> %}

Returns a list of all the &lt;bes fixlet&gt; objects that the specified computer has reported are relevant. The list is formatted as a mathematical set.

{% property relevant fixlet of <bes computer> %}

Returns a list of all the &lt;bes fixlet&gt; objects that the specified computer has reported are relevant.

{% property relevant <bes fixlet> of <bes computer> %}

Returns TRUE if the given Fixlet message is relevant on the specified computer.

{% property relay server of <bes computer> %}

Returns the result of the &#39;Relay&#39; property of the specified computer.

{% property relay server flag of <bes computer> %}

Returns TRUE iff the result of the &#39;BES Relay Server Installed&#39; property for the specified computer indicates that the BES Relay is installed.

{% property relay selection method of <bes computer> %}

Returns the result of the &#39;BES Relay Selection Method&#39; property for the specified computer.

{% property relay hostname of <bes computer> %}

Returns the result of the &#39;Relay Name of Client&#39; property for the specified computer.

{% property relay distance of <bes computer> %}

Returns the result of the &#39;Distance to BES Relay&#39; property for the specified computer.

{% property property result of <bes computer> %}

Returns a list of all of the &lt;bes property result&gt; objects that the specified BES computer has reported.

{% property operating system of <bes computer> %}

Returns the result of the &#39;OS&#39; Property for the specified computer.

{% property name of <bes computer> %}

Returns the value of the specified &#39;Computer Name&#39; property for the specified BES computer.

{% property locked flag of <bes computer> %}

Returns the result of the &#39;Locked&#39; property of the specified computer.

{% property link of <bes computer> %}

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

{% property link href of <bes computer> %}

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes computer&gt;). Note that link href returns a string, not an HTML string.

{% property link <string> of <bes computer> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

{% property link <html> of <bes computer> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

{% property license type of <bes computer> %}

Returns the license type of the specified BES Client.  This is a result of a reserved property that assigns computers to a license type such as workstation, windows server, or non-windows server.

{% property last report time of <bes computer> %}

Returns the time of the last report submitted by the specified BES computer.

{% property ip address of <bes computer> %}

Returns the result of the &#39;IP Address&#39; property of the specified computer as an ipv4or6 address type.

{% property id of <bes computer> %}

Returns the numeric ID unique to the specified BES computer.

{% property hostname of <bes computer> %}

Returns the result of the &#39;DNS Name&#39; Property for the specified computer.

{% property database name of <bes computer> %}

In a Web Reports context, this inspector returns the name (as a string) of the database containing the specified BES computer.

{% property database id of <bes computer> %}

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES computer resides.

{% property cpu of <bes computer> %}

Returns the result of the &#39;CPU&#39; Property for the specified computer.

{% property comment of <bes computer> %}

Returns the comments assigned to the specified BES Computer.

{% property client setting of <bes computer> %}

Returns the client setting(s) for the specified computer.

{% property administrator set of <bes computer> %}

Returns the set of users who have administrative rights on this computer.

{% property administrator of <bes computer> %}

Iterates over the users who have administrative rights on this computer.

{% property administrator <bes user> of <bes computer> %}

Returns TRUE if the specified user is an administrator of the given computers.

{% property active directory path of <bes computer> %}

Returns the result of the &#39;Active Directory Path&#39; property of the specified computer.

{% property action result of <bes computer> %}

Returns the results of BES Actions that have occurred on the specified computer.

{% property device type of <bes computer> %}

No documentation exists for this property.

{% property agent version of <bes computer> %}

No documentation exists for this property.

{% property agent type of <bes computer> %}

No documentation exists for this property.

{% property bes computer group set of <bes computer> %}

No documentation exists for this property.

{% property bes computer group of <bes computer> %}

No documentation exists for this property.


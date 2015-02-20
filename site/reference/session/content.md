---
title: content
---

## bes fixlet with multiplicity

The &lt;bes fixlet with multiplicity&gt; inspectors deal with arrays of BES fixlets, allowing you to extract unique fixlets and count them.

#### multiplicity of &lt;bes fixlet with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes fixlet&gt; types.

## bes fixlet set

The &lt;bes fixlet set&gt; inspectors iterate over the current set of BES Fixlets and package them as a mathematical set, suitable for further set manipulation.

#### &lt;bes fixlet set&gt; as xml : utf8 string

Converts the specified set of BES Fixlets to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

#### union of &lt;bes fixlet set&gt; : bes fixlet set

Returns the union of multiple BES Fixlet sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### size of &lt;bes fixlet set&gt; : integer

Returns the number of unique BES Fixlets in the specified set.

#### intersection of &lt;bes fixlet set&gt; : bes fixlet set

Returns the intersection of multiple BES Fixlet sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### element of &lt;bes fixlet set&gt; : bes fixlet

Returns the unique elements of the specified &lt;bes fixlet set&gt;, removing duplicates and sorting by value.

## bes fixlet result

The &lt;bes fixlet result&gt; inspectors allow you to inspect the results of BES Fixlet messages, including relevance and affected computers.

#### relevant flag of &lt;bes fixlet result&gt; : boolean

Returns TRUE if the computer reports that the given Fixlet result is relevant, and FALSE otherwise.

#### last became relevant of &lt;bes fixlet result&gt; : time

Returns the time when the Fixlet result last became relevant.Note: This is a Web Reports-only inspector.

#### last became nonrelevant of &lt;bes fixlet result&gt; : time

Returns the time when the Fixlet result last became non-relevant. This may be tied to the successful completion of the Fixlet message.Note: This is a Web Reports-only inspector.

#### fixlet of &lt;bes fixlet result&gt; : bes fixlet

Returns the Fixlet message associated with the specified Fixlet result.

#### first became relevant of &lt;bes fixlet result&gt; : time

Returns the time when the Fixlet result first became relevant.Note: This is a Web Reports-only inspector.

#### computer of &lt;bes fixlet result&gt; : bes computer

Returns the BES computer associated with the specified Fixlet result.

#### remediated flag of &lt;bes fixlet result&gt; : boolean

No documentation exists for this property.

## bes fixlet field value

The &lt;bes fixlet field value&gt; inspectors provide access to the values of informational fields that are included with some Fixlet messages and Tasks. For more Information, see the BES Fixlet field inspectors.

#### &lt;bes fixlet field value&gt; as time : time

Returns the value of the specified BES Fixlet field cast as a time type.

#### &lt;bes fixlet field value&gt; as string : string

Returns the value of the specified BES Fixlet field cast as a string type.

#### &lt;bes fixlet field value&gt; as integer : integer

Returns the value of the specified BES Fixlet field cast as an integer type.

#### &lt;bes fixlet field value&gt; as date : date

Returns the value of the specified BES Fixlet field cast as a date type.

#### display value of &lt;bes fixlet field value&gt; : string

Returns the value of a BES Fixlet field as a human-readable string.

## bes fixlet field

In addition to the Relevance and Action fields, Fixlet messages and Tasks can contain various additional fields. If the content is developed in BDE, these fields may be specified by the Fixlet templates you use. Depending on the site or the template, fields may have different interpretations.

#### value of &lt;bes fixlet field&gt; : bes fixlet field value

Returns the value(s) of the specified BES Fixlet field(s).

#### name of &lt;bes fixlet field&gt; : string

Returns the name(s) of the specified BES Fixlet field(s).

## bes fixlet action

The &lt;bes fixlet action&gt; inspectors let you examine BES Actions that are attached to Fixlet messages.

#### script type of &lt;bes fixlet action&gt; : string

Returns the MIME type of the specified Fixlet action.

#### script of &lt;bes fixlet action&gt; : string

Returns the script for the specified Fixlet action.

#### content id of &lt;bes fixlet action&gt; : string

Returns the content ID field for the specified Fixlet action.

#### success on run to completion of &lt;bes fixlet action&gt; : boolean

No documentation exists for this property.

#### success on original relevance of &lt;bes fixlet action&gt; : boolean

No documentation exists for this property.

#### success on custom relevance of &lt;bes fixlet action&gt; : boolean

No documentation exists for this property.

#### custom success relevance of &lt;bes fixlet action&gt; : string

No documentation exists for this property.

## bes fixlet

The &lt;bes fixlet&gt; inspectors allow you to iterate over the BES Fixlet messages to create lists of various Fixlet properties such as name, ID, site, and more.

#### &lt;bes fixlet&gt; as xml : utf8 string

Converts the specified BES Fixlet to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

#### wizard name of &lt;bes fixlet&gt; : string

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the name of that Wizard.Note: This is a Console-only inspector.

#### wizard link of &lt;bes fixlet&gt; : string

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the link of that Wizard.Note: This is a Console-only inspector.

#### wizard data of &lt;bes fixlet&gt; : html

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the DataStore element of that Wizard.Note: This is a Console-only inspector.

#### visible flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified BES Fixlet is not globally or locally hidden.

#### unlocked computer count of &lt;bes fixlet&gt; : integer

Returns the number of computers that are not locked and that have reported that the specified Fixlet message is relevant.Note: This is a Console-only inspector.

#### unique value of &lt;bes fixlet&gt; : bes fixlet with multiplicity

Returns the unique values of a given list of &lt;bes fixlet&gt; types, removing duplicates and sorting by value.

#### type of &lt;bes fixlet&gt; : string

Returns the type of the specified Fixlet message, which can have values such as &quot;Fixlet&quot;, &quot;Task&quot;, &quot;Analysis&quot;, &quot;ComputerGroup&quot; or &quot;Baseline&quot;.

#### task flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified BES Fixlet message originates from a Task.

#### taken action set of &lt;bes fixlet&gt; : bes action set

This inspector Iterates over the Actions sourced from the given fixlet and returns a set of Actions.

#### taken action of &lt;bes fixlet&gt; : bes action

This inspector Iterates over the Actions sourced from the given fixlet.

#### source severity of &lt;bes fixlet&gt; : string

Returns the source severity of the given Fixlet message as a string value.

#### source release date of &lt;bes fixlet&gt; : date

Returns the &lt;date&gt; object that represents the source release date of the specified Fixlet message.

#### source of &lt;bes fixlet&gt; : string

Returns the source of the given Fixlet message as a string value.

#### source id of &lt;bes fixlet&gt; : string

Returns the source ID of the given Fixlet message as a string value.

#### site of &lt;bes fixlet&gt; : bes site

Returns the &lt;bes site&gt; object which contains the specified fixlet.

#### set of &lt;bes fixlet&gt; : bes fixlet set

Converts the specified BES Fixlet list to a set that can be arithmetically manipulated.

#### sans id list of &lt;bes fixlet&gt; : string

Returns a string containing the list of SANS (SysAdmin, Audit, Network, Security) ID numbers associated with the specified Fixlet message.

#### result of &lt;bes fixlet&gt; : bes fixlet result

Returns a list of all &lt;bes fixlet result&gt; objects for all computers that have reported on the specified Fixlet message.

#### result from &lt;bes computer&gt; of &lt;bes fixlet&gt; : bes fixlet result

Returns a Fixlet result for the given computer and Fixlet.

#### relevant &lt;bes computer&gt; of &lt;bes fixlet&gt; : boolean

Returns TRUE if the given Fixlet message is relevant on the specified computer.

#### relevance of &lt;bes fixlet&gt; : string

Returns the relevance expression used to determine if the specified Fixlet message is applicable on a client computer.

#### relevance clause of &lt;bes fixlet&gt; : string

Iterates over all the individual relevances clauses in a Fixlet.  The related inspector &#39;relevance of &lt;bes fixlet&gt;&#39; returns a single clause that ANDs together all the individual clauses.

#### property of &lt;bes fixlet&gt; : bes property

If the specified Fixlet is from an analysis, this inspector returns a list of all of the &lt;bes property&gt; objects associated with it.

#### property &lt;integer&gt; of &lt;bes fixlet&gt; : bes property

If the specified Fixlet is from an analysis, this inspector returns the property with the ID given by &lt;integer&gt;.

#### operator site flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if and only if the specified Fixlet message resides in a non-master operator site.

#### open action count of &lt;bes fixlet&gt; : integer

Returns the number of open actions whose source is the specified Fixlet message.

#### name of &lt;bes fixlet&gt; : string

Returns the name of the specified BES Fixlet.

#### modification time of &lt;bes fixlet&gt; : time

Returns the time when the given BES Fixlet was last modified.

#### mime field of &lt;bes fixlet&gt; : mime field

Returns all the MIME fields for the specified Fixlet.

#### mime field &lt;string&gt; of &lt;bes fixlet&gt; : string

External fixlet authors can add custom fields to their Fixlets. This inspector returns the mime field labeled by &lt;string&gt; from the specified Fixlet.

#### message of &lt;bes fixlet&gt; : html

Returns an HTML string containing the text of the Fixlet message.

#### master site flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified Fixlet message is from the Master site.

#### locally visible flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified Fixlet message is locally visible.Note: This is a Console-only inspector.

#### link of &lt;bes fixlet&gt; : html

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

#### link href of &lt;bes fixlet&gt; : string

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes fixlet&gt;). Note that link href returns a normal string, not an HTML string.

#### link &lt;string&gt; of &lt;bes fixlet&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

#### link &lt;html&gt; of &lt;bes fixlet&gt; : html

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

#### issuer of &lt;bes fixlet&gt; : bes user

Returns the &lt;bes user&gt; object corresponding to the author of the specified fixlet.

#### id of &lt;bes fixlet&gt; : integer

Returns the numeric ID unique to the specified Fixlet message.

#### group flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified BES Fixlet message originates from a Group.

#### globally visible flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified Fixlet message is globally visible.

#### fixlet flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified BES Fixlet message originates from an ordinary Fixlet site.

#### field of &lt;bes fixlet&gt; : bes fixlet field

Returns the fields associated with the specified BES Fixlet.

#### field &lt;string&gt; of &lt;bes fixlet&gt; : bes fixlet field

Returns a BES Fixlet field with the given name in the specified Fixlet.

#### download size of &lt;bes fixlet&gt; : integer

Returns the size of the download associated with this Fixlet message, in bytes.

#### domain of &lt;bes fixlet&gt; : bes domain

A domain is attached to a Fixlet message when it is created. This inspector returns the domain associated with the specified Fixlet.

#### display source severity of &lt;bes fixlet&gt; : string

Returns the source severity of the specified Fixlet. This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### display source of &lt;bes fixlet&gt; : string

Returns the source of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### display source id of &lt;bes fixlet&gt; : string

Returns the source ID of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### display name of &lt;bes fixlet&gt; : string

Returns the name of the specified Fixlet. This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### display message of &lt;bes fixlet&gt; : html

Returns the message portion of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### display category of &lt;bes fixlet&gt; : string

Returns the category of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

#### digest file name of &lt;bes fixlet&gt; : string

Returns the file name of the .fxf file that contains this Fixlet message, or the empty string if the Fixlet message does not come from a digest file (i.e., it is a custom Fixlet).

#### default action of &lt;bes fixlet&gt; : bes fixlet action

Returns an object representing the default action for the specified Fixlet message.

#### cve id list of &lt;bes fixlet&gt; : string

Returns a string containing the list of CVE (Common Vulnerabilities and Exposures) ID numbers associated with the specified Fixlet message.

#### custom site of &lt;bes fixlet&gt; : bes site

If the specified Fixlet message resides in a custom site, this inspector returns the corresponding site object.

#### custom site flag of &lt;bes fixlet&gt; : boolean

Returns true if and only if the specified Fixlet message resides in a custom site.

#### custom flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified BES Fixlet message is custom.

#### creation time of &lt;bes fixlet&gt; : time

Returns the time when the specified fixlet was created. This inspector is only valid for custom fixlets.

#### components xml of &lt;bes fixlet&gt; : string

If the specified Fixlet message is a baseline, then this inspector returned the XML representation of the baseline components. Use component groups of &lt;bes fixlet&gt; instead.

#### component group of &lt;bes fixlet&gt; : bes baseline component group

If the specified Fixlet message is a baseline, then this inspector iterates over the component groups.

#### comment of &lt;bes fixlet&gt; : bes comment

Returns the comments assigned to the specified BES Fixlet message.

#### charset of &lt;bes fixlet&gt; : string

Returns the character set to be used when displaying the body or text of the specified Fixlet message.

#### category of &lt;bes fixlet&gt; : string

Returns the category of the given Fixlet message as a string value, such as &quot;Security Hotfix&quot;, &quot;Service Pack&quot;, &quot;Upgrade&quot;, and others.

#### body of &lt;bes fixlet&gt; : html

Returns an HTML string containing the body of the Fixlet message.

#### best activation of &lt;bes fixlet&gt; : bes activation

If the specified Fixlet message is from an analysis, then this inspector returns the activation which is most appropriate for the current console user.

#### baseline flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified BES Fixlet message originates from a Baseline.

#### applicable computer set of &lt;bes fixlet&gt; : bes computer set

Returns the set of computers where the given Fixlet(s) is applicable, i.e., those computers where the Fixlet is relevant.Example: size of union of applicable computer sets of bes fixlets whose ((source severity of it is &quot;Critical&quot;) and (current date - source release date of it &gt; 7 * day)) as floating point / size of bes computer set as floating point - Computes the ratio of computers which have at least one relevant critical fixlet released more than 1 week ago.

#### applicable computer of &lt;bes fixlet&gt; : bes computer

Returns a list of all of the &lt;bes computer&gt; objects reporting that the specified Fixlet message is relevant.

#### applicable computer count of &lt;bes fixlet&gt; : integer

Returns the number of computers (regardless of locking) that have reported that the specified Fixlet message is relevant.

#### analysis flag of &lt;bes fixlet&gt; : boolean

Returns TRUE if the specified BES Fixlet message originates from an Analysis.

#### activation of &lt;bes fixlet&gt; : bes activation

If the specified Fixlet message is from an analysis, this inspector returns a list of all of its activations.

#### action of &lt;bes fixlet&gt; : bes fixlet action

Returns a list of all the Fixlet actions associated with the specified Fixlet message.

#### action &lt;string&gt; of &lt;bes fixlet&gt; : bes fixlet action

Returns an object representing the named action for the specified Fixlet message.

#### action &lt;integer&gt; of &lt;bes fixlet&gt; : bes fixlet action

Returns an object representing the nth action for the specified Fixlet message.

#### parent relevance of &lt;bes fixlet&gt; : string

No documentation exists for this property.

## bes filter with multiplicity

The &lt;bes filter with multiplicity&gt; inspectors deal with arrays of BES filters, allowing you to extract unique filters and count them.

#### multiplicity of &lt;bes filter with multiplicity&gt; : integer

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes filter&gt; types.

## bes filter set

The &lt;bes filter set&gt; inspectors return the iterated list of BES Filters, converted into a set to make it easy to do set arithmetic with the list.

#### union of &lt;bes filter set&gt; : bes filter set

Returns the union of multiple BES filter sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### size of &lt;bes filter set&gt; : integer

Returns the number of unique BES Filters in the specified set.

#### intersection of &lt;bes filter set&gt; : bes filter set

Returns the intersection of multiple BES filter sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### element of &lt;bes filter set&gt; : bes filter

Returns the unique elements of the specified &lt;bes filter set&gt;, removing duplicates and sorting by value.

## bes filter

The &lt;bes filter&gt; inspectors return the filters, which represent the criteria used by the Find command (Ctrl-F in the BES Console). The filters are specific to computers, computer groups, Actions, Analyses, Baselines, Unmanaged Assets, Users, Tasks or Fixlets, and are appropriately flagged.

#### user set of &lt;bes filter&gt; : bes user set

Returns a filtered set of Console Operators. Given a Console Operator filter that specifies &quot;Name contains Joe&quot;, this inspector returns only the set of Console Operators named Joe.

#### user flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding Users.

#### unmanagedasset flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding Unmanaged Assets.

#### unique value of &lt;bes filter&gt; : bes filter with multiplicity

Returns the unique values of a given list of &lt;bes filter&gt; types, removing duplicates and sorting by value.

#### task set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of Tasks. Given a Task filter that specifies &quot;Visibility equals Locally Hidden&quot;, this inspector returns only the set of BES Tasks that are locally hidden.

#### task flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding Tasks.

#### set of &lt;bes filter&gt; : bes filter set

Converts the specified BES Filter list to a set that can be arithmetically manipulated.

#### private flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES filter is marked as private.

#### name of &lt;bes filter&gt; : string

Returns the name of the specified BES filter.

#### join by intersection flag of &lt;bes filter&gt; : boolean

Returns TRUE if the various find properties are intersected (included with ALL properties) in the specified filter.

#### id of &lt;bes filter&gt; : integer

Returns the numeric ID unique to the specified BES filter.

#### group flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding computer groups.

#### fixlet set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of Fixlets. Given a Fixlet filter that specifies &quot;Visibility equals Globally Hidden&quot;, this inspector returns only the set of BES Fixlets that are globally hidden.

#### fixlet flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding Computers.

#### domain of &lt;bes filter&gt; : bes domain

Returns the BES domain where the specified BES filter(s) were created.

#### computer set of &lt;bes filter&gt; : bes computer set

Returns a filtered set of Computers. Given a Computer filter that specifies &quot;OS contains &#39;Win&#39;&quot;, this inspector returns the set of Windows Computers.

#### computer group set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of computer groups. Given a computer group filter that specifies &quot;Name contains &#39;test&#39;&quot;, this inspector returns the set of computer groups that have &#39;test&#39; in their name.

#### computer flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding computers.

#### baseline set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of Baselines. Given a Baseline filter that specifies &quot;Visibility equals Visible&quot;, this inspector returns only the set of BES Baselines that are visible.

#### baseline flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding Baselines.

#### analysis set of &lt;bes filter&gt; : bes fixlet set

Returns a filtered set of Analyses. Given an Analysis filter that specifies &quot;Visibility equals Visible&quot;, this inspector returns only the set of BES Analyses that are visible.

#### analysis flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding Analyses.

#### action set of &lt;bes filter&gt; : bes action set

Returns a filtered set of Actions. Given an Action filter that specifies &quot;Name contains &#39;Custom Action&#39;&quot;, this inspector returns the set of BES Actions with &#39;Custom Action&#39; in the name.Example: size of (action set of bes filters) - Returns the number of BES Filters that were designed for finding Actions.

#### action flag of &lt;bes filter&gt; : boolean

Returns TRUE if the specified BES Filter was designed for finding Actions.

## bes baseline component group

Baselines provide a method of grouping Actions from multiple Fixlets, Tasks, or other Baselines. Once a Baseline is defined (in the BES Console) the Actions are all grouped for simulataneous application. This technique allows you to form natural groupings of Actions for a single-click deployment.

#### name of &lt;bes baseline component group&gt; : string

Returns the name(s) of the specified BES Baseline component group(s).

#### component of &lt;bes baseline component group&gt; : bes baseline component

Returns a list of the components of the specified BES Baseline component group.

## bes baseline component

The &lt;bes baseline component&gt; inspectors return the individual components of a Baseline, such as Fixlets, Tasks or other Baselines.

#### unknown computer set of &lt;bes baseline component&gt; : bes computer set

Returns the unknown computers associated with the specified baseline component. The list is formatted as a set for mathematical manipulations, included intersections and unions.

#### unknown computer count of &lt;bes baseline component&gt; : integer

Returns the number of unknown computers associated with the specified baseline component.

#### source fixlet of &lt;bes baseline component&gt; : bes fixlet

Returns the BES Fixlet(s) associated with the specified BES Baseline component.

#### relevance of &lt;bes baseline component&gt; : string

Returns the relevance expression used to determine if the specified BES Baseline component is applicable on a client computer.

#### name of &lt;bes baseline component&gt; : string

Returns the name of the specified BES Baseline component.

#### include in relevance flag of &lt;bes baseline component&gt; : boolean

When you define a Baseline by adding components, the default is to OR the relevance from each baseline component with the overall Baseline relevance. Thus, the multiple Action group will be relevant on machines where any of the components are relevant. If you add a component that is always relevant (such as &quot;true&quot;), you might want to uncheck the &quot;Baseline will be relevant on applicable computers where this component is relevant&quot; checkbox (click the + next to the component name to see it). This inspector returns TRUE if this box is checked for the specified component.

#### id of &lt;bes baseline component&gt; : integer

Returns the numeric ID of the specified BES Baseline component.

#### applicable computer set of &lt;bes baseline component&gt; : bes computer set

Returns the set of computers where the given baseline component(s) is applicable, i.e., those computers where the baseline component is relevant.

#### applicable computer count of &lt;bes baseline component&gt; : integer

Returns the number of computers (regardless of locking) that have reported that the specified BES Baseline component is relevant.

#### action of &lt;bes baseline component&gt; : bes fixlet action

Returns the Action corresponding to the specified BES Baseline component.

## bes activation

The &lt;bes activation&gt; inspectors examine the various Analyses that have been activated on the networked BES Clients.

#### name of &lt;bes activation&gt; : string

Returns the name of the specified BES activation as a string.

#### modification time of &lt;bes activation&gt; : time

Returns the time when the given BES Analysis activation was last modified.

#### issuer of &lt;bes activation&gt; : bes user

Returns the &lt;bes user&gt; object corresponding to the user who issued the specified activation.

#### id of &lt;bes activation&gt; : integer

Returns the numeric ID of the BES activation object.

#### database id of &lt;bes activation&gt; : integer

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES Activation resides.

#### creation time of &lt;bes activation&gt; : time

Returns the time when the given BES Analysis activation was created.

#### analysis of &lt;bes activation&gt; : bes fixlet

Returns the source analysis fixlet that spawned the specified activation.

#### active flag of &lt;bes activation&gt; : boolean

Returns TRUE if the specified activation is active, FALSE if it has been stopped.


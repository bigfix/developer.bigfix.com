---
title: content
---

{% type bes activation %}

The &lt;bes activation&gt; inspectors examine the various Analyses that have been activated on the networked BES Clients.

#### Properties of bes activation

{% property active flag of <bes activation> %}

Returns TRUE if the specified activation is active, FALSE if it has been stopped.

{% property analysis of <bes activation> %}

Returns the source analysis fixlet that spawned the specified activation.

{% property creation time of <bes activation> %}

Returns the time when the given BES Analysis activation was created.

{% property database id of <bes activation> %}

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES Activation resides.

{% property id of <bes activation> %}

Returns the numeric ID of the BES activation object.

{% property issuer of <bes activation> %}

Returns the &lt;bes user&gt; object corresponding to the user who issued the specified activation.

{% property modification time of <bes activation> %}

Returns the time when the given BES Analysis activation was last modified.

{% property name of <bes activation> %}

Returns the name of the specified BES activation as a string.

{% type bes baseline component %}

The &lt;bes baseline component&gt; inspectors return the individual components of a Baseline, such as Fixlets, Tasks or other Baselines.

#### Properties of bes baseline component

{% property action of <bes baseline component> %}

Returns the Action corresponding to the specified BES Baseline component.

{% property applicable computer count of <bes baseline component> %}

Returns the number of computers (regardless of locking) that have reported that the specified BES Baseline component is relevant.

{% property applicable computer set of <bes baseline component> %}

Returns the set of computers where the given baseline component(s) is applicable, i.e., those computers where the baseline component is relevant.

{% property id of <bes baseline component> %}

Returns the numeric ID of the specified BES Baseline component.

{% property include in relevance flag of <bes baseline component> %}

When you define a Baseline by adding components, the default is to OR the relevance from each baseline component with the overall Baseline relevance. Thus, the multiple Action group will be relevant on machines where any of the components are relevant. If you add a component that is always relevant (such as &quot;true&quot;), you might want to uncheck the &quot;Baseline will be relevant on applicable computers where this component is relevant&quot; checkbox (click the + next to the component name to see it). This inspector returns TRUE if this box is checked for the specified component.

{% property name of <bes baseline component> %}

Returns the name of the specified BES Baseline component.

{% property relevance of <bes baseline component> %}

Returns the relevance expression used to determine if the specified BES Baseline component is applicable on a client computer.

{% property source fixlet of <bes baseline component> %}

Returns the BES Fixlet(s) associated with the specified BES Baseline component.

{% property unknown computer count of <bes baseline component> %}

Returns the number of unknown computers associated with the specified baseline component.

{% property unknown computer set of <bes baseline component> %}

Returns the unknown computers associated with the specified baseline component. The list is formatted as a set for mathematical manipulations, included intersections and unions.

{% type bes baseline component group %}

Baselines provide a method of grouping Actions from multiple Fixlets, Tasks, or other Baselines. Once a Baseline is defined (in the BES Console) the Actions are all grouped for simulataneous application. This technique allows you to form natural groupings of Actions for a single-click deployment.

#### Properties of bes baseline component group

{% property component of <bes baseline component group> %}

Returns a list of the components of the specified BES Baseline component group.

{% property name of <bes baseline component group> %}

Returns the name(s) of the specified BES Baseline component group(s).

{% type bes filter %}

The &lt;bes filter&gt; inspectors return the filters, which represent the criteria used by the Find command (Ctrl-F in the BES Console). The filters are specific to computers, computer groups, Actions, Analyses, Baselines, Unmanaged Assets, Users, Tasks or Fixlets, and are appropriately flagged.

#### Properties of bes filter

{% property action flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding Actions.

{% property action set of <bes filter> %}

Returns a filtered set of Actions. Given an Action filter that specifies &quot;Name contains &#39;Custom Action&#39;&quot;, this inspector returns the set of BES Actions with &#39;Custom Action&#39; in the name.Example: size of (action set of bes filters) - Returns the number of BES Filters that were designed for finding Actions.

{% property analysis flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding Analyses.

{% property analysis set of <bes filter> %}

Returns a filtered set of Analyses. Given an Analysis filter that specifies &quot;Visibility equals Visible&quot;, this inspector returns only the set of BES Analyses that are visible.

{% property baseline flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding Baselines.

{% property baseline set of <bes filter> %}

Returns a filtered set of Baselines. Given a Baseline filter that specifies &quot;Visibility equals Visible&quot;, this inspector returns only the set of BES Baselines that are visible.

{% property computer flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding computers.

{% property computer group set of <bes filter> %}

Returns a filtered set of computer groups. Given a computer group filter that specifies &quot;Name contains &#39;test&#39;&quot;, this inspector returns the set of computer groups that have &#39;test&#39; in their name.

{% property computer set of <bes filter> %}

Returns a filtered set of Computers. Given a Computer filter that specifies &quot;OS contains &#39;Win&#39;&quot;, this inspector returns the set of Windows Computers.

{% property domain of <bes filter> %}

Returns the BES domain where the specified BES filter(s) were created.

{% property fixlet flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding Computers.

{% property fixlet set of <bes filter> %}

Returns a filtered set of Fixlets. Given a Fixlet filter that specifies &quot;Visibility equals Globally Hidden&quot;, this inspector returns only the set of BES Fixlets that are globally hidden.

{% property group flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding computer groups.

{% property id of <bes filter> %}

Returns the numeric ID unique to the specified BES filter.

{% property join by intersection flag of <bes filter> %}

Returns TRUE if the various find properties are intersected (included with ALL properties) in the specified filter.

{% property name of <bes filter> %}

Returns the name of the specified BES filter.

{% property private flag of <bes filter> %}

Returns TRUE if the specified BES filter is marked as private.

{% property set of <bes filter> %}

Converts the specified BES Filter list to a set that can be arithmetically manipulated.

{% property task flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding Tasks.

{% property task set of <bes filter> %}

Returns a filtered set of Tasks. Given a Task filter that specifies &quot;Visibility equals Locally Hidden&quot;, this inspector returns only the set of BES Tasks that are locally hidden.

{% property unique value of <bes filter> %}

Returns the unique values of a given list of &lt;bes filter&gt; types, removing duplicates and sorting by value.

{% property unmanagedasset flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding Unmanaged Assets.

{% property user flag of <bes filter> %}

Returns TRUE if the specified BES Filter was designed for finding Users.

{% property user set of <bes filter> %}

Returns a filtered set of Console Operators. Given a Console Operator filter that specifies &quot;Name contains Joe&quot;, this inspector returns only the set of Console Operators named Joe.

{% type bes filter set %}

The &lt;bes filter set&gt; inspectors return the iterated list of BES Filters, converted into a set to make it easy to do set arithmetic with the list.

#### Properties of bes filter set

{% property element of <bes filter set> %}

Returns the unique elements of the specified &lt;bes filter set&gt;, removing duplicates and sorting by value.

{% property intersection of <bes filter set> %}

Returns the intersection of multiple BES filter sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property size of <bes filter set> %}

Returns the number of unique BES Filters in the specified set.

{% property union of <bes filter set> %}

Returns the union of multiple BES filter sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% type bes filter with multiplicity %}

The &lt;bes filter with multiplicity&gt; inspectors deal with arrays of BES filters, allowing you to extract unique filters and count them.

#### Properties of bes filter with multiplicity

{% property multiplicity of <bes filter with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes filter&gt; types.

{% type bes fixlet %}

The &lt;bes fixlet&gt; inspectors allow you to iterate over the BES Fixlet messages to create lists of various Fixlet properties such as name, ID, site, and more.

#### Properties of bes fixlet

{% property action <integer> of <bes fixlet> %}

Returns an object representing the nth action for the specified Fixlet message.

{% property action <string> of <bes fixlet> %}

Returns an object representing the named action for the specified Fixlet message.

{% property action of <bes fixlet> %}

Returns a list of all the Fixlet actions associated with the specified Fixlet message.

{% property activation of <bes fixlet> %}

If the specified Fixlet message is from an analysis, this inspector returns a list of all of its activations.

{% property analysis flag of <bes fixlet> %}

Returns TRUE if the specified BES Fixlet message originates from an Analysis.

{% property applicable computer count of <bes fixlet> %}

Returns the number of computers (regardless of locking) that have reported that the specified Fixlet message is relevant.

{% property applicable computer of <bes fixlet> %}

Returns a list of all of the &lt;bes computer&gt; objects reporting that the specified Fixlet message is relevant.

{% property applicable computer set of <bes fixlet> %}

Returns the set of computers where the given Fixlet(s) is applicable, i.e., those computers where the Fixlet is relevant.Example: size of union of applicable computer sets of bes fixlets whose ((source severity of it is &quot;Critical&quot;) and (current date - source release date of it &gt; 7 * day)) as floating point / size of bes computer set as floating point - Computes the ratio of computers which have at least one relevant critical fixlet released more than 1 week ago.

{% property baseline flag of <bes fixlet> %}

Returns TRUE if the specified BES Fixlet message originates from a Baseline.

{% property best activation of <bes fixlet> %}

If the specified Fixlet message is from an analysis, then this inspector returns the activation which is most appropriate for the current console user.

{% property body of <bes fixlet> %}

Returns an HTML string containing the body of the Fixlet message.

{% property category of <bes fixlet> %}

Returns the category of the given Fixlet message as a string value, such as &quot;Security Hotfix&quot;, &quot;Service Pack&quot;, &quot;Upgrade&quot;, and others.

{% property charset of <bes fixlet> %}

Returns the character set to be used when displaying the body or text of the specified Fixlet message.

{% property comment of <bes fixlet> %}

Returns the comments assigned to the specified BES Fixlet message.

{% property component group of <bes fixlet> %}

If the specified Fixlet message is a baseline, then this inspector iterates over the component groups.

{% property components xml of <bes fixlet> %}

If the specified Fixlet message is a baseline, then this inspector returned the XML representation of the baseline components. Use component groups of &lt;bes fixlet&gt; instead.

{% property creation time of <bes fixlet> %}

Returns the time when the specified fixlet was created. This inspector is only valid for custom fixlets.

{% property custom flag of <bes fixlet> %}

Returns TRUE if the specified BES Fixlet message is custom.

{% property custom site flag of <bes fixlet> %}

Returns true if and only if the specified Fixlet message resides in a custom site.

{% property custom site of <bes fixlet> %}

If the specified Fixlet message resides in a custom site, this inspector returns the corresponding site object.

{% property cve id list of <bes fixlet> %}

Returns a string containing the list of CVE (Common Vulnerabilities and Exposures) ID numbers associated with the specified Fixlet message.

{% property default action of <bes fixlet> %}

Returns an object representing the default action for the specified Fixlet message.

{% property digest file name of <bes fixlet> %}

Returns the file name of the .fxf file that contains this Fixlet message, or the empty string if the Fixlet message does not come from a digest file (i.e., it is a custom Fixlet).

{% property display category of <bes fixlet> %}

Returns the category of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property display message of <bes fixlet> %}

Returns the message portion of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property display name of <bes fixlet> %}

Returns the name of the specified Fixlet. This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property display source id of <bes fixlet> %}

Returns the source ID of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property display source of <bes fixlet> %}

Returns the source of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property display source severity of <bes fixlet> %}

Returns the source severity of the specified Fixlet. This inspector returns the value as displayed in the Console, which may be translated into various languages.

{% property domain of <bes fixlet> %}

A domain is attached to a Fixlet message when it is created. This inspector returns the domain associated with the specified Fixlet.

{% property download size of <bes fixlet> %}

Returns the size of the download associated with this Fixlet message, in bytes.

{% property field <string> of <bes fixlet> %}

Returns a BES Fixlet field with the given name in the specified Fixlet.

{% property field of <bes fixlet> %}

Returns the fields associated with the specified BES Fixlet.

{% property fixlet flag of <bes fixlet> %}

Returns TRUE if the specified BES Fixlet message originates from an ordinary Fixlet site.

{% property globally visible flag of <bes fixlet> %}

Returns TRUE if the specified Fixlet message is globally visible.

{% property group flag of <bes fixlet> %}

Returns TRUE if the specified BES Fixlet message originates from a Group.

{% property id of <bes fixlet> %}

Returns the numeric ID unique to the specified Fixlet message.

{% property issuer of <bes fixlet> %}

Returns the &lt;bes user&gt; object corresponding to the author of the specified fixlet.

{% property link <html> of <bes fixlet> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

{% property link <string> of <bes fixlet> %}

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

{% property link href of <bes fixlet> %}

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes fixlet&gt;). Note that link href returns a normal string, not an HTML string.

{% property link of <bes fixlet> %}

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

{% property locally visible flag of <bes fixlet> %}

Returns TRUE if the specified Fixlet message is locally visible.Note: This is a Console-only inspector.

{% property master site flag of <bes fixlet> %}

Returns TRUE if the specified Fixlet message is from the Master site.

{% property message of <bes fixlet> %}

Returns an HTML string containing the text of the Fixlet message.

{% property mime field <string> of <bes fixlet> %}

External fixlet authors can add custom fields to their Fixlets. This inspector returns the mime field labeled by &lt;string&gt; from the specified Fixlet.

{% property mime field of <bes fixlet> %}

Returns all the MIME fields for the specified Fixlet.

{% property modification time of <bes fixlet> %}

Returns the time when the given BES Fixlet was last modified.

{% property name of <bes fixlet> %}

Returns the name of the specified BES Fixlet.

{% property open action count of <bes fixlet> %}

Returns the number of open actions whose source is the specified Fixlet message.

{% property operator site flag of <bes fixlet> %}

Returns TRUE if and only if the specified Fixlet message resides in a non-master operator site.

{% property parent relevance of <bes fixlet> %}

No documentation exists for this property.

{% property property <integer> of <bes fixlet> %}

If the specified Fixlet is from an analysis, this inspector returns the property with the ID given by &lt;integer&gt;.

{% property property of <bes fixlet> %}

If the specified Fixlet is from an analysis, this inspector returns a list of all of the &lt;bes property&gt; objects associated with it.

{% property relevance clause of <bes fixlet> %}

Iterates over all the individual relevances clauses in a Fixlet.  The related inspector &#39;relevance of &lt;bes fixlet&gt;&#39; returns a single clause that ANDs together all the individual clauses.

{% property relevance of <bes fixlet> %}

Returns the relevance expression used to determine if the specified Fixlet message is applicable on a client computer.

{% property relevant <bes computer> of <bes fixlet> %}

Returns TRUE if the given Fixlet message is relevant on the specified computer.

{% property result from <bes computer> of <bes fixlet> %}

Returns a Fixlet result for the given computer and Fixlet.

{% property result of <bes fixlet> %}

Returns a list of all &lt;bes fixlet result&gt; objects for all computers that have reported on the specified Fixlet message.

{% property sans id list of <bes fixlet> %}

Returns a string containing the list of SANS (SysAdmin, Audit, Network, Security) ID numbers associated with the specified Fixlet message.

{% property set of <bes fixlet> %}

Converts the specified BES Fixlet list to a set that can be arithmetically manipulated.

{% property site of <bes fixlet> %}

Returns the &lt;bes site&gt; object which contains the specified fixlet.

{% property source id of <bes fixlet> %}

Returns the source ID of the given Fixlet message as a string value.

{% property source of <bes fixlet> %}

Returns the source of the given Fixlet message as a string value.

{% property source release date of <bes fixlet> %}

Returns the &lt;date&gt; object that represents the source release date of the specified Fixlet message.

{% property source severity of <bes fixlet> %}

Returns the source severity of the given Fixlet message as a string value.

{% property taken action of <bes fixlet> %}

This inspector Iterates over the Actions sourced from the given fixlet.

{% property taken action set of <bes fixlet> %}

This inspector Iterates over the Actions sourced from the given fixlet and returns a set of Actions.

{% property task flag of <bes fixlet> %}

Returns TRUE if the specified BES Fixlet message originates from a Task.

{% property type of <bes fixlet> %}

Returns the type of the specified Fixlet message, which can have values such as &quot;Fixlet&quot;, &quot;Task&quot;, &quot;Analysis&quot;, &quot;ComputerGroup&quot; or &quot;Baseline&quot;.

{% property unique value of <bes fixlet> %}

Returns the unique values of a given list of &lt;bes fixlet&gt; types, removing duplicates and sorting by value.

{% property unlocked computer count of <bes fixlet> %}

Returns the number of computers that are not locked and that have reported that the specified Fixlet message is relevant.Note: This is a Console-only inspector.

{% property visible flag of <bes fixlet> %}

Returns TRUE if the specified BES Fixlet is not globally or locally hidden.

{% property wizard data of <bes fixlet> %}

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the DataStore element of that Wizard.Note: This is a Console-only inspector.

{% property wizard link of <bes fixlet> %}

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the link of that Wizard.Note: This is a Console-only inspector.

{% property wizard name of <bes fixlet> %}

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the name of that Wizard.Note: This is a Console-only inspector.

#### Casts of bes fixlet

{% cast <bes fixlet> as xml %}

Converts the specified BES Fixlet to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

{% type bes fixlet action %}

The &lt;bes fixlet action&gt; inspectors let you examine BES Actions that are attached to Fixlet messages.

#### Properties of bes fixlet action

{% property content id of <bes fixlet action> %}

Returns the content ID field for the specified Fixlet action.

{% property custom success relevance of <bes fixlet action> %}

No documentation exists for this property.

{% property script of <bes fixlet action> %}

Returns the script for the specified Fixlet action.

{% property script type of <bes fixlet action> %}

Returns the MIME type of the specified Fixlet action.

{% property success on custom relevance of <bes fixlet action> %}

No documentation exists for this property.

{% property success on original relevance of <bes fixlet action> %}

No documentation exists for this property.

{% property success on run to completion of <bes fixlet action> %}

No documentation exists for this property.

{% type bes fixlet field %}

In addition to the Relevance and Action fields, Fixlet messages and Tasks can contain various additional fields. If the content is developed in BDE, these fields may be specified by the Fixlet templates you use. Depending on the site or the template, fields may have different interpretations.

#### Properties of bes fixlet field

{% property name of <bes fixlet field> %}

Returns the name(s) of the specified BES Fixlet field(s).

{% property value of <bes fixlet field> %}

Returns the value(s) of the specified BES Fixlet field(s).

{% type bes fixlet field value %}

The &lt;bes fixlet field value&gt; inspectors provide access to the values of informational fields that are included with some Fixlet messages and Tasks. For more Information, see the BES Fixlet field inspectors.

#### Properties of bes fixlet field value

{% property display value of <bes fixlet field value> %}

Returns the value of a BES Fixlet field as a human-readable string.

#### Casts of bes fixlet field value

{% cast <bes fixlet field value> as date %}

Returns the value of the specified BES Fixlet field cast as a date type.

{% cast <bes fixlet field value> as integer %}

Returns the value of the specified BES Fixlet field cast as an integer type.

{% cast <bes fixlet field value> as string %}

Returns the value of the specified BES Fixlet field cast as a string type.

{% cast <bes fixlet field value> as time %}

Returns the value of the specified BES Fixlet field cast as a time type.

{% type bes fixlet result %}

The &lt;bes fixlet result&gt; inspectors allow you to inspect the results of BES Fixlet messages, including relevance and affected computers.

#### Properties of bes fixlet result

{% property computer of <bes fixlet result> %}

Returns the BES computer associated with the specified Fixlet result.

{% property first became relevant of <bes fixlet result> %}

Returns the time when the Fixlet result first became relevant.Note: This is a Web Reports-only inspector.

{% property fixlet of <bes fixlet result> %}

Returns the Fixlet message associated with the specified Fixlet result.

{% property last became nonrelevant of <bes fixlet result> %}

Returns the time when the Fixlet result last became non-relevant. This may be tied to the successful completion of the Fixlet message.Note: This is a Web Reports-only inspector.

{% property last became relevant of <bes fixlet result> %}

Returns the time when the Fixlet result last became relevant.Note: This is a Web Reports-only inspector.

{% property relevant flag of <bes fixlet result> %}

Returns TRUE if the computer reports that the given Fixlet result is relevant, and FALSE otherwise.

{% property remediated flag of <bes fixlet result> %}

No documentation exists for this property.

{% type bes fixlet set %}

The &lt;bes fixlet set&gt; inspectors iterate over the current set of BES Fixlets and package them as a mathematical set, suitable for further set manipulation.

#### Properties of bes fixlet set

{% property element of <bes fixlet set> %}

Returns the unique elements of the specified &lt;bes fixlet set&gt;, removing duplicates and sorting by value.

{% property intersection of <bes fixlet set> %}

Returns the intersection of multiple BES Fixlet sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

{% property size of <bes fixlet set> %}

Returns the number of unique BES Fixlets in the specified set.

{% property union of <bes fixlet set> %}

Returns the union of multiple BES Fixlet sets. The arguments to this inspector are typically plural values or iterations, but you can also compose such a set by separating singlet values with semicolons.

#### Casts of bes fixlet set

{% cast <bes fixlet set> as xml %}

Converts the specified set of BES Fixlets to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

{% type bes fixlet with multiplicity %}

The &lt;bes fixlet with multiplicity&gt; inspectors deal with arrays of BES fixlets, allowing you to extract unique fixlets and count them.

#### Properties of bes fixlet with multiplicity

{% property multiplicity of <bes fixlet with multiplicity> %}

Sorts the list and returns the multiplicity, or count, of each unique element in the specified list of multiple &lt;bes fixlet&gt; types.


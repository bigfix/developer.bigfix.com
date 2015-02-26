# bes fixlet

The &lt;bes fixlet&gt; inspectors allow you to iterate over the BES Fixlet messages to create lists of various Fixlet properties such as name, ID, site, and more.

# action <integer> of <bes fixlet>

Returns an object representing the nth action for the specified Fixlet message.

# action <string> of <bes fixlet>

Returns an object representing the named action for the specified Fixlet message.

# action of <bes fixlet>

Returns a list of all the Fixlet actions associated with the specified Fixlet message.

# activation of <bes fixlet>

If the specified Fixlet message is from an analysis, this inspector returns a list of all of its activations.

# analysis flag of <bes fixlet>

Returns `True` if the specified BES Fixlet message originates from an Analysis.

# applicable computer count of <bes fixlet>

Returns the number of computers (regardless of locking) that have reported that the specified Fixlet message is relevant.

# applicable computer of <bes fixlet>

Returns a list of all of the &lt;bes computer&gt; objects reporting that the specified Fixlet message is relevant.

# applicable computer set of <bes fixlet>

Returns the set of computers where the given Fixlet(s) is applicable, i.e., those computers where the Fixlet is relevant.Example: size of union of applicable computer sets of bes fixlets whose ((source severity of it is &quot;Critical&quot;) and (current date - source release date of it &gt; 7 * day)) as floating point / size of bes computer set as floating point - Computes the ratio of computers which have at least one relevant critical fixlet released more than 1 week ago.

# baseline flag of <bes fixlet>

Returns `True` if the specified BES Fixlet message originates from a Baseline.

# best activation of <bes fixlet>

If the specified Fixlet message is from an analysis, then this inspector returns the activation which is most appropriate for the current console user.

# body of <bes fixlet>

Returns an HTML string containing the body of the Fixlet message.

# category of <bes fixlet>

Returns the category of the given Fixlet message as a string value, such as &quot;Security Hotfix&quot;, &quot;Service Pack&quot;, &quot;Upgrade&quot;, and others.

# charset of <bes fixlet>

Returns the character set to be used when displaying the body or text of the specified Fixlet message.

# comment of <bes fixlet>

Returns the comments assigned to the specified BES Fixlet message.

# component group of <bes fixlet>

If the specified Fixlet message is a baseline, then this inspector iterates over the component groups.

# components xml of <bes fixlet>

If the specified Fixlet message is a baseline, then this inspector returned the XML representation of the baseline components. Use component groups of &lt;bes fixlet&gt; instead.

# creation time of <bes fixlet>

Returns the time when the specified fixlet was created. This inspector is only valid for custom fixlets.

# custom flag of <bes fixlet>

Returns `True` if the specified BES Fixlet message is custom.

# custom site flag of <bes fixlet>

Returns `True` if and only if the specified Fixlet message resides in a custom site.

# custom site of <bes fixlet>

If the specified Fixlet message resides in a custom site, this inspector returns the corresponding site object.

# cve id list of <bes fixlet>

Returns a string containing the list of CVE (Common Vulnerabilities and Exposures) ID numbers associated with the specified Fixlet message.

# default action of <bes fixlet>

Returns an object representing the default action for the specified Fixlet message.

# digest file name of <bes fixlet>

Returns the file name of the .fxf file that contains this Fixlet message, or the empty string if the Fixlet message does not come from a digest file (i.e., it is a custom Fixlet).

# display category of <bes fixlet>

Returns the category of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display message of <bes fixlet>

Returns the message portion of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display name of <bes fixlet>

Returns the name of the specified Fixlet. This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display source id of <bes fixlet>

Returns the source ID of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display source of <bes fixlet>

Returns the source of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display source severity of <bes fixlet>

Returns the source severity of the specified Fixlet. This inspector returns the value as displayed in the Console, which may be translated into various languages.

# domain of <bes fixlet>

A domain is attached to a Fixlet message when it is created. This inspector returns the domain associated with the specified Fixlet.

# download size of <bes fixlet>

Returns the size of the download associated with this Fixlet message, in bytes.

# field <string> of <bes fixlet>

Returns a BES Fixlet field with the given name in the specified Fixlet.

# field of <bes fixlet>

Returns the fields associated with the specified BES Fixlet.

# fixlet flag of <bes fixlet>

Returns `True` if the specified BES Fixlet message originates from an ordinary Fixlet site.

# globally visible flag of <bes fixlet>

Returns `True` if the specified Fixlet message is globally visible.

# group flag of <bes fixlet>

Returns `True` if the specified BES Fixlet message originates from a Group.

# id of <bes fixlet>

Returns the numeric ID unique to the specified Fixlet message.

# issuer of <bes fixlet>

Returns the &lt;bes user&gt; object corresponding to the author of the specified fixlet.

# link <html> of <bes fixlet>

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

# link <string> of <bes fixlet>

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

# link href of <bes fixlet>

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes fixlet&gt;). Note that link href returns a normal string, not an HTML string.

# link of <bes fixlet>

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

# locally visible flag of <bes fixlet>

Returns `True` if the specified Fixlet message is locally visible.Note: This is a Console-only inspector.

# master site flag of <bes fixlet>

Returns `True` if the specified Fixlet message is from the Master site.

# message of <bes fixlet>

Returns an HTML string containing the text of the Fixlet message.

# mime field <string> of <bes fixlet>

External fixlet authors can add custom fields to their Fixlets. This inspector returns the mime field labeled by &lt;string&gt; from the specified Fixlet.

# mime field of <bes fixlet>

Returns all the MIME fields for the specified Fixlet.

# modification time of <bes fixlet>

Returns the time when the given BES Fixlet was last modified.

# name of <bes fixlet>

Returns the name of the specified BES Fixlet.

# open action count of <bes fixlet>

Returns the number of open actions whose source is the specified Fixlet message.

# operator site flag of <bes fixlet>

Returns `True` if and only if the specified Fixlet message resides in a non-master operator site.

# parent relevance of <bes fixlet>

No documentation exists.

# property <integer> of <bes fixlet>

If the specified Fixlet is from an analysis, this inspector returns the property with the ID given by &lt;integer&gt;.

# property of <bes fixlet>

If the specified Fixlet is from an analysis, this inspector returns a list of all of the &lt;bes property&gt; objects associated with it.

# relevance clause of <bes fixlet>

Iterates over all the individual relevances clauses in a Fixlet.  The related inspector &#39;relevance of &lt;bes fixlet&gt;&#39; returns a single clause that ANDs together all the individual clauses.

# relevance of <bes fixlet>

Returns the relevance expression used to determine if the specified Fixlet message is applicable on a client computer.

# relevant <bes computer> of <bes fixlet>

Returns `True` if the given Fixlet message is relevant on the specified computer.

# result from <bes computer> of <bes fixlet>

Returns a Fixlet result for the given computer and Fixlet.

# result of <bes fixlet>

Returns a list of all &lt;bes fixlet result&gt; objects for all computers that have reported on the specified Fixlet message.

# sans id list of <bes fixlet>

Returns a string containing the list of SANS (SysAdmin, Audit, Network, Security) ID numbers associated with the specified Fixlet message.

# set of <bes fixlet>

Converts the specified BES Fixlet list to a set that can be arithmetically manipulated.

# site of <bes fixlet>

Returns the &lt;bes site&gt; object which contains the specified fixlet.

# source id of <bes fixlet>

Returns the source ID of the given Fixlet message as a string value.

# source of <bes fixlet>

Returns the source of the given Fixlet message as a string value.

# source release date of <bes fixlet>

Returns the &lt;date&gt; object that represents the source release date of the specified Fixlet message.

# source severity of <bes fixlet>

Returns the source severity of the given Fixlet message as a string value.

# taken action of <bes fixlet>

This inspector Iterates over the Actions sourced from the given fixlet.

# taken action set of <bes fixlet>

This inspector Iterates over the Actions sourced from the given fixlet and returns a set of Actions.

# task flag of <bes fixlet>

Returns `True` if the specified BES Fixlet message originates from a Task.

# type of <bes fixlet>

Returns the type of the specified Fixlet message, which can have values such as &quot;Fixlet&quot;, &quot;Task&quot;, &quot;Analysis&quot;, &quot;ComputerGroup&quot; or &quot;Baseline&quot;.

# unique value of <bes fixlet>

Returns the unique values of a given list of &lt;bes fixlet&gt; types, removing duplicates and sorting by value.

# unlocked computer count of <bes fixlet>

Returns the number of computers that are not locked and that have reported that the specified Fixlet message is relevant.Note: This is a Console-only inspector.

# visible flag of <bes fixlet>

Returns `True` if the specified BES Fixlet is not globally or locally hidden.

# wizard data of <bes fixlet>

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the DataStore element of that Wizard.Note: This is a Console-only inspector.

# wizard link of <bes fixlet>

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the link of that Wizard.Note: This is a Console-only inspector.

# wizard name of <bes fixlet>

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the name of that Wizard.Note: This is a Console-only inspector.

# <bes fixlet> as xml

Converts the specified BES Fixlet to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

# type: bes fixlet

The &lt;bes fixlet&gt; inspectors allow you to iterate over the BES Fixlet messages to create lists of various Fixlet properties such as name, ID, site, and more.

# action &lt;integer&gt; of &lt;bes fixlet&gt;

Returns an object representing the nth action for the specified Fixlet message.

# action &lt;string&gt; of &lt;bes fixlet&gt;

Returns an object representing the named action for the specified Fixlet message.

# action of &lt;bes fixlet&gt;

Returns a list of all the Fixlet actions associated with the specified Fixlet message.

# activation of &lt;bes fixlet&gt;

If the specified Fixlet message is from an analysis, this inspector returns a list of all of its activations.

# analysis flag of &lt;bes fixlet&gt;

Returns `True` if the specified BES Fixlet message originates from an Analysis.

# applicable computer count of &lt;bes fixlet&gt;

Returns the number of computers (regardless of locking) that have reported that the specified Fixlet message is relevant.

# applicable computer of &lt;bes fixlet&gt;

Returns a list of all of the &lt;bes computer&gt; objects reporting that the specified Fixlet message is relevant.

# applicable computer set of &lt;bes fixlet&gt;

Returns the set of computers where the given Fixlet(s) is applicable, i.e., those computers where the Fixlet is relevant.Example: size of union of applicable computer sets of bes fixlets whose ((source severity of it is &quot;Critical&quot;) and (current date - source release date of it &gt; 7 * day)) as floating point / size of bes computer set as floating point - Computes the ratio of computers which have at least one relevant critical fixlet released more than 1 week ago.

# baseline flag of &lt;bes fixlet&gt;

Returns `True` if the specified BES Fixlet message originates from a Baseline.

# best activation of &lt;bes fixlet&gt;

If the specified Fixlet message is from an analysis, then this inspector returns the activation which is most appropriate for the current console user.

# body of &lt;bes fixlet&gt;

Returns an HTML string containing the body of the Fixlet message.

# category of &lt;bes fixlet&gt;

Returns the category of the given Fixlet message as a string value, such as &quot;Security Hotfix&quot;, &quot;Service Pack&quot;, &quot;Upgrade&quot;, and others.

# charset of &lt;bes fixlet&gt;

Returns the character set to be used when displaying the body or text of the specified Fixlet message.

# comment of &lt;bes fixlet&gt;

Returns the comments assigned to the specified BES Fixlet message.

# component group of &lt;bes fixlet&gt;

If the specified Fixlet message is a baseline, then this inspector iterates over the component groups.

# components xml of &lt;bes fixlet&gt;

If the specified Fixlet message is a baseline, then this inspector returned the XML representation of the baseline components. Use component groups of &lt;bes fixlet&gt; instead.

# creation time of &lt;bes fixlet&gt;

Returns the time when the specified fixlet was created. This inspector is only valid for custom fixlets.

# custom flag of &lt;bes fixlet&gt;

Returns `True` if the specified BES Fixlet message is custom.

# custom site flag of &lt;bes fixlet&gt;

Returns `True` if and only if the specified Fixlet message resides in a custom site.

# custom site of &lt;bes fixlet&gt;

If the specified Fixlet message resides in a custom site, this inspector returns the corresponding site object.

# cve id list of &lt;bes fixlet&gt;

Returns a string containing the list of CVE (Common Vulnerabilities and Exposures) ID numbers associated with the specified Fixlet message.

# default action of &lt;bes fixlet&gt;

Returns an object representing the default action for the specified Fixlet message.

# digest file name of &lt;bes fixlet&gt;

Returns the file name of the .fxf file that contains this Fixlet message, or the empty string if the Fixlet message does not come from a digest file (i.e., it is a custom Fixlet).

# display category of &lt;bes fixlet&gt;

Returns the category of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display message of &lt;bes fixlet&gt;

Returns the message portion of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display name of &lt;bes fixlet&gt;

Returns the name of the specified Fixlet. This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display source id of &lt;bes fixlet&gt;

Returns the source ID of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display source of &lt;bes fixlet&gt;

Returns the source of the specified Fixlet.  This inspector returns the value as displayed in the Console, which may be translated into various languages.

# display source severity of &lt;bes fixlet&gt;

Returns the source severity of the specified Fixlet. This inspector returns the value as displayed in the Console, which may be translated into various languages.

# domain of &lt;bes fixlet&gt;

A domain is attached to a Fixlet message when it is created. This inspector returns the domain associated with the specified Fixlet.

# download size of &lt;bes fixlet&gt;

Returns the size of the download associated with this Fixlet message, in bytes.

# field &lt;string&gt; of &lt;bes fixlet&gt;

Returns a BES Fixlet field with the given name in the specified Fixlet.

# field of &lt;bes fixlet&gt;

Returns the fields associated with the specified BES Fixlet.

# fixlet flag of &lt;bes fixlet&gt;

Returns `True` if the specified BES Fixlet message originates from an ordinary Fixlet site.

# globally visible flag of &lt;bes fixlet&gt;

Returns `True` if the specified Fixlet message is globally visible.

# group flag of &lt;bes fixlet&gt;

Returns `True` if the specified BES Fixlet message originates from a Group.

# id of &lt;bes fixlet&gt;

Returns the numeric ID unique to the specified Fixlet message.

# issuer of &lt;bes fixlet&gt;

Returns the &lt;bes user&gt; object corresponding to the author of the specified fixlet.

# link &lt;html&gt; of &lt;bes fixlet&gt;

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

# link &lt;string&gt; of &lt;bes fixlet&gt;

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

# link href of &lt;bes fixlet&gt;

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes fixlet&gt;). Note that link href returns a normal string, not an HTML string.

# link of &lt;bes fixlet&gt;

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the specified Fixlet document (in the BES Console) or its description page (in Web Reports).

# locally visible flag of &lt;bes fixlet&gt;

Returns `True` if the specified Fixlet message is locally visible.Note: This is a Console-only inspector.

# master site flag of &lt;bes fixlet&gt;

Returns `True` if the specified Fixlet message is from the Master site.

# message of &lt;bes fixlet&gt;

Returns an HTML string containing the text of the Fixlet message.

# mime field &lt;string&gt; of &lt;bes fixlet&gt;

External fixlet authors can add custom fields to their Fixlets. This inspector returns the mime field labeled by &lt;string&gt; from the specified Fixlet.

# mime field of &lt;bes fixlet&gt;

Returns all the MIME fields for the specified Fixlet.

# modification time of &lt;bes fixlet&gt;

Returns the time when the given BES Fixlet was last modified.

# name of &lt;bes fixlet&gt;

Returns the name of the specified BES Fixlet.

# open action count of &lt;bes fixlet&gt;

Returns the number of open actions whose source is the specified Fixlet message.

# operator site flag of &lt;bes fixlet&gt;

Returns `True` if and only if the specified Fixlet message resides in a non-master operator site.

# parent relevance of &lt;bes fixlet&gt;

No documentation exists.

# property &lt;integer&gt; of &lt;bes fixlet&gt;

If the specified Fixlet is from an analysis, this inspector returns the property with the ID given by &lt;integer&gt;.

# property of &lt;bes fixlet&gt;

If the specified Fixlet is from an analysis, this inspector returns a list of all of the &lt;bes property&gt; objects associated with it.

# relevance clause of &lt;bes fixlet&gt;

Iterates over all the individual relevances clauses in a Fixlet.  The related inspector &#39;relevance of &lt;bes fixlet&gt;&#39; returns a single clause that ANDs together all the individual clauses.

# relevance of &lt;bes fixlet&gt;

Returns the relevance expression used to determine if the specified Fixlet message is applicable on a client computer.

# relevant &lt;bes computer&gt; of &lt;bes fixlet&gt;

Returns `True` if the given Fixlet message is relevant on the specified computer.

# result from &lt;bes computer&gt; of &lt;bes fixlet&gt;

Returns a Fixlet result for the given computer and Fixlet.

# result of &lt;bes fixlet&gt;

Returns a list of all &lt;bes fixlet result&gt; objects for all computers that have reported on the specified Fixlet message.

# sans id list of &lt;bes fixlet&gt;

Returns a string containing the list of SANS (SysAdmin, Audit, Network, Security) ID numbers associated with the specified Fixlet message.

# set of &lt;bes fixlet&gt;

Converts the specified BES Fixlet list to a set that can be arithmetically manipulated.

# site of &lt;bes fixlet&gt;

Returns the &lt;bes site&gt; object which contains the specified fixlet.

# source id of &lt;bes fixlet&gt;

Returns the source ID of the given Fixlet message as a string value.

# source of &lt;bes fixlet&gt;

Returns the source of the given Fixlet message as a string value.

# source release date of &lt;bes fixlet&gt;

Returns the &lt;date&gt; object that represents the source release date of the specified Fixlet message.

# source severity of &lt;bes fixlet&gt;

Returns the source severity of the given Fixlet message as a string value.

# taken action of &lt;bes fixlet&gt;

This inspector Iterates over the Actions sourced from the given fixlet.

# taken action set of &lt;bes fixlet&gt;

This inspector Iterates over the Actions sourced from the given fixlet and returns a set of Actions.

# task flag of &lt;bes fixlet&gt;

Returns `True` if the specified BES Fixlet message originates from a Task.

# type of &lt;bes fixlet&gt;

Returns the type of the specified Fixlet message, which can have values such as &quot;Fixlet&quot;, &quot;Task&quot;, &quot;Analysis&quot;, &quot;ComputerGroup&quot; or &quot;Baseline&quot;.

# unique value of &lt;bes fixlet&gt;

Returns the unique values of a given list of &lt;bes fixlet&gt; types, removing duplicates and sorting by value.

# unlocked computer count of &lt;bes fixlet&gt;

Returns the number of computers that are not locked and that have reported that the specified Fixlet message is relevant.Note: This is a Console-only inspector.

# visible flag of &lt;bes fixlet&gt;

Returns `True` if the specified BES Fixlet is not globally or locally hidden.

# wizard data of &lt;bes fixlet&gt;

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the DataStore element of that Wizard.Note: This is a Console-only inspector.

# wizard link of &lt;bes fixlet&gt;

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the link of that Wizard.Note: This is a Console-only inspector.

# wizard name of &lt;bes fixlet&gt;

If the specified Fixlet message was created with a Wizard then this inspector returns the HTML string representing the name of that Wizard.Note: This is a Console-only inspector.

# &lt;bes fixlet&gt; as xml

Converts the specified BES Fixlet to XML format, for submission to the EvaluateRelevance API used by the BES Console and Web Reports.

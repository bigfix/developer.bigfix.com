# type: bes computer

The &lt;bes computer&gt; inspectors return lists of the computers currently visible through the BES Console.

# action result of &lt;bes computer&gt;

Returns the results of BES Actions that have occurred on the specified computer.

# active directory path of &lt;bes computer&gt;

Returns the result of the &#39;Active Directory Path&#39; property of the specified computer.

# administrator &lt;bes user&gt; of &lt;bes computer&gt;

Returns `True` if the specified user is an administrator of the given computers.

# administrator of &lt;bes computer&gt;

Iterates over the users who have administrative rights on this computer.

# administrator set of &lt;bes computer&gt;

Returns the set of users who have administrative rights on this computer.

# agent type of &lt;bes computer&gt;

No documentation exists.

# agent version of &lt;bes computer&gt;

No documentation exists.

# bes computer group of &lt;bes computer&gt;

No documentation exists.

# bes computer group set of &lt;bes computer&gt;

No documentation exists.

# client setting of &lt;bes computer&gt;

Returns the client setting(s) for the specified computer.

# comment of &lt;bes computer&gt;

Returns the comments assigned to the specified BES Computer.

# cpu of &lt;bes computer&gt;

Returns the result of the &#39;CPU&#39; Property for the specified computer.

# database id of &lt;bes computer&gt;

In the Web Reports environment, this inspector returns the numeric ID of the database in which this BES computer resides.

# database name of &lt;bes computer&gt;

In a Web Reports context, this inspector returns the name (as a string) of the database containing the specified BES computer.

# device type of &lt;bes computer&gt;

No documentation exists.

# hostname of &lt;bes computer&gt;

Returns the result of the &#39;DNS Name&#39; Property for the specified computer.

# id of &lt;bes computer&gt;

Returns the numeric ID unique to the specified BES computer.

# ip address of &lt;bes computer&gt;

Returns the result of the &#39;IP Address&#39; property of the specified computer as an ipv4or6 address type.

# last report time of &lt;bes computer&gt;

Returns the time of the last report submitted by the specified BES computer.

# license type of &lt;bes computer&gt;

Returns the license type of the specified BES Client.  This is a result of a reserved property that assigns computers to a license type such as workstation, windows server, or non-windows server.

# link &lt;html&gt; of &lt;bes computer&gt;

Returns an HTML string containing an &lt;A&gt; tag including the supplied HTML description that, when clicked, will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

# link &lt;string&gt; of &lt;bes computer&gt;

Returns an HTML string containing an &lt;A&gt; tag including the supplied descriptive string that, when clicked, will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

# link href of &lt;bes computer&gt;

The link href property does not return an &lt;A&gt; tag but rather returns the value of the href attribute of the &lt;A&gt; tag that would be constructed by the other link inspectors. This allows you to create more flexible linking formats. (See link of &lt;bes computer&gt;). Note that link href returns a string, not an HTML string.

# link of &lt;bes computer&gt;

Returns an HTML string containing an &lt;A&gt; tag that when clicked will open the given computer&#39;s document (in the BES Console) or its description page (in Web Reports).

# locked flag of &lt;bes computer&gt;

Returns the result of the &#39;Locked&#39; property of the specified computer.

# name of &lt;bes computer&gt;

Returns the value of the specified &#39;Computer Name&#39; property for the specified BES computer.

# operating system of &lt;bes computer&gt;

Returns the result of the &#39;OS&#39; Property for the specified computer.

# property result of &lt;bes computer&gt;

Returns a list of all of the &lt;bes property result&gt; objects that the specified BES computer has reported.

# relay distance of &lt;bes computer&gt;

Returns the result of the &#39;Distance to BES Relay&#39; property for the specified computer.

# relay hostname of &lt;bes computer&gt;

Returns the result of the &#39;Relay Name of Client&#39; property for the specified computer.

# relay selection method of &lt;bes computer&gt;

Returns the result of the &#39;BES Relay Selection Method&#39; property for the specified computer.

# relay server flag of &lt;bes computer&gt;

Returns `True` iff the result of the &#39;BES Relay Server Installed&#39; property for the specified computer indicates that the BES Relay is installed.

# relay server of &lt;bes computer&gt;

Returns the result of the &#39;Relay&#39; property of the specified computer.

# relevant &lt;bes fixlet&gt; of &lt;bes computer&gt;

Returns `True` if the given fixlet is relevant on the specified computer.

# relevant fixlet of &lt;bes computer&gt;

Returns a list of all the &lt;bes fixlet&gt; objects that the specified computer has reported are relevant.

# relevant fixlet set of &lt;bes computer&gt;

Returns a list of all the &lt;bes fixlet&gt; objects that the specified computer has reported are relevant. The list is formatted as a mathematical set.

# reported action set of &lt;bes computer&gt;

Returns a list of all the reported Actions for the specified computer. These may be Actions that are running, fixed, failed, and others. The list is formatted as a mathematical set.

# reported property set of &lt;bes computer&gt;

Returns a list of all the BES properties that have reported on the specified computer(s). The list is formatted as a mathematical set.

# result from &lt;bes action&gt; of &lt;bes computer&gt;

Returns a bes action result object for the given computer and action. This command is a variant of other result inspectors, such as result &lt;( bes action, bes computer )&gt;.Example: detailed status of result from (bes action whose (id of it is 1234)) of (bes computer whose (id of it is 1234567)) - Returns the detailed status of the specified action on the given computer.

# result from &lt;bes fixlet&gt; of &lt;bes computer&gt;

Returns a Fixlet result for the given computer and Fixlet.

# result from &lt;bes property&gt; of &lt;bes computer&gt;

Returns the result of the specified BES property and computer.

# root server flag of &lt;bes computer&gt;

Returns `True` iff the result of the &#39;BES Relay Server Installed&#39; property for the specified computer indicates that it&#39;s a BES root server.

# root server of &lt;bes computer&gt;

Returns the result of the &#39;BES Root Server&#39; property of the specified computer.

# set of &lt;bes computer&gt;

Converts the specified BES computer list to a set that can be arithmetically manipulated.

# subscribed &lt;bes site&gt; of &lt;bes computer&gt;

Returns `True` if the specified computer is currently subscribed to the given BES site.

# subscribed site of &lt;bes computer&gt;

Returns a list of the BES sites subscribed to by the specified BES computer.

# subscribed site set of &lt;bes computer&gt;

Returns a list of the BES sites subscribed to by the specified BES computer, organized as a set.

# unique value of &lt;bes computer&gt;

Returns the unique values of a given list of &lt;bes computer&gt; types, removing duplicates and sorting by value.

# &lt;bes computer&gt; = &lt;bes computer&gt;

Compares two BES Computer types and returns `True` if they are equal.

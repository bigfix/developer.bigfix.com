# type: firewall rule

The &lt;firewall rule&gt; inspectors are implemented as a wrapper of the firewall APIs of Windows and macOS. On unsupported systems, they return no results. For more information on the Windows implementation, see the Microsoft documentation for the INetFwRule interface.

# action of &lt;firewall rule&gt; : firewall action

Retrieves the type of action that the specified firewall rule is set to perform (e.g. blocking network traffic). On Windows, this property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface and the NET_FW_ACTION enumeration.

Example running the QnA on a Windows computer showing the target application of each firewall rule that allows network traffic. Only the first 3 answers are shown.

{% qna %}
Q: names of rules whose (action of it = firewall action 1) of firewall
A: Google Chrome (mDNS-In)
A: BES Client (ICMPv6)
A: BES Client (ICMPv4)
{% endqna %}

Example running the QnA on a Mac computer showing the target application of each firewall rule that allows network traffic. Only the first 3 answers are shown.

{% qna %}
Q: (application name of it) of rules whose (action of it = firewall action 1) of firewall
A: com.apple.iBooksX
A:
A:
{% endqna %}

# application name of &lt;firewall rule&gt; : string

Retrieves the application name property for the specified firewall rule. On Windows, this property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

This property returns an empty string if the firewall rule does not specify an application name.

Example running the QnA on a Windows computer showing application names of a rule. Only the first 3 answers are shown.

{% qna %}
Q: (application name of it) of rules whose (action of it = firewall action 1) of firewall
A: C:\Program Files (x86)\BigFix Enterprise\BES Client\BESClient.exe
A: C:\Program Files (x86)\BigFix Enterprise\BES Client\BESClient.exe
A:
{% endqna %}

Example running the QnA on a Mac computer showing application names of a rule. Only the first 3 answers are shown.

{% qna %}
Q: application names of rules of firewall
A: com.apple.screensharing.daemon
A: com.apple.iBooksX
A:
{% endqna %}

# currently active of &lt;firewall rule&gt; : boolean

Currently active is true if and only if the specified firewall rule is enabled (the Enabled property is true) AND the currently active profile type (as defined by the CurrentProfileTypes property of INetFwPolicy2) is one of the profiles for which the rule applies (as defined by the Profiles property). For more information see the MSDN Library articles for INetFwRule, including the CurrentProfileTypes and Profiles properties.

# description of &lt;firewall rule&gt; : string

Retrieves the Description property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# edge traversal allowed of &lt;firewall rule&gt; : boolean

Retrieves the EdgeTraversal property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# enabled of &lt;firewall rule&gt; : boolean

Retrieves the Enabled property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# grouping of &lt;firewall rule&gt; : string

Retrieves the Grouping property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# icmp types_and_codes string of &lt;firewall rule&gt; : string

Retrieves the IcmpTypesAndCodes property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# inbound of &lt;firewall rule&gt; : boolean

Retrieves the inbound direction property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# interface of &lt;firewall rule&gt; : string

Retrieves the Interfaces property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# interface types string of &lt;firewall rule&gt; : string

Retrieves the Interface types property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# local addresses string of &lt;firewall rule&gt; : string

Retrieves the Interfaces property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# local ports string of &lt;firewall rule&gt; : string

Retrieves the LocalPorts property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# name of &lt;firewall rule&gt; : string

Retrieves the Name property for the specified firewall rule. On Windows, this property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

This property returns an empty string if the firewall rule does not have a name.

Example running the QnA on a Window computer showing names of a rules. Only the first 3 answers are shown.

{% qna %}
Q: names of rules of firewall
A: BES Client (ICMPv6)
A: BES Client (ICMPv4)
A:
{% endqna %}

# outbound of &lt;firewall rule&gt; : boolean

Retrieves the outbound direction property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# profile &lt;firewall profile type&gt; of &lt;firewall rule&gt; : boolean

Retrieves the given profile property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# protocol of &lt;firewall rule&gt; : internet protocol

Retrieves the Protocol property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# remote addresses string of &lt;firewall rule&gt; : string

Retrieves the RemoteAddresses property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# remote ports string of &lt;firewall rule&gt; : string

Retrieves the RemotePorts property for the specified firewall rule. This property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

# service name of &lt;firewall rule&gt; : string

Retrieves the ServiceName property for the specified firewall rule. On Windows, this property is implemented as a wrapper around the Windows Firewall API. For more information, see the Microsoft documentation for the INetFwRule interface.

This property returns an empty string if the firewall rule does not specify a service name.

Example running the QnA on a Window computer showing service names associated with the firewall rules. Only the first 4 answers are shown.

{% qna %}
Q: service names of rules of firewall
A:
A:
A: Ssdpsrv
A: Ssdpsrv
{% endqna %}

Example running the QnA on a Mac computer showing service names associated with the firewall rules. Only the first 4 answers are shown.

{% qna %}
Q: service names of rules of firewall
A:
A:
A: Screen Sharing
A: Remote Login - SSH
{% endqna %}

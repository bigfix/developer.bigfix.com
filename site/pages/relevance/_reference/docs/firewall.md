# type: firewall

The &lt;firewall&gt; inspectors allow you to view the settings of the firewall on Windows and macOS. By inspecting the firewall properties, you can determine which applications have access to unsolicited traffic and how the firewall is configured for various subsets of your network.

On Windows, the &lt;firewall&gt; inspectors are supported on Windows XP SP2 and later. For more information on the Windows implementation, you can search the [Windows Firewall documentation](https://learn.microsoft.com/en-us/windows/win32/api/_ics/).

# current profile type of &lt;firewall&gt; : firewall profile type

Returns the current profile type, corresponding to the Microsoft Windows Firewall enumerated type [NET_FW_PROFILE_TYPE](https://learn.microsoft.com/en-us/windows/win32/api/icftypes/ne-icftypes-net_fw_profile_type#constants).

# enabled of &lt;firewall&gt; : boolean

Returns `True` if the specified firewall is enabled.

{% qna %}
Q: enabled of firewall
A: True
{% endqna %}

# global state of &lt;firewall&gt; : string

Returns the global state of the firewall. The possible states are:
* `Allow All`, meaning the firewall is disabled, allowing all incoming and outgoing connections.
* `Limit Connections`, meaning the firewall is enabled, allowing only specific connections as per the configured rules.
* `Block All`, meaning the firewall is enabled, and all incoming connections are blocked. This state corresponds to the "Block all incoming connections" checkbox being enabled, which also disables features such as file sharing, screen sharing, and media sharing.

{% qna %}
Q: global state of firewall
A: Allow All
{% endqna %}

# local policy modify state of &lt;firewall&gt; : firewall local policy modify state

Determines if adding or setting a rule or group of rules will take effect in the specified firewall profile. For more information, see the Microsoft documentation for the INetFwPolicy2 interface.

# local policy of &lt;firewall&gt; : firewall policy

Returns the local policy of the specified firewall.

# profile type of &lt;firewall&gt; : firewall profile type

No documentation exists.

# rule group currently enabled &lt;string&gt; of &lt;firewall&gt; : boolean

Determines whether a specified group of firewall rules is enabled or disabled for the current profile, considering the firewall&#39;s state, BlockAllInboundTraffic state and group policy overrides state. The string is used to group rules together. It can be the group name or an indirect string to the group name in the form of "@yourresourcedll.dll,-23255." Rules belonging to this group will be queried.

# rule of &lt;firewall&gt; : firewall rule

Retrieves the collection of rules for the specified firewall. For more information on Windows, see the Microsoft documentation for the INetFwPolicy2 interface.

Example running the QnA on a Windows computer showing names of firewall rules based on a specific action. Only the first 3 answers are shown.

{% qna %}
Q: names of rules whose (action of it = firewall action 1) of firewall
A: Google Chrome (mDNS-In)
A: BES Client (ICMPv6)
A:
{% endqna %}

Example running the QnA on a Mac computer showing rules of firwall. Only the first 3 answers are shown.

{% qna %}
Q: (application name of it, service name of it) of rules of firewall
A: com.apple.cupsd,
A: com.apple.remoted,
A: , Remote Login - SSH
{% endqna %}

# service restriction of &lt;firewall&gt; : firewall service restriction

Retrieves the access interface to manipulate the Windows Service Hardening store. On Windows operating systems earlier than Vista, this inspector always returns no-such-object. For more information, see the Microsoft documentation for the INetFwPolicy2 interface.

# stealth enabled of &lt;firewall&gt; : boolean

Returns `True` if the firewall stealth mode is enabled.

{% qna %}
Q: stealth enabled of firewall
A: False
{% endqna %}

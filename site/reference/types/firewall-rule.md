# type: firewall rule

The &lt;firewall rule&lt; inspectors provide a wrapper for the Windows Firewall Rule. They are Vista-only. On a non-Vista machine, they return no results. For more information, see the MSDN library for INetFwRule at http://msdn.microsoft.com/library/.

# action of &lt;firewall rule&gt; : firewall action

Retrieves the Action property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# application name of &lt;firewall rule&gt; : string

Retrieves the application name property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# currently active of &lt;firewall rule&gt; : boolean

Currently active is true if and only if the specified firewall rule is enabled (the Enabled property is true) AND the currently active profile type (as defined by the CurrentProfileTypes property of INetFwPolicy2) is one of the profiles for which the rule applies (as defined by the Profiles property). For more information see the MSDN Library articles for INetFwRule, including the CurrentProfileTypes and Profiles properties.

# description of &lt;firewall rule&gt; : string

Retrieves the Description property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# edge traversal allowed of &lt;firewall rule&gt; : boolean

Retrieves the EdgeTraversal property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# enabled of &lt;firewall rule&gt; : boolean

Retrieves the Enabled property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# grouping of &lt;firewall rule&gt; : string

Retrieves the Grouping property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# icmp types_and_codes string of &lt;firewall rule&gt; : string

Retrieves the IcmpTypesAndCodes property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# inbound of &lt;firewall rule&gt; : boolean

Retrieves the inbound direction property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule and IDispatch.

# interface of &lt;firewall rule&gt; : string

Retrieves the Interfaces property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# interface types string of &lt;firewall rule&gt; : string

Retrieves the Interface types property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# local addresses string of &lt;firewall rule&gt; : string

Retrieves the Interfaces property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# local ports string of &lt;firewall rule&gt; : string

Retrieves the LocalPorts property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# name of &lt;firewall rule&gt; : string

Retrieves the Name property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# outbound of &lt;firewall rule&gt; : boolean

Retrieves the outbound direction property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule and IDispatch.

# profile &lt;firewall profile type&gt; of &lt;firewall rule&gt; : boolean

Retrieves the given profile property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# protocol of &lt;firewall rule&gt; : internet protocol

Retrieves the Protocol property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# remote addresses string of &lt;firewall rule&gt; : string

Retrieves the RemoteAddresses property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# remote ports string of &lt;firewall rule&gt; : string

Retrieves the RemotePorts property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

# service name of &lt;firewall rule&gt; : string

Retrieves the ServiceName property for the specified firewall rule. The firewall rule inspectors are wrappers around the Windows Vista Firewall API. For more information, see the MSDN library for INetFwRule.

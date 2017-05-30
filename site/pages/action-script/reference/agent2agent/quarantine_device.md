---
title: quarantine
---

This command instructs the Agent of "ProductID" to quarantine the endpoint by restricting its network access. 
Quarantine can be enabled, using the action `-bigfix`, or disabled, using the action `-off`.


When enabled, the quarantine command closes existing network connections and blocks the creation of new connections including DNS lookups, with the exception of BigFix Parent Relay traffic and BigFix Detect traffic.
BigFix runs the following steps to enforce quarantine:
1. Resolves the addresses of the active relays specified in the variables **_BESClient_RelaySelect_FailoverRelay** and **_BESClient_RelaySelect_FailoverRelayList** into static IP addresses.
2. Closes the existing network connections.
3. Blocks network connections using DNS lookups.
4. Makes the list of IP addresses of the available relays active for future relay selection to avoid DNS lookups. 
5. Allows the inbound, with `-in` parameter, or the outbound, with the `-out` parameter, communication with the specified &lt;IP address&gt;, on the specified &lt;port&gt;, with the specified &lt;protocol&gt;. 
   - &lt;port&gt; is an integer between 1 and 65535. 
   - &lt;protocol&gt; can be either UDP or TCP. 
   - &lt;IP address&gt; is a string representing either an IPV6 or IPV4 address.

   
When disabled, the quarantine command reverts the relay selection back to DNS-based lists and restores the original communications.


## Syntax
To enable quarantine:
```actionscript
    quarantine "ProductID" -bigfix -in "<port> <protocol> <IP address>" -out "<port> <protocol> <IP address>" ...
```

To disable quarantine:	
```actionscript
    quarantine "ProductID" -off 
```

## Examples

This command sets to quarantine the endpoint where the BigFix Detect agent is installed and allows the inboud TCP communication on port 80 on the relay with IP address 1.2.3.4, and the inboud UDP communication on port 53 on the relay with IP address 5.6.7.8.

```actionscript
quarantine "EDR" -bigfix -in "80 TCP 1.2.3.4" -out "53 UDP 5.6.7.8"
```


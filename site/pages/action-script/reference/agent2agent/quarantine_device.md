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


When disabled, the quarantine command reverts the relay selection back to DNS-based lists and restores the original communications.


The list of error codes that might be returned by the quarantine command is available <a href="http://www.ibm.com/support/knowledgecenter/SSMNRU_9.5.0/com.ibm.bigfix.detect.doc/BigFixDetectionandResponse/SecurityAnalystUserGuide/EDR_TroubleshootingSAG.html">here</a>.

## Syntax
To enable quarantine:
```actionscript
quarantine "ProductID" -bigfix
```

To disable quarantine:	
```actionscript
quarantine "ProductID" -off 
```

## Examples

This command sets to quarantine the endpoint where the BigFix Detect agent is installed:

```actionscript
quarantine "EDR" -bigfix
```


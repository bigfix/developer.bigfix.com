---
title: Update Operator
---

Updates an existing operator with the contents of `operator.xml` (can be a partial XML). This operation requires master operator privileges.

# python
```python
import requests
with open('operator.xml', 'rb') as xml:
    r = requests.put('https://{server}:{port}/api/operator/{operator id}', auth=('{username}', '{password}'), data=xml)
    print(r.text)
```
(If replacing the entire operator with a complete XML file, can use POST instead of PUT)
# Input
## operator.xml
```xml
<BESAPI xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="BESAPI.xsd">
        <Operator Resource="https://localhost:52311/api/operator/sample-operator">
                <Name>sample-operator</Name>
                <Password>sample-password</Password>
                <MasterOperator>false</MasterOperator>
                <CustomContent>true</CustomContent>
                <ShowOtherActions>true</ShowOtherActions>
                <CanCreateActions>true</CanCreateActions>
                <PostActionBehaviorPrivilege>AllowRestartAndShutdown</PostActionBehaviorPrivilege>
                <ActionScriptCommandsPrivilege>AllowRestartAndShutdown</ActionScriptCommandsPrivilege>
                <CanLock>true</CanLock>
                <CanSendMultipleRefresh>true</CanSendMultipleRefresh>
                <LoginPermission>Unrestricted</LoginPermission>
                <UnmanagedAssetPrivilege>ShowAll</UnmanagedAssetPrivilege>
                <InterfaceLogins>
                        <Console>true</Console>
                        <WebUI>true</WebUI>
                        <API>true</API>
                </InterfaceLogins>
                <ComputerAssignments Match="Any"></ComputerAssignments>
        </Operator>
</BESAPI>
```
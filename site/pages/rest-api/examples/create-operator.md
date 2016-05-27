---
title: Create Dashboard Variable
---

Creates a new operator with the contents of `operator.xml`. This operation requires master operator privileges.

# cURL
```
curl -X POST --data-binary @operator.xml --user {username}:{password} https://{server}:{port}/api/operators
```

# python
```python
import requests
with open('operator.xml', 'rb') as xml:
    r = requests.post('https://{server}:{port}/api/operators', auth=('{username}', '{password}'), data=xml)
    print(r.text)
```

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



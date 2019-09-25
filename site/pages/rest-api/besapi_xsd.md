---
title: BESAPI.xsd schema file
---

The BESAPI.xsd schema file is available for download (under the "Utilities" section) at [BigFix Enterprise Suite Download Center](http://support.bigfix.com/bes/release/) on the corresponding release pages. 
For releases older than 9.5.13, use the file available (under the "Utilities" section) at the [Patch 13 release page](http://support.bigfix.com/bes/release/9.5/patch13).

**Important:** To ensure consistency, use the version of the schema files available on your BigFix server under the path:
- On Windows systems: `C:\Program Files (x86)\BigFix Enterprise\BigFix server\Reference`
- On RedHat Linux Enterprise version 5.0 or later: `/opt/BESServer/reference`

The file is also available via HTTP/HTTPS from the BigFix Root Server:

```
https://<bigfix_server>:<port>/xmlschema/BESAPI.xsd
```

(where port is 52311 by default)

```xml
<?xml version="1.0"?>
<xs:schema id="BESAPI" xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="qualified" elementFormDefault="qualified" version="99.95.0.178">

	<xs:element name="BESAPI">
		<xs:complexType>
			<xs:choice maxOccurs="unbounded">

				<xs:element name="ManualComputerGroup">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="EvaluateOnClient" type="xs:boolean"/>
							<xs:element name="ComputerID" type="xs:nonNegativeInteger" minOccurs="0" maxOccurs="unbounded"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
					</xs:complexType>
				</xs:element>

				<xs:element name="Fixlet">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>						    
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="ReplicationServer">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="ServerID" type="xs:nonNegativeInteger" minOccurs="0"/>
							<xs:element name="URL" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="DNS" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="ReplicationIntervalSeconds" type="xs:nonNegativeInteger" minOccurs="0"/>
							<xs:element name="ReplicationLink" type="ReplicationLinkType" minOccurs="0" maxOccurs="unbounded"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/> 
					</xs:complexType>
				</xs:element>

				<xs:element name="WebReports">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="URL" type="xs:normalizedString"/>
						</xs:sequence>
					</xs:complexType>
				</xs:element>

				<xs:element name="ReplicationLink" type="ReplicationLinkType"/>

				<xs:element name="Action">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="ID" type="xs:nonNegativeInteger"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="FileUpload">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="URL" type="xs:normalizedString"/>
							<xs:element name="Size" type="xs:nonNegativeInteger"/>
							<xs:element name="SHA1" type="xs:normalizedString"/>
							<xs:element name="SHA256" type="xs:normalizedString"/>
							<xs:element name="Available" type="xs:boolean"/>
							<xs:element name="ReferenceID" type="xs:nonNegativeInteger" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/> 
					</xs:complexType>
				</xs:element>

				<xs:element name="FileUploadReference">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="ID" type="xs:nonNegativeInteger"/>
							<xs:element name="UserID" type="xs:nonNegativeInteger" minOccurs="0"/>
							<xs:element name="CreationTime" type="xs:normalizedString"/>
							<xs:element name="IsPrivate" type="xs:boolean"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/> 
					</xs:complexType>
				</xs:element>

				<xs:element name="ActionResults">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="ActionID" type="xs:nonNegativeInteger"/>
							<xs:element name="Status" type="xs:normalizedString"/>
							<xs:element name="DateIssued" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Computer" type="ComputerResultType" minOccurs="0" maxOccurs="unbounded"/>
							<xs:element name="MemberActionResult" minOccurs="0" maxOccurs="unbounded">
								<xs:complexType>
									<xs:sequence>
										<xs:element name="ActionID" type="xs:nonNegativeInteger"/>
										<xs:element name="Computer" type="ComputerResultType" minOccurs="0" maxOccurs="unbounded"/>
									</xs:sequence>
									<xs:attribute name="Resource" type="xs:normalizedString"/>  
								</xs:complexType>
							</xs:element>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>					     
					</xs:complexType>
				</xs:element>

				<xs:element name="Analysis">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>						    
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="AnalysisProperty" type="AnalysisProperty" />

				<xs:element name="AnalysisActivation">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>			 

				<xs:element name="Task">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>						    
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="Property">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
							<xs:element name="IsReserved" type="xs:boolean" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="SingleAction">
					<xs:complexType>
						<xs:choice>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
						</xs:choice>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="MultipleActionGroup">
					<xs:complexType>
						<xs:choice>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
						</xs:choice>
						<xs:attribute name="Resource" type="xs:normalizedString"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="SiteVersion">
					<xs:complexType>
						<xs:simpleContent>
							<xs:extension base="xs:nonNegativeInteger">
								<xs:attribute name="LastModified" type="xs:normalizedString"/>
							</xs:extension>
						</xs:simpleContent>
					</xs:complexType>
				</xs:element>

				<xs:element name="Baseline">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element> 

				<xs:element name="Computer">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="LastReportTime" type="xs:normalizedString" minOccurs="0" maxOccurs="1"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
							<xs:choice minOccurs="0" maxOccurs="unbounded">
								<xs:element name="Property" minOccurs="0" maxOccurs="unbounded">
									<xs:complexType>
										<xs:simpleContent>
											<xs:extension base="xs:string">
												<xs:attribute name="Name" type="ObjectName" use="required" />
											</xs:extension>
										</xs:simpleContent>
									</xs:complexType>		
								</xs:element>
								<xs:element name="Setting" type="ComputerSetting" minOccurs="0" maxOccurs="unbounded"/>
							</xs:choice>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string"/>  
					</xs:complexType>
				</xs:element> 

				<xs:element name="ComputerSettings">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="TargetComputers" minOccurs="0" maxOccurs="1">
								<xs:complexType>
									<xs:sequence>
										<xs:element name="ComputerID" type="xs:nonNegativeInteger" minOccurs="1" maxOccurs="unbounded"/>
									</xs:sequence>
								</xs:complexType>
							</xs:element>
							<xs:element name="Setting" type="ComputerSetting" minOccurs="0" maxOccurs="unbounded"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string"/>  
					</xs:complexType>
				</xs:element> 

				<xs:element name="AdminField">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Value" type="xs:normalizedString" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string"/>  
					</xs:complexType>
				</xs:element> 

				<xs:element name="DashboardData">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Dashboard" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="IsPrivate" type="xs:boolean" minOccurs="0"/>
							<xs:element name="User" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Value" type="xs:string" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string"/>  
					</xs:complexType>
				</xs:element>

				<xs:element name="SiteFile">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
							<xs:element name="LastModified" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="FileSize" type="xs:nonNegativeInteger" minOccurs="0"/>
							<xs:element name="IsClientFile" type="xs:boolean" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>					 
					</xs:complexType>
				</xs:element>

				<xs:element name="ClientReports">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="EncryptionStatus" type="xs:normalizedString"/>
							<xs:element name="Details" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="KeySize" type="EncryptionKeySizeType" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString" use="required"/>  
					</xs:complexType>
				</xs:element>

				<xs:element name="SystemOptions">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="MinimumRefreshSeconds" type="xs:nonNegativeInteger" minOccurs="0"/>
							<xs:element name="DefaultFixletVisibility" type="DefaultFixletVisibilityType" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString" use="required"/>  
					</xs:complexType>				    
				</xs:element>

				<xs:element name="ComputerGroup">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString" use="required"/>  
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element> 

				<xs:element name="Operator" type="Operator"/>

				<xs:element name="ExternalSite">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="DisplayName" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="GatherURL" type="xs:string" minOccurs="0" />
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string" use="required"/>
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="CustomSite">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="DisplayName" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="GatherURL" type="xs:string" minOccurs="0" />
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string" use="required"/>
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="OperatorSite">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="GatherURL" type="xs:string" minOccurs="0" />
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string" use="required"/>
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="ActionSite">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString"/>
							<xs:element name="GatherURL" type="xs:string" minOccurs="0" />
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString" use="required"/>
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="Role" type="Role"/>

				<xs:element name="Site">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Permission" type="SitePermissionString" minOccurs="0" maxOccurs="unbounded"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>
						<xs:attribute name="LastModified" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="SitePermission">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Permission" type="SitePermissionString" minOccurs="1" maxOccurs="1"/>
							<xs:choice minOccurs="0" maxOccurs="1">
								<xs:element name="Operator" type="StringWithReference"/>
								<xs:element name="Role" type="IntegerWithReference"/>
							</xs:choice>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>			 

				<xs:element name="LDAPDirectory">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>						    
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="IsActiveDirectory" type="xs:boolean" minOccurs="0"/>
							<xs:element name="IsGlobalCatalog" type="xs:boolean" minOccurs="0"/>
							<xs:element name="UseSSL" type="xs:boolean" minOccurs="0"/>
							<xs:element name="AllowEmptyPasswords" type="xs:boolean" minOccurs="0"/>
							<xs:element name="BaseDN" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="UIDAttribute" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="UserFilter" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="GroupFilter" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="User" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Password" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Servers" minOccurs="0" maxOccurs="1">
								<xs:complexType>
									<xs:sequence>
										<xs:element name="Server" type="LDAPServer" minOccurs="1" maxOccurs="4"/>    
									</xs:sequence>
								</xs:complexType>
							</xs:element>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="SAMLProvider">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>						    
							<xs:element name="Issuer" type="xs:normalizedString"/>
							<xs:element name="EntryPoint" type="xs:normalizedString"/>
							<xs:element name="IsDisabled" type="xs:boolean"/>
							<xs:element name="SigningCertificate" type="xs:normalizedString"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="ComputerMailboxFile">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Name" type="xs:normalizedString" minOccurs="0"/>    
							<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>					    
							<xs:element name="SHA1" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Size" type="xs:normalizedString" minOccurs="0"/>
							<xs:element name="Timestamp" type="xs:normalizedString" minOccurs="0"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="Query">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Result" type="RelevanceResult"/>
							<xs:choice>
								<xs:element name="Evaluation">
									<xs:complexType>
										<xs:sequence>
											<xs:element name="Time" type="xs:normalizedString"/>
											<xs:element name="Plurality" type="RelevancePlurality"/>
										</xs:sequence>
									</xs:complexType>
								</xs:element>
								<xs:element name="Error" type="xs:normalizedString"/>
							</xs:choice>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:string"/>
					</xs:complexType>
				</xs:element>

				<xs:element name="MastheadParameters">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="PortNumber" type="xs:normalizedString" minOccurs="0" maxOccurs="1" />
							<xs:element name="GatherInterval" type="MastheadGatherInterval" minOccurs="0" maxOccurs="1" />
							<xs:element name="Controller" type="MastheadController" minOccurs="0" maxOccurs="1" />
							<xs:choice  minOccurs="0" maxOccurs="1">
								<xs:element name="InitialLockState" type="MastheadLockState" />
								<xs:element name="InitialLockDuration" type="xs:nonNegativeInteger" />
							</xs:choice>
							<xs:element name="ActionLockExemptionURL" type="xs:normalizedString"  minOccurs="0" maxOccurs="1" />
							<xs:element name="RequireFIPSCompliantCrypto" type="xs:boolean" minOccurs="0" maxOccurs="1" />
						</xs:sequence>
					</xs:complexType>
				</xs:element>
				
				<xs:element name="ClientQuery">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="ApplicabilityRelevance" type="xs:normalizedString" minOccurs="1" maxOccurs="1"/>
							<xs:element name="QueryText" type="xs:normalizedString" minOccurs="1" maxOccurs="1" />
				<xs:element name="Target" type="BESClientQueryTarget" minOccurs="0" />
						</xs:sequence>						
					</xs:complexType>
				</xs:element>
				
				<xs:element name="ClientQueryResults">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="ReportingAgents" type="xs:nonNegativeInteger"/>
							<xs:element name="TotalResults"    type="xs:nonNegativeInteger"/>
							<xs:element name="QueryResult" minOccurs="0" maxOccurs="unbounded">
								<xs:complexType>
									<xs:sequence>
										<xs:element name="ComputerID"    type="xs:nonNegativeInteger"   minOccurs="1"/>
										<xs:element name="ComputerName"  type="xs:normalizedString"     minOccurs="1"/>
										<xs:element name="SubQueryID"    type="xs:nonNegativeInteger"   minOccurs="1"/>
										<xs:element name="IsFailure"     type="xs:boolean"		minOccurs="1"/>
										<xs:element name="ResponseTime"  type="xs:normalizedString"     minOccurs="1"/>
										<xs:element name="Result"	 type="xs:normalizedString"     minOccurs="1"/>
										<xs:element name="ErrorMessage"  type="xs:normalizedString"/>
									</xs:sequence>						
								</xs:complexType>
							</xs:element>
						</xs:sequence>						
					</xs:complexType>
				</xs:element>

				<xs:element name="Error" type="xs:string" minOccurs="0" maxOccurs="unbounded"/> 
				<xs:element name="Warning" type="xs:string" minOccurs="0" maxOccurs="unbounded"/> 
				<xs:element name="ComputerSetting" type="ComputerSetting" minOccurs="0" maxOccurs="1"/>

				<xs:element name="Session">
					<xs:complexType>
						<xs:sequence>
							<xs:element name="Operator" type="ObjectName"/>
							<xs:element name="UserID" type="xs:nonNegativeInteger"/>
							<xs:element name="EffectivePermissions" type="EffectivePermissions"/>
						</xs:sequence>
						<xs:attribute name="Resource" type="xs:normalizedString"/>
					</xs:complexType>
				</xs:element>

			</xs:choice>
		</xs:complexType>
	</xs:element>

	<xs:complexType name="InterfaceLogins">
		<xs:sequence>
			<xs:element name="Console" type="xs:boolean" minOccurs="0"/>
			<xs:element name="WebUI" type="xs:boolean" minOccurs="0"/>
			<xs:element name="API" type="xs:boolean" minOccurs="0"/>
			<xs:element name="Applications" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element name="Name" type="xs:string" minOccurs="0" maxOccurs="unbounded"/>
					</xs:sequence>
				</xs:complexType>
			</xs:element>
		</xs:sequence>
	</xs:complexType>

	<xs:complexType name="EffectivePermissions">
		<xs:sequence>
			<xs:element name="MasterOperator" type="xs:boolean"/>
			<xs:element name="CustomContent" type="xs:boolean"/>
			<xs:element name="ShowOtherActions" type="xs:boolean"/>
			<xs:element name="StopOtherActions" type="xs:boolean"/>
			<xs:element name="CanCreateActions" type="xs:boolean"/>
			<xs:element name="CanLock" type="xs:boolean"/>
			<xs:element name="CanSendMultipleRefresh" type="xs:boolean"/>
	     <xs:element name="CanSubmitQueries" type="xs:boolean"/>
			<xs:element name="PostActionBehaviorPrivilege">
				<xs:simpleType>
					 <xs:restriction base="xs:normalizedString">
						 <xs:enumeration value="AllowRestartAndShutdown"/>
						 <xs:enumeration value="AllowRestartOnly"/>	     
						 <xs:enumeration value="None"/>
					</xs:restriction>
				 </xs:simpleType>
			 </xs:element>
			<xs:element name="ActionScriptCommandsPrivilege">
				<xs:simpleType>
					 <xs:restriction base="xs:normalizedString">
						 <xs:enumeration value="AllowRestartAndShutdown"/>
						 <xs:enumeration value="AllowRestartOnly"/>	     
						 <xs:enumeration value="None"/>
					</xs:restriction>
				 </xs:simpleType>
			 </xs:element>
			<xs:element name="UnmanagedAssetPrivilege">
				<xs:simpleType>
					<xs:restriction base="xs:normalizedString">
						<xs:enumeration value="ShowNone"/>
						<xs:enumeration value="ScanPoint"/>
						<xs:enumeration value="ShowAll"/>
					</xs:restriction>
				</xs:simpleType>
			</xs:element>
			<xs:element name="InterfaceLogins" type="InterfaceLogins" />
		</xs:sequence>
	</xs:complexType>

	<xs:complexType name="ComputerResultType">
		<xs:sequence>
			<xs:element name="Status" type="xs:normalizedString"/>
			<xs:element name="State">
				<xs:complexType>
					<xs:simpleContent>
						<xs:extension base="xs:nonNegativeInteger">
							<xs:attribute name="IsError" type="xs:boolean" />
						</xs:extension>
					</xs:simpleContent>
				</xs:complexType>
			</xs:element>
			<xs:element name="ApplyCount" type="xs:nonNegativeInteger"/>
			<xs:element name="RetryCount" type="xs:nonNegativeInteger"/>
			<xs:element name="LineNumber" type="xs:nonNegativeInteger"/>
			<xs:element name="StartTime" type="xs:normalizedString" minOccurs="0"/>
			<xs:element name="EndTime" type="xs:normalizedString" minOccurs="0"/>
		</xs:sequence>
		<xs:attribute name="ID" type="xs:nonNegativeInteger"/>
		<xs:attribute name="Name" type="xs:normalizedString"/>
	</xs:complexType>

	<xs:complexType name="LDAPServer">
		<xs:sequence>
			<xs:element name="Host" type="xs:normalizedString"/>
			<xs:element name="Port" type="xs:nonNegativeInteger"/>
			<xs:element name="Priority" type="xs:nonNegativeInteger"/>
		</xs:sequence>
	</xs:complexType>

   <xs:complexType name="ReplicationLinkType">
		<xs:sequence>
			<xs:element name="SourceServerID" type="xs:nonNegativeInteger"/>
			<xs:element name="DestinationServerID" type="xs:nonNegativeInteger"/>
			<xs:element name="Weight" type="xs:nonNegativeInteger"/>
			<xs:element name="IsConnected" type="xs:boolean" minOccurs="0"/>
			<xs:element name="LastReplication" type="xs:normalizedString" minOccurs="0"/>
			<xs:element name="LastError" type="xs:normalizedString" minOccurs="0"/>
		</xs:sequence>
		<xs:attribute name="Resource" type="xs:normalizedString"/> 
   </xs:complexType>

	<xs:complexType name="StringWithReference">
		<xs:simpleContent>
			<xs:extension base="xs:normalizedString">
				<xs:attribute name="Resource" type="xs:normalizedString"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>

	<xs:complexType name="IntegerWithReference">
		<xs:simpleContent>
			<xs:extension base="xs:nonNegativeInteger">
				<xs:attribute name="Resource" type="xs:normalizedString"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>

	<xs:complexType name="ComputerSetting">
		<xs:sequence>
			<xs:element name="Name" type="xs:normalizedString" minOccurs="1" maxOccurs="1"/>
			<xs:element name="Value" type="xs:normalizedString" minOccurs="1" maxOccurs="1"/>
		</xs:sequence>
		<xs:attribute name="Resource" type="xs:normalizedString"/>
	</xs:complexType>

	<xs:complexType name="Operator">
		<xs:sequence>
			<xs:element name="Name" type="ObjectName" minOccurs="0"/>
			<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
			<xs:element name="LastLoginTime" type="xs:normalizedString" minOccurs="0"/>
			<xs:element name="Password" type="xs:normalizedString" minOccurs="0"/>
			<xs:element name="LDAPServerID" type="xs:nonNegativeInteger" minOccurs="0" />
			<xs:element name="LDAPDN" type="xs:normalizedString" minOccurs="0" />
			<xs:element name="MasterOperator" type="xs:boolean" minOccurs="0" />
			<xs:element name="CustomContent" type="xs:boolean" minOccurs="0" />
			<xs:element name="ShowOtherActions" type="xs:boolean" minOccurs="0" />
			<xs:element name="StopOtherActions" type="xs:boolean" minOccurs="0" />
			<xs:element name="CanCreateActions" type="xs:boolean" minOccurs="0" />
			<xs:element name="PostActionBehaviorPrivilege" minOccurs="0">
				<xs:simpleType>
					 <xs:restriction base="xs:normalizedString">
						 <xs:enumeration value="AllowRestartAndShutdown" />
						 <xs:enumeration value="AllowRestartOnly" />	     
						 <xs:enumeration value="None" />
					</xs:restriction>
				 </xs:simpleType>
			 </xs:element>
			<xs:element name="ActionScriptCommandsPrivilege" minOccurs="0">
				<xs:simpleType>
					 <xs:restriction base="xs:normalizedString">
						 <xs:enumeration value="AllowRestartAndShutdown" />
						 <xs:enumeration value="AllowRestartOnly" />	     
						 <xs:enumeration value="None" />
					</xs:restriction>
				 </xs:simpleType>
			 </xs:element>
			<xs:element name="CanLock" type="xs:boolean" minOccurs="0" />
			<xs:element name="CanSendMultipleRefresh" type="xs:boolean" minOccurs="0" />
	     <xs:element name="CanSubmitQueries" type="xs:boolean" minOccurs="0" />
			<xs:element name="LoginPermission" minOccurs="0">
				<xs:simpleType>
					<xs:restriction base="xs:normalizedString">
						<xs:enumeration value="Unrestricted" />
						<xs:enumeration value="RoleRestricted" />
						<xs:enumeration value="Disabled" />
					</xs:restriction>
				</xs:simpleType>
			</xs:element>
			<xs:element name="UnmanagedAssetPrivilege" minOccurs="0">
				<xs:simpleType>
					<xs:restriction base="xs:normalizedString">
						<xs:enumeration value="ShowNone" />
						<xs:enumeration value="ScanPoint" />
						<xs:enumeration value="ShowAll" />
					</xs:restriction>
				</xs:simpleType>
			</xs:element>
			<xs:element name="InterfaceLogins" type="InterfaceLogins" minOccurs="0" />
			<xs:element name="ApproverRoleID" type="xs:nonNegativeInteger" minOccurs="0"/>
			<xs:element name="ComputerAssignments" type="DynamicTarget" minOccurs="0" />
		</xs:sequence>
		<xs:attribute name="Resource" type="xs:normalizedString"/>
	</xs:complexType>

	<xs:complexType name="DynamicTarget">
		<xs:choice>
			<xs:element name="AllComputers" />
			<xs:choice minOccurs="0" maxOccurs="unbounded">
				<xs:element name="ByActiveDirectory" type="ByActiveDirectory" />
				<xs:element name="ByRetrievedProperties" type="ByRetrievedProperties" />
				<xs:element name="ByGroup" type="ByGroup" />
			</xs:choice>
		</xs:choice>
		<xs:attribute name="Match" fixed="Any" />
	</xs:complexType>

	<xs:complexType name="ByActiveDirectory">
		<xs:sequence>
			<xs:element name="DistinguishedName" type="xs:string" />
		</xs:sequence>
	</xs:complexType>

	<xs:complexType name="ByRetrievedProperties">
		<xs:sequence>
			<xs:element name="Property" type="Property" maxOccurs="unbounded" />
			<xs:element name="Relevance" type="RelevanceString" minOccurs="0" />
		</xs:sequence>
		<xs:attribute name="Match" fixed="All" />
	</xs:complexType>

	<xs:complexType name="Property">
		<xs:sequence>
			<xs:element name="Value" type="xs:string" />
		</xs:sequence>
		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="Resource" type="xs:normalizedString" />
	</xs:complexType>

	<xs:complexType name="ByGroup">
		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="Type" type="xs:string" />
		<xs:attribute name="Resource" type="xs:normalizedString" />
	</xs:complexType>

	<xs:complexType name="Role">
		<xs:sequence>
			<xs:element name="Name" type="ObjectName" minOccurs="0" />
			<xs:element name="ID" type="xs:nonNegativeInteger" minOccurs="0"/>
			<xs:element name="Description" type="xs:string" minOccurs="0" />
			<xs:element name="MasterOperator" type="xs:boolean" minOccurs="0" />
			<xs:element name="CustomContent" type="xs:boolean" minOccurs="0" />
			<xs:element name="ShowOtherActions" type="xs:boolean" minOccurs="0" />
			<xs:element name="StopOtherActions" type="xs:boolean" minOccurs="0" />
			<xs:element name="CanCreateActions" type="xs:boolean" minOccurs="0" />
			<xs:element name="PostActionBehaviorPrivilege" minOccurs="0">
			    <xs:simpleType>
					<xs:restriction base="xs:normalizedString">
						<xs:enumeration value="AllowRestartAndShutdown" />
						<xs:enumeration value="AllowRestartOnly" />
						<xs:enumeration value="None" />
					</xs:restriction>
				</xs:simpleType>
	     </xs:element>
	     <xs:element name="ActionScriptCommandsPrivilege" minOccurs="0">
		  <xs:simpleType>
		      <xs:restriction base="xs:normalizedString">
			   <xs:enumeration value="AllowRestartAndShutdown" />
			   <xs:enumeration value="AllowRestartOnly" />
			   <xs:enumeration value="None" />
		      </xs:restriction>
		  </xs:simpleType>
		</xs:element>
			<xs:element name="CanSendMultipleRefresh" type="xs:boolean" minOccurs="0" />
	     <xs:element name="CanSubmitQueries" type="xs:boolean" minOccurs="0" />
			<xs:element name="CanLock" type="xs:boolean" minOccurs="0" />
			<xs:element name="UnmanagedAssetPrivilege" minOccurs="0" >
				<xs:simpleType>
					<xs:restriction base="xs:normalizedString">
						<xs:enumeration value="ShowNone" />
						<xs:enumeration value="ScanPoint" />
						<xs:enumeration value="ShowAll" />
					</xs:restriction>
				</xs:simpleType>
			</xs:element>
			<xs:element name="InterfaceLogins" type="InterfaceLogins" minOccurs="0" />
			<xs:element name="Operators" minOccurs="0">
				<xs:complexType>
					<xs:choice minOccurs="0" maxOccurs="unbounded">
						<xs:element name="Explicit" type="xs:normalizedString"/>
						<xs:element name="Inherited" type="xs:normalizedString"/>
					</xs:choice>
				</xs:complexType>
			</xs:element>
			<xs:element name="LDAPGroups" minOccurs="0" >
				<xs:complexType>
					<xs:sequence>
						<xs:element name="Group" maxOccurs="unbounded">
							<xs:complexType>
								<xs:sequence>
									<xs:element name="Name" type="xs:normalizedString" />
									<xs:element name="DN" type="xs:normalizedString" />
									<xs:element name="ServerID" type="xs:normalizedString" />
								</xs:sequence>
							</xs:complexType>
						</xs:element>
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<xs:element name="Sites" minOccurs="0" >
				<xs:complexType>
					<xs:choice maxOccurs="unbounded">
						<xs:element name="CustomSite">
							<xs:complexType>
								<xs:sequence>
									<xs:element name="Name" type="xs:normalizedString" minOccurs="1"/>
									<xs:element name="Permission" type="SitePermissionString" minOccurs="1"/>
								</xs:sequence>
							</xs:complexType>
						</xs:element>
						<xs:element name="ExternalSite">
							<xs:complexType>
								<xs:sequence>
									<xs:element name="Name" type="xs:normalizedString" minOccurs="1"/>
									<xs:element name="Permission" type="SitePermissionString" minOccurs="1"/>
								</xs:sequence>
							</xs:complexType>
						</xs:element>
					</xs:choice>
				</xs:complexType>
			</xs:element>
			<xs:element name="ComputerAssignments" type="DynamicTarget" minOccurs="0" />
		</xs:sequence>
		<xs:attribute name="Resource" type="xs:normalizedString"/>
	</xs:complexType>

	<xs:simpleType name="SitePermissionString">
		<xs:restriction base="xs:normalizedString">
			<xs:enumeration value="Owner" />
			<xs:enumeration value="Reader" />
			<xs:enumeration value="Writer" />
			<xs:enumeration value="None" />
		</xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="ObjectName">
		<xs:restriction base="xs:normalizedString">
			<xs:minLength value="1" />
			<xs:maxLength value="255" />
		</xs:restriction>
	</xs:simpleType>

	<xs:complexType name="RelevanceResult">
		<xs:choice maxOccurs="unbounded" minOccurs="0">
			<xs:element name="Answer" type="RelevanceAnswer"/>
			<xs:element name="Tuple" type="RelevanceResult"/>
		</xs:choice>
	</xs:complexType>

	<xs:simpleType name="RelevanceValueType">
		<xs:restriction base="xs:normalizedString">
			<xs:enumeration value="boolean" />
			<xs:enumeration value="integer" />
			<xs:enumeration value="string" />
			<xs:enumeration value="utf8 string" />
			<xs:enumeration value="time" />
			<xs:enumeration value="floating point" />
		</xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="EncryptionKeySizeType">
		<xs:restriction base="xs:normalizedString">
			<xs:enumeration value="4096" />
			<xs:enumeration value="2048" />
		</xs:restriction>
	</xs:simpleType>

	<xs:complexType name="RelevanceAnswer">
		<xs:simpleContent>
			<xs:extension base="xs:normalizedString">
				<xs:attribute name="type" type="RelevanceValueType" />
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>

	<xs:simpleType name="RelevancePlurality">
		<xs:restriction base="xs:normalizedString">
			<xs:enumeration value="Plural" />
			<xs:enumeration value="Singular" />
		</xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="MastheadGatherInterval">
		<xs:restriction base="xs:normalizedString">
			<xs:enumeration value="Fifteen Minutes" />
			<xs:enumeration value="Half Hour" />
			<xs:enumeration value="Hour" />
			<xs:enumeration value="Eight Hours" />
			<xs:enumeration value="Half Day" />
			<xs:enumeration value="Day" />
			<xs:enumeration value="Two Days" />
			<xs:enumeration value="Week" />
			<xs:enumeration value="Two Weeks" />
			<xs:enumeration value="Month" />
			<xs:enumeration value="Two Months" />
		</xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="MastheadController">
		<xs:restriction base="xs:normalizedString">
			<xs:enumeration value="nobody" />
			<xs:enumeration value="client" />
			<xs:enumeration value="console" />
		</xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="MastheadLockState">
		<xs:restriction base="xs:normalizedString">
			<xs:enumeration value="on" />
			<xs:enumeration value="off" />
		</xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="DefaultFixletVisibilityType">
		<xs:restriction base="xs:normalizedString">
			<xs:enumeration value="Visible" />
			<xs:enumeration value="Hidden" />
		</xs:restriction>
	</xs:simpleType>

	<xs:complexType name="AnalysisProperty">
		<xs:simpleContent>
			<xs:extension base="RelevanceString">
				<xs:attribute name="Resource" type="xs:normalizedString" />
				<xs:attribute name="Name" type="xs:string" />
				<xs:attribute name="ID" type="xs:positiveInteger" />
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>

	<xs:complexType name="RelevanceString">
	  <xs:simpleContent>
	    <xs:extension base="xs:string" />
	  </xs:simpleContent>
	</xs:complexType>

	<xs:simpleType name="BESClientQueryString">
		<xs:restriction base="xs:normalizedString">
			<xs:minLength value="1" />
		</xs:restriction>
	</xs:simpleType>
	
	<xs:complexType name="BESClientQueryTarget">
		<xs:choice>
			<xs:element name="ComputerName" type="xs:normalizedString" maxOccurs="unbounded" />
			<xs:element name="ComputerID" type="xs:nonNegativeInteger" maxOccurs="unbounded" />
			<xs:element name="CustomRelevance" type="xs:normalizedString" />
			<xs:element name="ComputerGroup" maxOccurs="unbounded">
				<xs:complexType>
					<xs:sequence>
						<xs:element name="Name"     type="BESClientQueryString" minOccurs="1" />
						<xs:element name="SiteName" type="BESClientQueryString" minOccurs="1" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
		</xs:choice>
	</xs:complexType>

</xs:schema>
```


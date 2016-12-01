---
title: BES.xsd schema file
---

This is a sample **BES.xsd** schema file made available with the IBM BigFix Platform V9.5.3.

**Important:** To ensure consistency, use the version of the schema files available on your BigFix server under the path:
- C:\Program Files (x86)\BigFix Enterprise\BigFix server\Reference for Windows systems
- /opt/BESServer/reference for Linux Red Hat Enterprise V.5.0 or later systems

The file is also available via HTTP/HTTPS from the BigFix Root Server:

```
https://<bigfix_server>:<port>/xmlschema/BES.xsd
```

(where port is 52311 by default)


```xml
<?xml version="1.0"?>
<xs:schema id="BES" xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="qualified" elementFormDefault="qualified" version="9.5.3.211">

  <xs:element name="BES">
    <xs:complexType>
      <xs:choice maxOccurs="unbounded">

        <xs:element name="Fixlet" type="FixletWithActions" />
        <xs:element name="Task" type="FixletWithActions" />
        <xs:element name="Analysis" type="Analysis" />
        <xs:element name="SingleAction" type="SingleAction"/>
        <xs:element name="SourcedFixletAction" type="SourcedFixletAction"/>
        <xs:element name="MultipleActionGroup" type="MultipleActionGroup"/>
        <xs:element name="Baseline" type="Baseline"/>
        <xs:element name="ComputerGroup" type="ComputerGroup"/>
        <xs:element name="CustomSite" type="Site"/>
        <xs:element name="ActionSite" type="Site"/>        
        
        <xs:element name="ExternalSite">
          <xs:complexType>
            <xs:complexContent>
              <xs:extension base="Site">
                <xs:sequence>
                  <xs:element name="Masthead" type="xs:string" minOccurs="0"/>
                </xs:sequence>
              </xs:extension>
            </xs:complexContent>
          </xs:complexType>
        </xs:element>

        <xs:element name="OperatorSite">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Name" type="ObjectName" />
              <xs:element name="GatherURL" type="xs:string" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>

        <xs:element name="Property">
          <xs:complexType>
            <xs:complexContent>
              <xs:extension base="Property">
                <xs:attribute name="SkipUI" type="xs:boolean"/>
              </xs:extension>
            </xs:complexContent>
          </xs:complexType>
        </xs:element>

      </xs:choice>
      <xs:attribute name="SkipUI" type="xs:boolean" />
    </xs:complexType>
  </xs:element>

  <xs:complexType name="ComputerGroup">
    <xs:sequence>
      <xs:element name="Title" type="ObjectName" minOccurs="1" />
      <xs:element name="Domain" minOccurs="0" type="Domain" />
      <xs:element name="JoinByIntersection" type="xs:boolean" minOccurs="1" />
      <xs:element name="IsDynamic" type="xs:boolean" minOccurs="0" />
      <!--ignored-->
      <xs:element name="EvaluateOnClient" type="xs:boolean" minOccurs="0" />
      <!--ignored-->
      <xs:group maxOccurs="unbounded" ref="ComputerGroup" />
    </xs:sequence>
    <xs:attribute name="SkipUI" type="xs:boolean"/>
  </xs:complexType>

  <xs:complexType name="Baseline">
    <xs:complexContent>
      <xs:extension base="Fixlet">
        <xs:sequence>
          <xs:element name="BaselineComponentCollection">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="BaselineComponentGroup" minOccurs="0" maxOccurs="unbounded">
                  <xs:complexType>
                    <xs:sequence>
                      <xs:element name="BaselineComponent" minOccurs="0" maxOccurs="unbounded">
                        <xs:complexType>
                          <xs:choice>
                            <xs:sequence>
                              <xs:element name="Relevance" type="RelevanceString" />
                              <xs:element name="Delay" type="NonNegativeTimeInterval" minOccurs="0" />
                              <xs:sequence minOccurs="0">
                                <xs:element name="ActionScript" type="ActionScript" />
                                <xs:element name="SuccessCriteria" type="ActionSuccessCriteria" minOccurs="0" />
                              </xs:sequence>
                            </xs:sequence>
                            <xs:sequence>
                              <xs:element name="ActionScript" type="ActionScript" />
                              <xs:element name="SuccessCriteria" type="ActionSuccessCriteria" minOccurs="0" />
                              <xs:element name="Relevance" type="RelevanceString" />
                              <xs:element name="Delay" type="NonNegativeTimeInterval" minOccurs="0" />
                            </xs:sequence>
                          </xs:choice>
                          <xs:attribute name="Name" type="xs:normalizedString" />
                          <xs:attribute name="ActionName" type="xs:normalizedString" />
                          <xs:attribute name="IncludeInRelevance" type="xs:boolean" />
                          <xs:attribute name="SourceSiteURL" type="xs:anyURI" use="optional" />
                          <xs:attribute name="SourceID" type="xs:nonNegativeInteger" use="optional" />
                        </xs:complexType>
                      </xs:element>
                    </xs:sequence>
                    <xs:attribute name="Name" type="xs:normalizedString" />
                  </xs:complexType>
                </xs:element>
              </xs:sequence>
            </xs:complexType>
          </xs:element>
          <xs:element name="Settings" type="ActionSettings" minOccurs="0" />
          <xs:element name="SettingsLocks" type="ActionSettingsLocks" minOccurs="0" />
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="MultipleActionGroup">
    <xs:sequence>
      <xs:element name="Title" type="ObjectName" minOccurs="0" />
      <xs:element name="Relevance" type="RelevanceString" minOccurs="0" />
      <xs:element name="PreGroupActionScript" type="ActionScript" minOccurs="0" />
      <xs:element name="MemberAction" minOccurs="0" maxOccurs="unbounded">
        <xs:complexType>
          <xs:complexContent>
            <xs:extension base="Action">
              <xs:sequence>
                <xs:element name="IncludeInGroupRelevance" type="xs:boolean" minOccurs="0" />
              </xs:sequence>
            </xs:extension>
          </xs:complexContent>
        </xs:complexType>
      </xs:element>
      <xs:element name="SourcedMemberAction" minOccurs="0" maxOccurs="unbounded" >
        <xs:complexType>
          <xs:complexContent>
            <xs:extension base="SourcedFixletAction" >
              <xs:sequence>
                <xs:element name="IncludeInGroupRelevance" type="xs:boolean" minOccurs="0" />
              </xs:sequence>
            </xs:extension>
          </xs:complexContent>
        </xs:complexType>
      </xs:element>
      <xs:element name="PostGroupActionScript" type="ActionScript" minOccurs="0" />
      <xs:element name="Settings" type="ActionSettings" minOccurs="0" />
      <xs:element name="SettingsLocks" type="ActionSettingsLocks" minOccurs="0" />
      <xs:element name="Domain" type="Domain" minOccurs="0" />
      <xs:element name="Target" type="BESActionTarget" minOccurs="0" />
      <xs:element name="SourceFixletID" type="BESActionSourceFixlet" minOccurs="0" />
    </xs:sequence>
    <xs:attribute name="SkipUI" type="xs:boolean"/>
  </xs:complexType>

  <xs:complexType name="SourcedFixletAction">
    <xs:sequence>
      <xs:element name="SourceFixlet" type="BESActionSourceFixlet" />
      <xs:element name="Target" type="BESActionTarget" minOccurs="0" />      
      <xs:element name="Parameter" type="BESActionParameter" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="SecureParameter" type="BESActionParameter" minOccurs="0" maxOccurs="unbounded" />      
      <xs:element name="Settings" type="ActionSettings" minOccurs="0" />
      <xs:element name="IsUrgent" type="xs:boolean" minOccurs="0" />
      <xs:element name="Title" type="ObjectName" minOccurs="0" />
    </xs:sequence>
      <xs:attribute name="SkipUI" type="xs:boolean"/>
  </xs:complexType>

  <xs:complexType name="SingleAction">
    <xs:complexContent>
      <xs:extension base="Action">
        <xs:sequence>
          <xs:element name="Settings" type="ActionSettings" minOccurs="0" />
          <xs:element name="SettingsLocks" type="ActionSettingsLocks" minOccurs="0" />
          <xs:element name="IsUrgent" type="xs:boolean" minOccurs="0" />
          <xs:element name="Domain" type="Domain" minOccurs="0" />          
          <xs:element name="Target" type="BESActionTarget" minOccurs="0" />
          <xs:element name="SourceFixlet" type="BESActionSourceFixlet" minOccurs="0" />
        </xs:sequence>
        <xs:attribute name="SkipUI" type="xs:boolean"/>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="Analysis">
    <xs:complexContent>
      <xs:extension base="Fixlet">
        <xs:sequence>
          <xs:element name="Property" minOccurs="0" maxOccurs="unbounded">
            <xs:complexType>
              <xs:simpleContent>
                <xs:extension base="Property">
                  <xs:attribute name="ID" type="xs:positiveInteger" use="required" />
                </xs:extension>
              </xs:simpleContent>
            </xs:complexType>
          </xs:element>
        </xs:sequence>
        <xs:attribute name="AutoActivate" type="xs:boolean"/>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="Site">
    <xs:sequence>
      <xs:element name="Name" type="ObjectName" />
      <xs:element name="GatherURL" type="xs:string" minOccurs="0" />
      <xs:element name="Description" type="xs:string" minOccurs="0" />
      <xs:element name="Domain" type="Domain" minOccurs="0" />
      <xs:element name="GlobalReadPermission" type="xs:boolean" minOccurs="0"/>
      <xs:element name="Subscription" minOccurs="0">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="Mode">
              <xs:simpleType>
                <xs:restriction base="xs:normalizedString">
                  <xs:enumeration value="All" />
                  <xs:enumeration value="None" />
                  <xs:enumeration value="AdHoc" />
                  <xs:enumeration value="Custom" />
                </xs:restriction>
              </xs:simpleType>
            </xs:element>
            <xs:element name="CustomGroup" minOccurs="0">
              <xs:complexType>
                <xs:sequence>
                  <xs:group ref="ComputerGroup" maxOccurs="unbounded"/>
                </xs:sequence>
                <xs:attribute name="JoinByIntersection" type="xs:boolean" />
              </xs:complexType>
            </xs:element>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>

  <xs:simpleType name="SitePermissionString">
    <xs:restriction base="xs:normalizedString">
      <xs:enumeration value="Owner" />
      <xs:enumeration value="Reader" />
      <xs:enumeration value="Writer" />
      <xs:enumeration value="None" />
    </xs:restriction>
  </xs:simpleType>

  <xs:complexType name="SitePermission">
    <xs:simpleContent>
      <xs:extension base="xs:normalizedString">
        <xs:attribute name="Permission" use="required" type="SitePermissionString">
        </xs:attribute>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>

  <xs:complexType name="ExternalSitePermission">
    <xs:simpleContent>
      <xs:extension base="xs:normalizedString">
        <xs:attribute name="Permission" use="required">
          <xs:simpleType>
            <xs:restriction base="xs:string">
              <xs:enumeration value="Reader" />
              <xs:enumeration value="None" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>

  <xs:simpleType name="Domain">
    <xs:restriction base="xs:string">
      <xs:pattern value="\p{IsBasicLatin}{4}"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:complexType name="Fixlet">
    <xs:sequence>
      <xs:element name="Title" type="ObjectName" />
      <xs:element name="Description" type="xs:string" />
      <xs:choice>
        <xs:element name="Relevance" type="RelevanceString" maxOccurs="unbounded" />
        <xs:element name="GroupRelevance">
          <xs:complexType>
            <xs:group maxOccurs="unbounded" ref="ComputerGroup" />
            <xs:attribute name="JoinByIntersection" type="xs:boolean" />
          </xs:complexType>
        </xs:element>
      </xs:choice>
      <xs:element name="Category" type="xs:normalizedString" minOccurs="0" />
      <xs:element name="WizardData" minOccurs="0">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="Name" type="xs:string" minOccurs="0" />
            <xs:element name="DataStore" type="xs:string" minOccurs="0" />
            <xs:element name="StartURL" type="xs:string" minOccurs="0" />
            <xs:element name="SkipUI" type="xs:string" minOccurs="0" />
          </xs:sequence>
        </xs:complexType>
      </xs:element>
      <xs:element name="DownloadSize" type="xs:nonNegativeInteger" minOccurs="0" />
      <xs:element name="Source" type="xs:normalizedString" minOccurs="0" />
      <xs:element name="SourceID" type="xs:normalizedString" minOccurs="0" />
      <xs:element name="SourceReleaseDate" type="NonNegativeDate" minOccurs="0" />
      <xs:element name="SourceSeverity" type="xs:normalizedString" minOccurs="0" />
      <xs:element name="CVENames" type="xs:normalizedString" minOccurs="0" />
      <xs:element name="SANSID" type="xs:normalizedString" minOccurs="0" />
      <xs:element name="MIMEField" minOccurs="0" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="Name" type="xs:normalizedString" />
            <xs:element name="Value" type="xs:normalizedString" />
          </xs:sequence>
        </xs:complexType>
      </xs:element>
      <xs:element name="Domain" minOccurs="0" type="Domain" />
      <xs:element name="Delay" type="NonNegativeTimeInterval" minOccurs="0" />
    </xs:sequence>
    <xs:attribute name="SkipUI" type="xs:boolean"/>
  </xs:complexType>

  <xs:complexType name="FixletWithActions">
    <xs:complexContent>
      <xs:extension base="Fixlet">
        <xs:sequence>
          <xs:element name="DefaultAction" type="FixletAction" minOccurs="0" />
          <xs:element name="Action" type="FixletAction" minOccurs="0" maxOccurs="unbounded" />
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

  <xs:complexType name="FixletAction">
    <xs:sequence>
      <xs:element name="Description" minOccurs="0">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="PreLink" type="xs:string" />
            <xs:element name="Link" type="xs:string" />
            <xs:element name="PostLink" type="xs:string" />
          </xs:sequence>
        </xs:complexType>
      </xs:element>
      <xs:element name="ActionScript" type="ActionScript" />
      <xs:element name="SuccessCriteria" minOccurs="0" type="ActionSuccessCriteria" />
      <xs:element name="SuccessCriteriaLocked" type="xs:boolean" minOccurs="0" />
      <xs:element name="Settings" type="ActionSettings" minOccurs="0" />
      <xs:element name="SettingsLocks" type="ActionSettingsLocks" minOccurs="0" />
    </xs:sequence>
    <xs:attribute name="ID" use="required">
      <xs:simpleType>
        <xs:restriction base="xs:normalizedString">
          <xs:minLength value="1" />
        </xs:restriction>
      </xs:simpleType>
    </xs:attribute>
  </xs:complexType>

  <xs:complexType name="Action">
    <xs:sequence>
      <xs:element name="Title" type="ObjectName" />
      <xs:element name="Relevance" type="RelevanceString" />
      <xs:element name="ActionScript" type="ActionScript" />
      <xs:element name="SuccessCriteria" type="ActionSuccessCriteria" minOccurs="0" />
      <xs:element name="SuccessCriteriaLocked" type="xs:boolean" minOccurs="0" />
      <xs:element name="Parameter" type="BESActionParameter" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="SecureParameter" type="BESActionParameter" minOccurs="0" maxOccurs="unbounded" />
      <xs:element name="MIMEField" minOccurs="0" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="Name" type="xs:normalizedString" />
            <xs:element name="Value" type="xs:normalizedString" />
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="ActionScript">
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute name="MIMEType" type="xs:normalizedString" default="application/x-Fixlet-Windows-Shell" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>

  <xs:complexType name="ActionSuccessCriteria">
    <xs:simpleContent>
      <xs:extension base="RelevanceString">
        <xs:attribute name="Option">
          <xs:simpleType>
            <xs:restriction base="xs:string">
              <xs:enumeration value="RunToCompletion" />
              <xs:enumeration value="OriginalRelevance" />
              <xs:enumeration value="CustomRelevance" />
            </xs:restriction>
          </xs:simpleType>
        </xs:attribute>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>

  <xs:complexType name="Property">
    <xs:simpleContent>
      <xs:extension base="RelevanceString">
        <xs:attribute name="Name" type="ObjectName" use="required" />
        <xs:attribute name="EvaluationPeriod" type="NonNegativeTimeInterval" use="optional" />
        <xs:attribute name="KeepStatistics" type="xs:boolean" use="optional" />
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>

  <xs:complexType name="RelevanceString">
    <xs:simpleContent>
      <xs:extension base="xs:string" />
    </xs:simpleContent>
  </xs:complexType>

  <xs:group name="ComputerGroup">
    <xs:choice>
      <xs:element name="SearchComponentRelevance">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="Relevance" type="RelevanceString" />
          </xs:sequence>
          <xs:attribute name="Comparison">
            <xs:simpleType>
              <xs:restriction base="xs:normalizedString">
                <xs:enumeration value="IsTrue" />
                <xs:enumeration value="IsFalse" />
              </xs:restriction>
            </xs:simpleType>
          </xs:attribute>
        </xs:complexType>
      </xs:element>
      <xs:element name="SearchComponentPropertyReference">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="SearchText" type="xs:normalizedString" />
            <xs:element name="Relevance" type="RelevanceString" />
          </xs:sequence>
          <xs:attribute name="PropertyName" type="xs:normalizedString" />
          <xs:attribute name="Comparison">
            <xs:simpleType>
              <xs:restriction base="xs:normalizedString">
                <xs:enumeration value="Contains" />
                <xs:enumeration value="DoesNotContain" />
                <xs:enumeration value="Equals" />
                <xs:enumeration value="DoesNotEqual" />
              </xs:restriction>
            </xs:simpleType>
          </xs:attribute>
        </xs:complexType>
      </xs:element>
      <xs:element name="SearchComponentGroupReference">
        <xs:complexType>
          <xs:attribute name="GroupName" type="xs:normalizedString" />
          <xs:attribute name="Comparison">
            <xs:simpleType>
              <xs:restriction base="xs:normalizedString">
                <xs:enumeration value="IsMember" />
                <xs:enumeration value="IsNotMember" />
              </xs:restriction>
            </xs:simpleType>
          </xs:attribute>
        </xs:complexType>
      </xs:element>
    </xs:choice>
  </xs:group>

  <xs:simpleType name="ObjectName">
    <xs:restriction base="xs:normalizedString">
      <xs:minLength value="1" />
      <xs:maxLength value="255" />
    </xs:restriction>
  </xs:simpleType>

  <xs:complexType name="BESActionTarget">
    <xs:choice>
      <xs:element name="ComputerName" type="xs:normalizedString" maxOccurs="unbounded" />
      <xs:element name="ComputerID" type="xs:nonNegativeInteger" maxOccurs="unbounded" />
      <xs:element name="CustomRelevance" type="xs:normalizedString" maxOccurs="1"/>
      <xs:element name="AllComputers" type="xs:boolean" maxOccurs="1" />
    </xs:choice>
  </xs:complexType>

  <xs:complexType name="BESSourceSiteAndFixlet">
    <xs:sequence>
      <xs:element name="Sitename" type="ObjectName" />
      <xs:element name="FixletID" type="xs:nonNegativeInteger" />
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="BESActionSourceFixlet">
    <xs:sequence>
      <xs:choice minOccurs="0">
        <xs:element name="GatherURL" type="xs:string" />
        <xs:element name="Sitename" type="xs:normalizedString" />
        <xs:element name="SiteID" type="xs:nonNegativeInteger" />
      </xs:choice>
      <xs:element name="FixletID" type="xs:nonNegativeInteger" minOccurs="1" maxOccurs="1"/>
      <xs:element name="Action" type="xs:normalizedString" minOccurs="0" />
    </xs:sequence>
  </xs:complexType>

  <xs:complexType name="BESActionParameter">
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute name="Name" type="xs:string" use="required"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
  
  <xs:element name="ActionSettings">
		<xs:complexType>
			<xs:sequence>
				<xs:element	name="Settings"	type="ActionSettings" />
			</xs:sequence>
		</xs:complexType>
	</xs:element>
	<xs:complexType name="ActionSettings">
		<xs:sequence>
			<!-- begin pre-7.0 action options -->
			<xs:element name="HasMessage"	minOccurs="0" type="xs:boolean" />
			<xs:element name="Message" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:group minOccurs="0"	ref="Message" />
						<xs:element	name="ShowActionButton"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="ShowCancelButton"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="AllowPostponement" type="xs:boolean" minOccurs="0" />
						<xs:element	name="MaxPostponementInterval" type="ActionMessageMaxPostponementInterval" minOccurs="0" />
						<xs:element	name="PostponementDeadlineOffset" type="TimeInterval" minOccurs="0" />
						<xs:element	name="HasTimeout" type="xs:boolean"	minOccurs="0" />
						<xs:element	name="TimeoutInterval" minOccurs="0" type="ActionMessageTimeInterval" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<!-- end pre-7.0 action options -->
			<xs:element name="ActionUITitle" minOccurs="0" type="xs:normalizedString" />
			<xs:element name="PreActionShowUI" minOccurs="0" type="xs:boolean" />
			<xs:element name="PreAction" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element	name="Text"	type="xs:string" minOccurs="0" />
						<xs:element	name="AskToSaveWork" type="xs:boolean" minOccurs="0" />
						<xs:element	name="ShowActionButton"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="ShowCancelButton"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="DeadlineBehavior"	type="ActionDeadlineBehavior" minOccurs="0" />
						<xs:element	name="DeadlineType"	minOccurs="0">
							<xs:simpleType>
								<xs:restriction	base="xs:string">
									<xs:enumeration value="Interval" />
									<xs:enumeration value="Absolute" />
								</xs:restriction>
							</xs:simpleType>
						</xs:element>
						<xs:element	name="DeadlineInterval"	type="ActionMessageTimeInterval" minOccurs="0" />
						<!--
							Use DeadlineOffset to specify the pre-action deadline using GMT as the reference time.
							Use DeadlineLocalOffset to specify the pre-action deadline using local time as the reference time.
							
							These are set according to the ISO 8601 specification.
							
							For example, suppose it's January 1, 12:00 local time and your time zone is GMT-8.
							
							"DeadlineOffset = P1DT2H" sets the deadline to January 2, 22:00.
							"DeadlineLocalOffset = P1DT2H" sets the deadline to January 2, 14:00.
							
							You probably want to use DeadlineLocalOffset, which was added in 8.1 patch #2.
						-->
						<xs:choice>
							<xs:element	name="DeadlineOffset" type="TimeInterval" minOccurs="0" />
							<xs:element	name="DeadlineLocalOffset" type="TimeInterval" minOccurs="0" />
						</xs:choice>
						<xs:element	name="ShowConfirmation"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="Confirmation"	type="xs:string" minOccurs="0" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<xs:element name="HasRunningMessage" type="xs:boolean" minOccurs="0" />
			<xs:element name="RunningMessage"	minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element	name="Title" type="xs:string" minOccurs="0" />
						<xs:element	name="Text"	type="xs:string" minOccurs="0" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<xs:element name="HasTimeRange" type="xs:boolean" minOccurs="0" />
			<xs:element name="TimeRange" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element	name="StartTime" type="xs:time" minOccurs="0" />
						<xs:element	name="EndTime" type="xs:time" minOccurs="0"	/>
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<xs:element name="HasStartTime" type="xs:boolean" minOccurs="0" />
			<!--
				Use StartDateTimeOffset to specify the start time using GMT as the reference time.
				Use StartDateTimeLocalOffset to specify the start time using local time as the reference time.
				
				These are set according to the ISO 8601 specification.
				
				For example, suppose it's January 1, 12:00 local time and your time zone is GMT-8.
				
				"StartDateTimeOffset = P1DT2H" sets the start time to January 2, 22:00.
				"StartDateTimeLocalOffset = P1DT2H" sets the start time to January 2, 14:00.
				
				You probably want to use StartDateTimeLocalOffset, which was added in 8.1 patch #2.
			-->
			<xs:choice>
				<xs:element name="StartDateTimeOffset" type="TimeInterval" minOccurs="0" />
				<xs:element name="StartDateTimeLocalOffset" type="TimeInterval" minOccurs="0" />
			</xs:choice>
			<xs:element name="HasEndTime"	type="xs:boolean" minOccurs="0" />
			<!--
				Use EndDateTimeOffset to specify the end time using GMT as the reference time.
				Use EndDateTimeLocalOffset to specify the end time using local time as the reference time.
				
				These are set according to the ISO 8601 specification.
				
				For example, suppose it's January 1, 12:00 local time and your time zone is GMT-8.
				
				"EndDateTimeOffset = P1DT2H" sets the end time to January 2, 22:00.
				"EndDateTimeLocalOffset = P1DT2H" sets the end time to January 2, 14:00.
				
				You probably want to use EndDateTimeLocalOffset, which was added in 8.1 patch #2.
			-->
			<xs:choice>
				<xs:element name="EndDateTimeOffset" type="TimeInterval" minOccurs="0" />
				<xs:element name="EndDateTimeLocalOffset" type="TimeInterval" minOccurs="0"/>
			</xs:choice>
			<xs:element name="HasDayOfWeekConstraint"	type="xs:boolean" minOccurs="0" />
			<xs:element name="DayOfWeekConstraint" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element	name="Sun" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Mon" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Tue" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Wed" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Thu" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Fri" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Sat" type="xs:boolean" minOccurs="0" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<xs:element name="UseUTCTime" type="xs:boolean" minOccurs="0" />
			<xs:element name="ActiveUserRequirement" minOccurs="0">
				<xs:simpleType>
					<xs:restriction base="xs:string">
						<xs:enumeration	value="NoRequirement" />
						<xs:enumeration	value="RequireUser" />
						<xs:enumeration	value="RequireNoUser" />
					</xs:restriction>
				</xs:simpleType>
			</xs:element>
			<xs:element name="ActiveUserType" minOccurs="0">
				<xs:simpleType>
					<xs:restriction base="xs:string">
						<xs:enumeration	value="AllUsers" />
						<xs:enumeration	value="LocalUsers" />
						<xs:enumeration	value="UsersOfGroups" />
					</xs:restriction>
				</xs:simpleType>
			</xs:element>
			<xs:element name="UIGroupConstraints" minOccurs="0">
				<xs:complexType>
					<xs:choice maxOccurs="unbounded">
						<xs:element	name="Win9xGroup" minOccurs="0" />
						<xs:element	name="WinNTGroup" minOccurs="0" />
						<xs:element	name="LocalGroup" minOccurs="0"	maxOccurs="unbounded">
							<xs:complexType>
								<xs:attribute name="Name" type="xs:string" use="required" />
							</xs:complexType>
						</xs:element>
						<xs:element	name="DomainGroup" minOccurs="0" maxOccurs="unbounded">
							<xs:complexType>
								<xs:attribute name="Name" type="xs:string" use="required" />
								<xs:attribute name="Sid" type="xs:string" use="required" />
							</xs:complexType>
						</xs:element>
					</xs:choice>
				</xs:complexType>
			</xs:element>
			<xs:element name="HasWhose" type="xs:boolean" minOccurs="0" />
			<xs:element name="Whose" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element	name="Property" type="xs:string" minOccurs="0" />
						<xs:element	name="Relation" minOccurs="0">
							<xs:simpleType>
								<xs:restriction	base="xs:string" />
							</xs:simpleType>
						</xs:element>
						<xs:element	name="Value" type="xs:string" minOccurs="0" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>

			<xs:element name="PreActionCacheDownload" type="xs:boolean" minOccurs="0" />
			<!--
				 In 7.1 the reapply options in the Console UI were changed so that instead of a checkbox
				 to indicate reapply interval, there are radio buttons indicating one of { PolicyReapply, PeriodicReapply }
				 For backward compatibility, the XML for the options have stayed the same as before.  The mapping:
				 NoReapply       - { Reapply = false }
				 PolicyReapply   - { Reapply = true, HasReapplyInterval = false }
				 PeriodicReapply - { Reapply = true, HasReapplyInterval = true }
			-->
			<xs:element name="Reapply" type="xs:boolean" minOccurs="0" />
			<xs:element name="HasReapplyLimit" type="xs:boolean" minOccurs="0" />
			<xs:element name="ReapplyLimit" type="xs:nonNegativeInteger" minOccurs="0" />
			<xs:element name="HasReapplyInterval" type="xs:boolean" minOccurs="0" />
			<xs:element name="ReapplyInterval" type="ActionReapplyInterval" minOccurs="0" />

			<xs:element name="HasRetry" type="xs:boolean" minOccurs="0" />
			<xs:element name="RetryCount" type="xs:nonNegativeInteger" minOccurs="0" />
			<xs:element name="RetryWait" minOccurs="0">
				<xs:complexType>
					<xs:simpleContent>
						<xs:extension base="RetryWaitInterval">
							<xs:attribute name="Behavior"	default="WaitForInterval">
								<xs:simpleType>
									<xs:restriction base="xs:string">
										<xs:enumeration	value="WaitForReboot" />
										<xs:enumeration	value="WaitForInterval" />
									</xs:restriction>
								</xs:simpleType>
							</xs:attribute>
						</xs:extension>
					</xs:simpleContent>
				</xs:complexType>
			</xs:element>
			<xs:element name="HasTemporalDistribution" type="xs:boolean" minOccurs="0" />
			<xs:element name="TemporalDistribution" type="NonNegativeTimeInterval" minOccurs="0" />
			<xs:element name="ContinueOnErrors" type="xs:boolean" minOccurs="0" />
			<xs:element name="PostActionBehavior" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element	name="AllowCancel" type="xs:boolean" minOccurs="0" />
						<!-- begin pre-7.0 action options -->
						<xs:element	name="AllowPostponement" type="xs:boolean" minOccurs="0" />
						<xs:element	name="MaxPostponementInterval" type="ActionMessageMaxPostponementInterval" minOccurs="0" />
						<xs:element	name="HasTimeout" type="xs:boolean"	minOccurs="0" />
						<xs:element	name="TimeoutInterval" type="ActionMessageTimeInterval"	minOccurs="0" />
						<!-- end pre-7.0 action	options	-->
						<xs:element	name="PostActionDeadlineBehavior" type="ActionDeadlineBehavior"	minOccurs="0" />
						<xs:element	name="PostActionDeadlineInterval" type="ActionMessageTimeInterval" minOccurs="0" />
						<xs:group ref="Message"	/>
					</xs:sequence>
					<xs:attribute name="Behavior" default="Nothing">
						<xs:simpleType>
							<xs:restriction base="xs:string">
								<xs:enumeration	value="Nothing" />
								<xs:enumeration	value="Restart" />
								<xs:enumeration	value="Shutdown" />
							</xs:restriction>
						</xs:simpleType>
					</xs:attribute>
				</xs:complexType>
			</xs:element>
			<xs:element name="IsOffer" type="xs:boolean" minOccurs="0" />
			<xs:element name="AnnounceOffer" type="xs:boolean" minOccurs="0" />
			<xs:element name="OfferCategory" type="xs:string"	minOccurs="0" />
			<xs:element name="OfferDescriptionHTML" type="xs:string" minOccurs="0" />
		</xs:sequence>
	</xs:complexType>
	<xs:complexType name="ActionSettingsLocks">
		<xs:sequence>
			<!-- begin pre-7.0 action options -->
			<xs:element name="HasMessage"	type="xs:boolean" minOccurs="0"	/>
			<xs:element name="Message" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:group minOccurs="0"	ref="MessageLocks" />
						<xs:element	name="ShowActionButton"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="ShowCancelButton"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="Postponement"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="Timeout" type="xs:boolean" minOccurs="0" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<!-- end pre-7.0 action options -->
			<xs:element name="ActionUITitle" type="xs:boolean" minOccurs="0" />
			<xs:element name="PreActionShowUI" type="xs:boolean" minOccurs="0" />
			<xs:element name="PreAction" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:group minOccurs="0"	ref="MessageLocks" />
						<xs:element	name="AskToSaveWork" type="xs:boolean" minOccurs="0" />
						<xs:element	name="ShowActionButton"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="ShowCancelButton"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="DeadlineBehavior"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="ShowConfirmation"	type="xs:boolean" minOccurs="0" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<xs:element name="HasRunningMessage" type="xs:boolean" minOccurs="0" />
			<xs:element name="RunningMessage" minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element	name="Title" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Text"	type="xs:boolean" minOccurs="0" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<xs:element name="TimeRange" type="xs:boolean" minOccurs="0" />
			<xs:element name="StartDateTimeOffset" type="xs:boolean" minOccurs="0" />
			<xs:element name="EndDateTimeOffset" type="xs:boolean" minOccurs="0" />
			<xs:element name="DayOfWeekConstraint" type="xs:boolean" minOccurs="0" />
			<xs:element name="ActiveUserRequirement" type="xs:boolean" minOccurs="0" />
			<xs:element name="ActiveUserType"	type="xs:boolean" minOccurs="0"	/>
			<xs:element name="Whose" type="xs:boolean" minOccurs="0" />

			<xs:element name="PreActionCacheDownload" type="xs:boolean" minOccurs="0" />
			<!-- 
				 In 7.1 the reapply options in the Console UI were changed to a choice of { NoReapply, PolicyReapply, PeriodicReapply },
				 where PeriodicReapply implies that a reapply interval exists.  The "ReapplyInterval" lock was removed because of this new organization.
				 For backward-compatibility, if "ReapplyInterval" is locked, then "Reapply" will be locked.
			-->
			<xs:element name="Reapply" type="xs:boolean" minOccurs="0" />
			<xs:element name="ReapplyLimit" type="xs:boolean" minOccurs="0" />
			<xs:element name="ReapplyInterval" type="xs:boolean" minOccurs="0" />
			<xs:element name="RetryCount" type="xs:boolean" minOccurs="0" />
			<xs:element name="RetryWait" type="xs:boolean" minOccurs="0" />
			<xs:element name="TemporalDistribution" type="xs:boolean" minOccurs="0" />
			<xs:element name="ContinueOnErrors" type="xs:boolean" minOccurs="0" />
			<xs:element name="PostActionBehavior"	minOccurs="0">
				<xs:complexType>
					<xs:sequence>
						<xs:element	name="Behavior"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="AllowCancel" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Postponement"	type="xs:boolean" minOccurs="0" />
						<xs:element	name="Timeout" type="xs:boolean" minOccurs="0" />
						<xs:element	name="Deadline"	type="xs:boolean" minOccurs="0" />
						<!-- Postponement and Timeout were BES pre-7.0 options that	were replaced with Deadline	-->
						<xs:group ref="MessageLocks" minOccurs="0" />
					</xs:sequence>
				</xs:complexType>
			</xs:element>
			<xs:element name="IsOffer" type="xs:boolean" minOccurs="0" />
			<xs:element name="AnnounceOffer" type="xs:boolean" minOccurs="0" />
			<xs:element name="OfferTitle" type="xs:string" minOccurs="0" />
			<xs:element name="OfferCategory" type="xs:string" minOccurs="0" />
			<xs:element name="OfferDescriptionHTML" type="xs:string" minOccurs="0" />
		</xs:sequence>
	</xs:complexType>
	<xs:simpleType name="ActionReapplyInterval">
		<xs:restriction	base="NonNegativeTimeInterval">
			<xs:enumeration	value="PT15M" />
			<xs:enumeration	value="PT30M" />
			<xs:enumeration	value="PT1H" />
			<xs:enumeration	value="PT2H" />
			<xs:enumeration	value="PT4H" />
			<xs:enumeration	value="PT6H" />
			<xs:enumeration	value="PT8H" />
			<xs:enumeration	value="PT12H" />
			<xs:enumeration	value="P1D" />
			<xs:enumeration	value="P2D" />
			<xs:enumeration	value="P3D" />
			<xs:enumeration	value="P5D" />
			<xs:enumeration	value="P7D" />
			<xs:enumeration	value="P15D" />
			<xs:enumeration	value="P30D" />
		</xs:restriction>
	</xs:simpleType>
	<xs:simpleType name="ActionMessageMaxPostponementInterval">
		<xs:restriction	base="NonNegativeTimeInterval">
			<xs:enumeration value="PT15M" />
			<xs:enumeration value="PT30M" />
			<xs:enumeration value="PT1H" />
			<xs:enumeration value="PT2H" />
			<xs:enumeration value="PT4H" />
			<xs:enumeration value="PT6H" />
			<xs:enumeration value="PT8H" />
			<xs:enumeration value="PT12H" />
			<xs:enumeration value="P1D" />
			<xs:enumeration value="P2D" />
			<xs:enumeration value="P3D" />
			<xs:enumeration value="P5D" />
			<xs:enumeration value="P7D" />
			<xs:enumeration value="P15D" />
			<xs:enumeration value="P30D" />
		</xs:restriction>
	</xs:simpleType>
	<xs:simpleType name="ActionMessageTimeInterval">
		<xs:restriction	base="NonNegativeTimeInterval">
			<xs:enumeration value="PT1M" />
			<xs:enumeration value="PT2M" />
			<xs:enumeration value="PT3M" />
			<xs:enumeration value="PT4M" />
			<xs:enumeration value="PT5M" />
			<xs:enumeration value="PT10M" />
			<xs:enumeration value="PT15M" />
			<xs:enumeration value="PT30M" />
			<xs:enumeration value="PT1H" />
			<xs:enumeration value="PT2H" />
			<xs:enumeration value="PT4H" />
			<xs:enumeration value="PT6H" />
			<xs:enumeration value="PT8H" />
			<xs:enumeration value="PT12H" />
			<xs:enumeration value="P1D" />
			<xs:enumeration value="P2D" />
			<xs:enumeration value="P3D" />
			<xs:enumeration value="P5D" />
			<xs:enumeration value="P7D" />
			<xs:enumeration value="P15D" />
			<xs:enumeration value="P30D" />
		</xs:restriction>
	</xs:simpleType>
	<xs:simpleType name="ActionDeadlineBehavior">
		<xs:restriction	base="xs:string">
			<xs:enumeration value="ForceToRun" />
			<xs:enumeration value="RunAutomatically" />
		</xs:restriction>
	</xs:simpleType>
	<xs:group name="Message">
		<xs:sequence>
			<xs:element name="Title" type="xs:normalizedString" minOccurs="0" />
			<xs:element name="Text" type="xs:string" minOccurs="0" />
		</xs:sequence>
	</xs:group>
	<xs:group name="MessageLocks">
		<xs:sequence>
			<xs:element name="Title" type="xs:boolean" minOccurs="0" />
			<xs:element name="Text" type="xs:boolean"	minOccurs="0" />
		</xs:sequence>
	</xs:group>
	<xs:simpleType name="RetryWaitInterval">
		<xs:restriction	base="NonNegativeTimeInterval">
			<xs:enumeration value="PT10M" />
			<xs:enumeration value="PT15M" />
			<xs:enumeration value="PT30M" />
			<xs:enumeration value="PT1H" />
			<xs:enumeration value="PT2H" />
			<xs:enumeration value="PT4H" />
			<xs:enumeration value="PT6H" />
			<xs:enumeration value="PT8H" />
			<xs:enumeration value="PT12H" />
			<xs:enumeration value="P1D" />
			<xs:enumeration value="P2D" />
			<xs:enumeration value="P3D" />
			<xs:enumeration value="P5D" />
			<xs:enumeration value="P7D" />
			<xs:enumeration value="P15D" />
			<xs:enumeration value="P30D" />
		</xs:restriction>
	</xs:simpleType>
	<xs:simpleType name="TimeInterval">
		<xs:restriction	base="xs:duration">
			<xs:pattern value="\-?P([0-9]+D)?(T([0-9]+H)?([0-9]+M)?([0-9]+(\.[0-9]{1,6})?S)?)?" />
		</xs:restriction>
	</xs:simpleType>
	<xs:simpleType name="NonNegativeTimeInterval">
		<xs:restriction	base="xs:duration">
			<xs:pattern value="P([0-9]+D)?(T([0-9]+H)?([0-9]+M)?([0-9]+(\.[0-9]{1,6})?S)?)?" />
		</xs:restriction>
	</xs:simpleType>
	<xs:simpleType name="NonNegativeDate">
		<xs:restriction	base="xs:date">
			<xs:pattern value="\d{4}-\d{2}-\d{2}" />
		</xs:restriction>
	</xs:simpleType>

</xs:schema>


```


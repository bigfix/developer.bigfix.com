---
title: Fixlet or Task
---

The schema for Fixlets is similar to the schema for tasks. This is their combined schema:

```xml
<Fixlet> | <Task>
	<Title> xs:normalizedString </Title> [1]
		This is the Fixlet name.
	<Description> xs:string </Description> [1]
        The description is treated as HTML that is used to construct
        the Fixlet body
        for the “Description” tab of the console Fixlet document.
    <Relevance> RelevanceString </Relevance> [0..*]
        Each relevance element is shown as a separate relevance clause
        in the console Fixlet document. The Fixlet is reported as
        relevant only for computers for which every relevance clauses
        evaluates to true.
  <GroupRelevance JoinByIntersection="xs:boolean"> [1]
        The content of this tag includes any number of the search component
        types in any order:
    <SearchComponentRelevance> SearchComponentRelevance
    </SearchComponentRelevance> [0..*]
    <SearchComponentPropertyReference> SearchComponentPropertyReference
    </SearchComponentPropertyReference> [0..*]
    <SearchComponentGroupReference> SearchComponentGroupReference
    </SearchComponentGroupReference> [0..*]
    </GroupRelevance>
		As of version 7.0, it became possible for Fixlets, Tasks,
		Baselines, and Analyses to have Relevance definitions in
		the same form as computer group definitions. You can
		access this functionality in the console by going to
		the Relevance tab of the Create Fixlet Dialog and selecting
		the option for "computers matching the following criteria".
		The XML for such a Fixlet would have a GroupRelevance tag
		instead of a Relevance tag, in the same form as the XML
		for computer groups.
	<Category> xs:normalizedString </Category> [0..1]
		Displayed on the “details” tab of the Fixlet document
		and in the Fixlet tree/list.
	<WizardData> ... </WizardData> [0..1]
		For use by wizards. Not used for importing through
		the console or through the Server API.
	<DownloadSize> xs:nonNegativeInteger </DownloadSize> [0..1]
		The total number of bytes of all downloads in the
		Fixlet's action.
	<Source> xs:normalizedString </Source> [0..1]
	<SourceID> xs:normalizedString </SourceID> [0..1]
	<SourceReleaseDate> NonNegativeDate </SourceReleaseDate> [0..1]
		Must be of the form YYYY-MM-DD.
	<SourceSeverity> xs:normalizedString </SourceSeverity> [0..1]
	<CVENames> xs:normalizedString </CVENames> [0..1]
	<SANSID> xs:normalizedString </SANSID> [0..1]
		DownloadSize, Source, SourceID, SourceReleaseDate,
		SourceSeverity, CVENames, and SANSID are extra
		information about a Fixlet that are displayed
		on the “details” tab of the Fixlet document and
		in the Fixlet tree/list.
	<DefaultAction> FixletAction </DefaultAction> [0..1]
	<Action> FixletAction </Action> [0..*]
	<MIMEField> [0..*]
		<Name> xs:string </Name> [1]
		<Value> xs:string </Value> [1]
	</MIMEField>
		Some external Fixlets are tagged with special pieces
		of data in the form of MIME fields. They are then
		used by dashboards and wizards. These fields are
		preserved when Fixlets are exported and imported.
		You should only add these special fields if you want
		to access them from dashboards or wizards.
</Fixlet> | </Task>
```

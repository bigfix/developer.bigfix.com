---
title: Baseline
---

You can also specify baselines with .bes files. This is the schema:
```xml
<Baseline>
Baselines have the following fields in common with Fixlets and tasks:
<Title> xs:normalizedString </Title> [1]
<Description> xs:string </Description> [1]
<Relevance> RelevanceString </Relevance> [0..*]
<GroupRelevance> ... </GroupRelevance> [0..1]
<Category> xs:normalizedString </Category> [0..1]
<WizardData> ... </WizardData> [0..1]
<DownloadSize> xs:nonNegativeInteger </DownloadSize> [0..1]
<Source> xs:normalizedString </Source> [0..1]
<SourceID> xs:normalizedString </SourceID> [0..1]
<SourceReleaseDate> NonNegativeDate </SourceReleaseDate> [0..1]
<SourceSeverity> xs:normalizedString </SourceSeverity> [0..1]
<CVENames> xs:normalizedString </CVENames> [0..1]
<SANSID> xs:normalizedString </SANSID> [0..1]
<MIMEField> ... </MIMEField> [0..*]

Baselines are also composed of a collection of named baseline component
groups, which contain baseline components:
<BaselineComponentCollection> [1]
	<BaselineComponentGroup Name="xs:normalizedString [0..1]"> [0..*]
		<BaselineComponent
			Name="xs:normalizedString [0..1]"
				The “Name” attribute corresponds to the content ID
				of the action, which is a short identifier for the
				component that is used to match it up with a
				particular action of the source Fixlet/task/baseline
				of the component.
			ActionName="xs:normalizedString [0..1]"
				The “ActionName” attribute is a longer description
				of the action shown on the “Components” tab of the
				baseline document.
			IncludeInRelevance="xs:boolean [0..1]"
				If true, then the relevance of the component will be
				included in the relevance for the baseline. If false,
				then the baseline will be relevant regardless of
				whether this component is relevant; the individual
				component will still not be executed if it is not
				relevant.
			SourceSiteURL="xs:anyURI [0..1]"
				The gather site URL for the source Fixlet/task/
				baseline that this component comes from.
			SourceID="xs:nonNegativeInteger [0..1]"
				The ID of the Fixlet/task/baseline that this
				component comes from.
			> [0..*]
			<Relevance> RelevanceString </Relevance> [1]
				This component will be executed only on computers
				for which the relevance clause evaluates to true.
			<ActionScript> ActionScript </ActionScript> [1]
			<SuccessCriteria> ActionSuccessCriteria
			</SuccessCriteria> [0..1]
		</BaselineComponent>
	</BaselineComponentGroup>
</BaselineComponentCollection>
<Settings> ActionSettings </Settings> [0..1]
<SettingsLocks> ActionSettingsLocks </SettingsLocks> [0..1]
</Baseline>
```

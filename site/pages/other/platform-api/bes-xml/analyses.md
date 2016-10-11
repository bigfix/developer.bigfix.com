---
title: Analyses
---

You can specify analyses in a .bes file. This is the schema:

```xml
<Analysis>
	<Title> xs:normalizedString </Title> [1]
		The name of the analysis.
	<Description> xs:string </Description> [1]
		The description is treated as HTML that is shown on the “Description”
		tab of the analysis document.
	<Relevance> RelevanceString </Relevance> [1..*]
		Only computers for which all relevance clauses are true will report
		results.
	<Property
		Name="xs:normalizedString [1]"
			The name of the property.
		EvaluationPeriod="NonNegativeTimeInterval [0..1]"
			Controls how often the property is evaluated.
		ID="xs:nonNegativeInteger [1]"
			Each property in the analysis must have a unique ID attribute.
		KeepStatistics="xs:boolean [0..1]"
			If true, then enables statistical inspection of the results
			for this property. This statistical data is then available
			to dashboards and wizards. You should only capture these
			properties if you want to use statistical data from
			dashboards or wizards.
		> [0..*]
		RelevanceString
	</Property>
	<MIMEField> ... </MIMEField> [0..*]
	<GroupRelevance> ... </GroupRelevance> [0..1]
</Analysis>
```

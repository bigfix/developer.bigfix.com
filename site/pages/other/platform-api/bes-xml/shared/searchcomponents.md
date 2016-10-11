---
title: Search components
---

Search components are used to describe a group of computers for creating a
computer group, or for specifying the relevance for a Fixlet, task, baseline, or
analysis. Applicability is defined by a combination of three types of components,
relevance, property reference and group reference.

This is the schema:

```xml
<SearchComponentRelevance
	Comparison="xs:normalizedString (possible values: {’IsTrue’|
		’IsFalse’}) [0..1]"> [0..*]
	<Relevance> RelevanceString </Relevance> [1]
</SearchComponentRelevance>
	Contains a relevance expression and a comparison {’IsTrue’|’IsFalse’}.
	A computer is in the group if the expression is true for that computer
	and the comparison is 'IsTrue' or the expression is false and
	the comparison is 'IsFalse'.
<SearchComponentPropertyReference PropertyName="xs:normalizedString [0..1]"
	Comparison="xs:normalizedString (possible values:
	{’Contains’|’DoesNotContain’|’Equals’|’DoesNotEqual’}) [0..1]"> [0..*]
	<SearchText> xs:normalizedString </SearchText> [1]
	<Relevance> RelevanceString </Relevance> [1]
</SearchComponentPropertyReference>
	Contains a retrieved property name, a comparison {’Contains’ |
	’DoesNotContain’ | ’Equals’ | ’DoesNotEqual’}, and text
	against which to compare the property result. A computer is in the group
	if its result for the property meets the comparison with the specified text.
<SearchComponentGroupReference
	GroupName="xs:normalizedString [0..1]"
	Comparison="xs:normalizedString (value comes from list:
	{’IsMember’|’IsNotMember’}) [0..1]" />Contains another computer
	group name and a comparison {’IsMember’|’IsNotMember’}. A computer
	is in the current group if it is in the other group and
	the comparison is 'IsMember', or if it is not in the other group and
	the comparison is 'IsNotMember'.
```
 
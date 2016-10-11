---
title: Computer groups
---

You can specify automatic computer groups in the .bes file. Note that only
automatic groups can be created by importing through the console, and no
computer groups can be created by using the Server API. This is the schema:

```xml
<ComputerGroup>
	<Title> xs:normalizedString </Title> [1]
		The name of the computer group.
	<JoinByIntersection> xs:boolean </JoinByIntersection> [1]
		If true, then a computer is in the group only if it meets
		the requirements of all of the group components. If false, a
		computer is in the group if it meets any of the requirements
		of the group components.
	<IsDynamic> xs:boolean </IsDynamic> [1]
		Must be true. For internal use.
	<EvaluateOnClient> xs:boolean </EvaluateOnClient> [1]
		Must be true. For internal use.
		The rest of the computer group definition includes any number
		of the search component types in any order:
	<SearchComponentRelevance> SearchComponentRelevance
	</SearchComponentRelevance> [0..*]
	<SearchComponentPropertyReference> SearchComponentPropertyReference
	</SearchComponentPropertyReference> [0..*]
		<SearchComponentGroupReference> SearchComponentGroupReference
	</SearchComponentGroupReference> [0..*]
</ComputerGroup>
```

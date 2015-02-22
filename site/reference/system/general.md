---
title: general
---

{% type computer %}

The &lt;computer&gt; inspectors provide access to the name of the computer.

#### Properties of computer

{% property name of <computer> %}

The name of the computer.

{% type language %}

A language is composed of a primary language (for example, Swiss) and a sub-language (for example, Swiss German).

#### Properties of language

{% property platform id of <language> %}

Returns the string resulting from a call to setlocale(LC_TYPE, &quot;&quot;). This call examines the system environment and returns a string representing the language and character set for any text-related system function. The string is of the form &quot;en_US.UTF-8&quot;.

{% property primary codeset of <language> %}

No documentation exists for this property.

{% property primary country of <language> %}

No documentation exists for this property.

{% property primary language of <language> %}

Extracts the primary language identifier from a language.

#### Casts of language

{% cast <language> as string %}

Returns the language of the system locale.

{% type primary language %}

A primary language identifier indicates the written/spoken language that is used by the system. However, to identify the language that is used in a country or region you must combine the primary language with a sub-language identifier to form language identifiers.

#### Casts of primary language

{% cast <primary language> as string %}

Returns the primary language.


---
title: regular-expression
---

{% type regular expression %}

The &lt;regular expression&gt; inspectors let you use regular expressions (or regexes) in relevance statements. They use the boost library implementation of the &#39;POSIX-Extended&#39; regular expression syntax, as documented at Wikipedia using the search term &quot;posix-extended regex&quot;.

{% type regular expression match %}

The &lt;regular expression match&gt; inspectors let you match regular expressions (or regexes) in relevance statements. They use the boost library implementation of the &#39;POSIX-Extended&#39; regular expression syntax, as documented at Wikipedia using the search term &quot;posix-extended regex&quot;. 

#### Properties of regular expression match

{% property parenthesized part <integer> of <regular expression match> %}

Returns the nth parenthetical (given by &lt;integer&gt;) in the specified regular expression match.

{% property parenthesized part of <regular expression match> %}

Returns the parenthetical part of the specified regular expression match.


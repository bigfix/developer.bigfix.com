---
title: Concatenations
---

The ampersand (&) symbol represents the concatenation operator. 
You can use it to join strings:

{% qna %}
Q: "now" & "then"
A: nowthen
{% endqna %}

and to create time ranges:

{% qna %}
Q: now & day
A: Mon, 04 Apr 2016 22:13:27 +0200 to Tue, 05 Apr 2016 22:13:27 +0200
{% endqna %}

While in the first example `"now"` represents a string, because it is enclosed in double quotes, 
in the second example `now` is a relevance keyword that you can use to extract the current time and 
date from the system clock.

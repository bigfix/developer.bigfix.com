---
title: Relations
---

You use relations to compare values in the Relevance language. There are the
standard alpha and numeric comparators (*=*, *!=*, *<*, *>*, *>=*, *<=*) as well a few strictly
string relations (*starts with*, *ends with*, *contains*, *is contained by*). 


Relations return a boolean `TRUE` or `FALSE` depending on the outcome of the comparison.


Here are some examples of expressions that use relations:

{% qna %}
Q: 1 < 2
A: True
{% endqna %}

{% qna %}
Q: "the whole" is greater than "the sum of the parts"
A: True
{% endqna %}

{% qna %}
Q: "nowhere" starts with "now"
A: True
{% endqna %}

{% qna %}
Q: "nowhere" ends with "here"
A: True
{% endqna %}

{% qna %}
Q: "nowhere" contains "her"
A: True
{% endqna %}

{% qna %}
Q: "he" is contained by "nowhere"
A: True
{% endqna %}



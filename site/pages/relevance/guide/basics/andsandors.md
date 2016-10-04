---
title: ANDs and ORs
---

Logical `AND` and `OR` are also available as binary operators. 
The following query returns `TRUE` only if both equations are true (`AND` expression):

{% qna %}
Q: version of regapp "wordpad.exe" as string = "5.1.2600.2180" and name of operating system = "WinXP"
A: True
{% endqna %}

This query, instead, returns `TRUE` if one `OR` the other equation is true.

{% qna %}
Q: name of operating system = "WinNT" or name of operating system = "WinXP"
A: True
{% endqna %}


You can also logically negate a Boolean expression with the ‘not’ keyword. This query returns `TRUE` if the "z:" drive doesn’t exist. 

{% qna %}
Q: not exists drive "z:"
A: True
{% endqna %}

This is a unary operation (`not`) being used to negate another unary operator (`exists`).


Using existence with Boolean logic even lets you check for things that might otherwise return an error, for example:

{% qna %}
Q: Exists folder "C:\doesn’t exist" AND Exists files "this should normally break" of folder "c:\doesn’t exist"
A: False
{% endqna %}

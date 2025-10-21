# type: bes fixlet result

A `bes fixlet result` represents how a Fixlet was evaluated by a computer. It is constructed by identifying a unique pair of Fixlet and computer. It allows you to determine if and when a specific Fixlet became relevant on a specific computer and if it has been remediated on it.

# computer of &lt;bes fixlet result&gt; : bes computer

Returns the computer associated with the specified Fixlet result.

{% qna %}
Q: name of computer of result (bes computer whose (id of it = 2746378), bes fixlet whose (name of it = "Install Chrome"))
A: PC-01
{% endqna %}

# first became relevant of &lt;bes fixlet result&gt; : time

Returns the time a Fixlet first became relevant on a computer, in regard to the Fixlet result that identifies them.
Note: This inspector is only implemented on BigFix Explorer and Web Reports.

{% qna %}
Q: first became relevant of result (bes computer whose (id of it = 2746378), bes fixlet whose (name of it = "Install Chrome"))
A: Mon, 07 Oct 2025 09:15:00 +0000
{% endqna %}

# fixlet of &lt;bes fixlet result&gt; : bes fixlet

Returns the Fixlet associated with the specified Fixlet result.

{% qna %}
Q: name of fixlet of result (bes computer whose (id of it = 2746378), bes fixlet whose (name of it = "Install Chrome"))
A: Install Chrome
{% endqna %}

# last became nonrelevant of &lt;bes fixlet result&gt; : time

Returns the time a Fixlet last became non-relevant on a computer, in regard to the Fixlet result that identifies them.
Note: This inspector is only implemented on BigFix Explorer and Web Reports.

{% qna %}
Q: last became nonrelevant of result (bes computer whose (id of it = 2746378), bes fixlet whose (name of it = "Install Chrome"))
A: Mon, 07 Oct 2025 09:30:00 +0000
{% endqna %}

# last became relevant of &lt;bes fixlet result&gt; : time

Returns the time a Fixlet last became relevant on a computer, in regard to the Fixlet result that identifies them.
Note: This inspector is only implemented on BigFix Explorer and Web Reports.

{% qna %}
Q: last became relevant of result (bes computer whose (id of it = 2746378), bes fixlet whose (name of it = "Install Chrome"))
A: Mon, 07 Oct 2025 09:15:00 +0000
{% endqna %}

# relevant flag of &lt;bes fixlet result&gt; : boolean

Returns `True` if a Fixlet is relevant on a computer, in regard to the Fixlet result that identifies them. Returns `False` otherwise.

{% qna %}
Q: relevant flag of result (bes computer whose (id of it = 2746378), bes fixlet whose (name of it = "Install Chrome"))
A: False
{% endqna %}

# remediated flag of &lt;bes fixlet result&gt; : boolean

Returns `True` if a Fixlet has been remediated on a computer, in regard to the Fixlet result that identifies them. Returns `False` otherwise.

{% qna %}
Q: remediated flag of result (bes computer whose (id of it = 2746378), bes fixlet whose (name of it = "Install Chrome"))
A: True
{% endqna %}

# type: bes peer download

This inspector returns information regarding files that were downloaded by the BigFix Client via the PeerNest feature of the BigFix infrastructure.

A `bes peer download` represents the download of a file on a PeerNest computer, performed by the BigFix Client when running an action. It is identified by the id of the action that triggered the download, the id of the computer that downloaded the file, and the hash of that file.
This information is kept for a limited time, which can be configured.

This inspector, available starting from Version 11.0.6, is supported on the BigFix Explorer and Web Reports.

# action of &lt;bes peer download&gt; : bes action

Returns the BES action object associated with the peer download.

{% qna %}
Q: ids of actions of bes peer downloads
A: 400000707
A: 400000704
{% endqna %}

# action id of &lt;bes peer download&gt; : integer

Returns the ID of the action that triggered the download.

{% qna %}
Q: action ids of bes peer downloads
A: 400000707
A: 400000704
{% endqna %}

# downloader computer id of &lt;bes peer download&gt; : integer

Returns the computer ID of the BigFix Client that downloaded the file.

{% qna %}
Q: downloader computer ids of bes peer downloads
A: 70002902
A: 70002908
{% endqna %}

# database id of &lt;bes peer download&gt; : integer

In the Web Reports context, this inspector returns the numeric ID of the "database" (actually a datasource) in which the peer download record resides.

{% qna %}
Q: database ids of bes peer downloads
A: 2307490701
{% endqna %}

# database name of &lt;bes peer download&gt; : string

In a Web Reports context, this inspector returns the name of the "database" (actually a datasource) in which the peer download record resides.

{% qna %}
Q: database names of bes peer downloads
A: database
{% endqna %}

# hash of &lt;bes peer download&gt; : string

Returns the hash of the downloaded file. Depending on the environment configuration, the returned hash will be SHA1 or SHA256.

{% qna %}
Q: hashes of bes peer downloads
A: 82c7fe6af30bb71394196216fbc932d10758c965
A: 7aeca16948b677b4b225be75eefecf23557f5870
{% endqna %}

# report time of &lt;bes peer download&gt; : time

Returns the time of the BigFix Client report that described the peer download event.

{% qna %}
Q: report times of bes peer downloads
A: Sat, 10 Jan 2026 21:27:34 +0000
{% endqna %}

# peer flag of &lt;bes peer download&gt; : boolean

Returns `True` if the file was successfully downloaded from a peer host. Returns `False` if the file was downloaded from a Relay.

{% qna %}
Q: peer flags of bes peer downloads
A: False
A: True
{% endqna %}

# size of &lt;bes peer download&gt; : integer

Returns the size in bytes of the file associated with the peer download.

{% qna %}
Q: sizes of bes peer downloads
A: 1208576
A: 1048576
{% endqna %}

# source host of &lt;bes peer download&gt; : string

Returns the hostname or IP address of the PeerNest computer that provided the file.

{% qna %}
Q: source hosts of bes peer downloads
A: 10.50.206.15
A: 10.20.77.155
{% endqna %}

# subnet of &lt;bes peer download&gt; : string

Returns the subnet of the peer that performed the peer download.

{% qna %}
Q: subnets of bes peer downloads
A: 10.50.236.0/24
A: 10.10.203.0/24
{% endqna %}

# &lt;bes peer download&gt; = &lt;bes peer download&gt; : boolean

Compares two `bes peer download` objects and returns `True` if they are equal.

{% qna %}
Q: bes peer download whose (action id of it = 400000704) = bes peer download whose (action id of it = 400000704) 
A: True
{% endqna %}

# &lt;bes peer download&gt; < &lt;bes peer download&gt; : boolean

Returns True if the first `bes peer download` object is less than the second one. The objects are ordered by `action id` first, `downloader computer id` second, and `hash` last.

{% qna %}
Q: bes peer download whose (action id of it = 400000704) < bes peer download whose (action id of it = 40000707) 
A: True
{% endqna %}

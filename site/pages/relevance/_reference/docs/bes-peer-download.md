# type: bes peer download

This inspector, available starting from Version 11.0.6, is available on the BigFix Explorer and Web Reports.
It returns information regarding files that were downloaded by the BigFix Client via the PeerNest feature of the BigFix infrastructure.
This information is kept for a limited time, which can be configured.

A `bes peer download` represents the download of one or more files by the BigFix Client via the PeerNest feature.

It represents a prefetch event if the download of a file was triggered by the execution of a BigFix action containing a `prefetch` instruction.
In this case, it is identified by: the id of the action that triggered the download, the id of the computer that downloaded the file, and the hash of that file.

It represents a site gather event if the download of one or more files was triggered by a site gather.
In this case, it is identified by: the id of the gathered site, the site version, and the id of the computer that gathered that site.

# action of &lt;bes peer download&gt; : bes action

Returns a `bes action` representing the BigFix action that triggered the peer download of a file. This property is only defined for downloads whose prefetch flag is `true`.

{% qna %}
Q: ids of actions of bes peer downloads whose (prefetch flag of it = true)
A: 400000707
A: 400000704
{% endqna %}

# action id of &lt;bes peer download&gt; : integer

Returns the ID of the action that triggered the peer download of a file. This property is only defined for downloads whose prefetch flag is `true`.

{% qna %}
Q: action ids of bes peer downloads whose (prefetch flag of it = true)
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

# gather flag of &lt;bes peer download&gt; : boolean

Returns `True` if the peer download was triggered by the gathering of a site.

{% qna %}
Q: gather flags of bes peer downloads
A: False
A: True
{% endqna %}

# hash of &lt;bes peer download&gt; : string

Returns the hash of the downloaded file. Depending on the environment configuration, the returned hash will be SHA1 or SHA256. This property is only defined for downloads whose prefetch flag is `true`.

{% qna %}
Q: hashes of bes peer downloads whose (prefetch flag of it = true)
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

# prefetch flag of &lt;bes peer download&gt; : boolean

Returns `True` if the peer download was triggered by an action.

{% qna %}
Q: prefetch flags of bes peer downloads
A: True
A: False
{% endqna %}

# site of &lt;bes peer download&gt; : bes site

Returns a `bes site` object representing the BigFix site gathered by the peer download. This property is only defined for downloads whose gather flag is `true`.

{% qna %}
Q: names of sites of bes peer downloads whose (gather flag of it = true)
A: ActionSite
A: UpgradeFixletSite
{% endqna %}

# site id of &lt;bes peer download&gt; : integer

Returns the ID of the site gathered by the peer download. This property is only defined for downloads whose gather flag is `true`.

{% qna %}
Q: site ids of bes peer downloads whose (gather flag of it = true)
A: 8589934756
A: 2307487073
{% endqna %}

# site version of &lt;bes peer download&gt; : integer

Returns the version of the site gathered by the peer download. This property is only defined for downloads whose gather flag is `true`.

{% qna %}
Q: site versions of bes peer downloads whose (gather flag of it = true)
A: 200
A: 227
{% endqna %}

# size of &lt;bes peer download&gt; : integer

Returns the size in bytes of the file or files retrieved by the peer download.

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

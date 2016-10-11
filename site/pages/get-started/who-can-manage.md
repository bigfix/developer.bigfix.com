---
title: User Permissions and Guidelines
---

Before starting to develop your custom BigFix solution, ensure you read the information provided in these topics.
They explain which are the user requirements and how to share your content with other operators.
{% section %}

## Who can create custom content?

Custom content can be created by:

* Master operators (MO).
* Non-master operators (NMO) authorized with following [permissions](http://www.ibm.com/support/knowledgecenter/SSQL82_9.5.0/com.ibm.bigfix.doc/Platform/Console/Dialogs/console_operator_details_tab.html ) set to **YES**:
   * **Custom Content** for creating any kind of Custom Content
   * **Can Submit Query** for running the [REST API Query](../rest-api/api/bigfix_query.html) or the [BigFix Query WebUI App]
   * **Can use REST API** for using the [REST API](../rest-api/) and the [Web Reports API](../other/web-reports-api/)
   * **Can use WebUI** for using the WebUI web-base interface

{% endsection %}
{% section %}

## Where is the custom content stored?

By default the custom content is saved to the **All contents** domain in one of the
following sites:

* The Master Action site, which is the default for the master operator.
* The specific operator's site, which is the default for non-master operators.
* A Custom site, for master operators and non-master operators who are authorized to access the site with write permission by the master operator.

As a best practice, avoid saving new content to the *All contents* domain. Instead, 
save it to the domain in which that custom content will be used.

{% endsection %}

## Who can access my custom content?

The list of operators that can access custom content depends on the site where
that custom content is stored.

* Custom content stored in the Master Action site can be accessed by all master operators.
* Custom content stored in a specific operator site can be accessed by that operator and by all master operators.
* Custom content stored in a Custom site can be accessed by all the operators that are authorized by a master operator in the Custom site definition.

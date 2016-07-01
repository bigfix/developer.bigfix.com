---
title: Who Can Manage Custom Content
---

{% section %}

The generic term **content** can represent:

* Data to distribute to targets.
* Instructions or queries to run on targets.
* Information retrieved from targets.

Depending on your needs and objectives, you can decide to use only the content available by default from the external
content sites that you are licensed for, or you can decide to create your custom BigFix implementation by
*copying and editing existing content* or creating new contents from scratch.

For example, if you want to manage a proprietary application through BigFix, you
create custom content to deploy, manage, and monitor it.

In general, the content gathered from external content sites consists of [Fixlets](/get-started/custom-content/fixlet-structure.html), 
[tasks](/get-started/custom-content/task-structure.html), [analyses](/get-started/custom-content/analysis-structure.html), [baselines](/get-started/custom-content/baseline-structure.html), and dashboards. Click the content type to learn about its structure and which parts of it you can customize.

{% endsection %}
{% section %}

## Who can create custom content?

Custom content can be created by:

* Master operators (MO).
* Non-master operators (NMO) authorized by a master operator using the [Custom Content](http://www-01.ibm.com/support/knowledgecenter/SS6MER_9.2.0/com.ibm.tivoli.tem.doc_9.2/Platform/Console/Dialogs/console_operator_details_tab.html) attribute.

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

# Who can access my custom content?

The list of operators that can access custom content depends on the site where
that custom content is stored.

* Custom content stored in the Master Action site can be accessed by all master operators.
* Custom content stored in a specific operator site can be accessed by that operator and by all master operators.
* Custom content stored in a Custom site can be accessed by all the operators that are authorized by a master operator in the Custom site definition.

---
title: The Action Script Language
---

{% section %}

The scope of the Action Script language is to issue commands, named **actions**, from within Fixlets 
and tasks on relevant clients to fix the problem identified by the Applicability Relevance clause.

<p>In a Fixlet or in a task message you can specify an *action script* including one or more actions. 
These actions will be run in sequence on relevant clients when the console operator clicks 
**Take action** in the Fixlet or in the task entry on the BigFix console.
If an action fails running, the subsequent actions will not run and the processing will stop.
 
For this reason, it is very important to use error prevention methods in action scripts.</p> 


<p>One of the biggests strength of the Action Script language is the ability to use relevance language 
expressions to implement variables within actions. This ability, named [substitution](/action-script/guide/substitution.html), 
allows you to customize an action for each specific agent where the action runs, for example by resolving the local 
installation path of a proprietary application.</p>

<p>The information about the Action Script Language is divided into the following areas:

<dl>
  <dt>**[Guide](./guide/)**</dt>
  <dd>Where you find the generic concepts that apply to the action script language.</dd>
  <dt>**[Reference](./reference/)**</dt>
  <dd>Which contains information about all the available statements.</dd>
</dl>

{% endsection %}

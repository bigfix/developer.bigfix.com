---
title: The Action Script Language
---

{% section %}

The scope of the Action Script language is to issue commands to remediate target clients from
within Fixlets and tasks.

<p>An Action Script is made by a set of actions that a Fixlet author can include in a Fixlet message 
and that are run in sequence to fix a given problem identified by the Fixlet relevance clause. 
If an error occurs in one line of an action script, the script terminates immediately and the 
rest of the lines will not run. 
Because of this, it’s very important to use error prevention methods in action scripts.</p> 

<p>While the Fixlet relevance is evaluated immediately on each target to determine whether it is 
relevant, the action script, instead, runs locally on relevant clients when the console operator 
clicks **Take action** in the Fixlet or task entry on the console.</p>

<p>Since a problem is typically discovered by examining a client machine with BigFix Inspectors, you might 
need to use the same relevance expressions, or part of them, within the action script to drive to the solution. 
In [Using Substitution](/action-script/guide/substitution.html) you will learn how to incude inspectors in the action script.</p> 

<p>Information about the action script language is divided into the following areas:

<dl>
  <dt>[Guide](./guide/)</dt>
  <dd>Where you find the generic concepts that apply to the action script language.</dd>
  <dt>[Reference](./reference/)</dt>
  <dd>Which contains information about all the available statements.</dd>
</dl>

{% endsection %}

---
title: Action Script
---

The scope of this language is to issue commands to remediate target clients from
within Fixlets and tasks. 
After a Fixlet identifies a potential problem on a computer, it offers to fix it with
an IBM BigFix shell command, called an `action script`. The most powerful method to create
an action script is the IBM BigFix Action Language because it integrates tightly with the
relevance engine. 


Many action commands allow or require parameters. Those parameters can either be hardcoded 
values or relevance expressions, named **substitution variables**, that are evaluated 
at runtime on relevant agents when the console operator clicks **Take action** in the Fixlet 
or task entry on the console.


By using substitution variables you can create scripts that are finely targeted and highly 
flexible. The exact relevance expression that triggered the action can be used in your action
script, ensuring a perfect match between the problem and the correction.

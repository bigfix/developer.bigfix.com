---
title: Use relevance to create a computer group
---

In this scenario, an existing relevance for a single property is used to create
an automatic group that contains any system that has the BigFix server
or relay installed.

This example uses the BigFix console and the Fixlet Debugger to test the
Relevance.

<ol>
<li>On the BigFix console, select the **All Content** domain.</li>

<li>Click the **Computers** node on the displayed navigation tree.</li>

<li>Right-click the retrieved properties column headings to display the Column Picker.</li>

<li>Click **Manage Properties** at the bottom of the Column Picker window. The Manage Properties Window opens.</li>

<li>In the left pane, expand the **By Site** node.</li>

<li>Click the **BES Support** site.</li>

<li>In the right pane, scroll down and click the **BES Relay Installed Status** property.
  <p>![Manage Properties Dialog](/static/img/example-group-1.png)</p>
</li>

<li>In the Relevance window, select the Relevance statement (CTRL+A) and copy it.</li>

<li>Click **Cancel** to close the Manage Properties window.</li>

<li>Open the Fixlet Debugger by selecting **Start > All Programs > BigFix > BigFix Fixlet Debugger.**</li>

<li>Select the (**qna**) tab.</li>

<li>Paste the Relevance statement that was copied in **Step 8** to this tab. Ensure that you add `Q:` to the start of the statement.
{% qna %}
Q: if exists relay service then "Yes - " & state of service "BESRelay" else if exists main gather service then "Main BES Server" else "Not Installed"
{% endqna %}
</li>

<li>Evaluate the query. You should see the response *Main BES Server* displayed.
  <p>![Fixlet Debugger Dialog](/static/img/example-group-2.png)</p>
  <p>To create a group, you must develop a Relevance query that evaluates to `True`. The following steps take you through this process.</p>
</li>

<li>Copy the first `if` expression from the statement that you just evaluated in **Step 13** to a new line. It is recommended that when creating Boolean expressions, you use parentheses to define the expressions. Add parentheses around this expression:
{% qna %}
Q: (exists relay service)
{% endqna %}
This statement checks to see if the BigFix relay service is installed on the endpoint. You are not checking the status of the service with this statement; only if the service is installed.
</li>

<li>At the end of the statement that you created in **Step 14**, add OR to force the BigFix client to evaluate the second statement if the first statement is False. Add open and closed parentheses after the OR.
{% qna %}
Q: (exists relay service) OR ()
{% endqna %}
</li>

<li>Copy the nested `if` expression from the statement that you evaluated in **Step 13** and paste it inside the blank parentheses in the expression that you created in **Step15**.
{% qna %}
Q: (exists relay service) OR (exists main gather service)
{% endqna %}
<p>The OR expression checks to see if the Main Gather service is installed. This service is installed on the BigFix server, so you are now checking to see if the endpoint is a BigFix relay or a server.</p>
</li>

<li>Evaluate the query. The query should respond with `True`.
<p>![Fixlet Debugger Dialog](/static/img/example-group-3.png)</p>
<p>You now have the required Relevance to create the wanted automatic group. This group contains the Infrastructure systems or those endpoints that have either the relay service or the main gather service installed.</p>
</li>


<li>Switch to the BigFix console.</li>

<li>From the menu, select **Tools > Create New Automatic Computer Group**. The create New Automatic Computer Group window is displayed.
<p>![Create Group Dialog](/static/img/example-group-4.png)</p>
</li>

<li>Enter **Infrastructure Systems** for the **Group name** field.</li>

<li>Leave the **Create in site** and **Create in Domain fields** at the default value. In the bottom drop-down box, change the value from **Computer Name** to **Relevance Expression**.
<p>![Create Group Dialog](/static/img/example-group-5.png)</p>
</li>

<li>Click **Edit Relevance**. The Edit Relevance window opens.</li>

<li>In the Edit Relevance window, remove any current Relevance, copy the Relevance expression that you evalutated in **Step 17** and paste it to this window.
<p>![Edit Relevance Dialog](/static/img/example-group-6.png)</p>
</li>

<li>Click **OK** to save the Relevance and close this window.</li>

<li>Click **Create** to create the group.
<p>Within the BigFix console, you now see the group details, not the resulting Relevance for the group.</p>
</li>

<li>To create a group of non-infrastructure systems, you can create a custom copy of this group with a new name and change the condition by completing the following steps:
  <ol>
  <li>Change the condition of the Relevance check from **is true** to **is false**.</li>
  <li>Modify the Relevance query itself:
  {% qna %}
  Q: (NOT exists relay service) AND (NOT exists main gather service)
  {% endqna %}
  </li>
  <li>Use Group Membership by stating that any endpoint that is not a member of the **Infrastructure Systems** group is a member of the non-infrastructure group. Because there are only two potential conditions for the original group, true or false, this action ensures that any endpoint that is not a member of the group is added to the non-infrastructure group.</li>
  </ol>
</li>
</ol>

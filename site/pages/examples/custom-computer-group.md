---
title: Use relevance to create a computer group
---

In this scenario, an existing relevance for a single property is used to create
an automatic group. The group will contain any system that has the BigFix server
or relay installed.

This exercise uses the BigFix console along with the Fixlet Debugger to test the
Relevance.

<ol>
<li>On the BigFix console select the **All Content** domain.</li>
<li>Click the **Computers** node on the displayed navigation tree.</li>
<li>Right-click the retrieved properties column headings to display the Column Picker.</li>
<li>Click **Manage Properties** at the bottom of the Column Picker window. This action displays the Manage Properties Window.</li>
<li>In the left window, expand the **By Site** node.</li>
<li>Click the **BES Support** site.</li>
<li>In the right window, scroll down and click the **BES Relay Installed Status** property.
  <p>![Manage Properties Dialog](/static/img/example-group-1.png)</p>
</li>
<li>In the Relevance window, select the Relevance statement (CTRL+A) and copy it.</li>
<li>Click **Cancel** to close the Manage Properties window.</li>
<li>Open the Fixlet Debugger by selecting **Start > All Programs > BigFix > BigFix Fixlet Debugger.**</li>
<li>Select the (**qna**) tab.</li>
<li>Paste the Relevance statement that was copied in **Step 9** to this tab. Ensure that you add `Q:` to the start of the statement.

{% qna %}
Q: if exists relay service then "Yes - " & state of service "BESRelay" else if exists main gather service then "Main BES Server" else "Not Installed"
{% endqna %}
</li>
<li>Evaluate the query. You should see the response *Main BES Server* displayed.
  <p>![Fixlet Debugger Dialog](/static/img/example-group-2.png)</p>
  <p>To create a group, you need to develop a Relevance query that evaluates to `True`. The following steps take you through this process.</p>
</li>

<li>Copy the `if` expression from the statement that you copied in step 12 to a new line. It is recommended that when creating Boolean expressions, you use parentheses to define the expressions. Add parentheses around this expression:

{% qna %}
Q: (exists relay service)
{% endqna %}

This statement checks to see whether the BigFix relay service is installed on the endpoint. You are not checking the status of the service with this statement, only if the service is installed.</li>

<li>Copy the nested `if` expression from the statement that you copied in step 12.</li>
<li>At the end of the statement that you created in Step 14, add OR. This action forces the BigFix client to evaluate the second statement if the first statement is False. Add open and closed parentheses after the OR.

{% qna %}
Q: (exists relay service) OR ()
{% endqna %}
</li>
<li>Paste the copied phrase from Step 15 inside the blank parentheses.

{% qna %}
Q: (exists relay service) OR (exists main gather service)
{% endqna %}

</li>

The OR expression checks to see whether the Main Gather service is installed. This service is installed on the BigFix server, meaning that you are now checking to see whether the endpoint is either a BigFix relay or a server.</li>

<li>Evaluate the query. The query should respond with `True`.
<p>![Fixlet Debugger Dialog](/static/img/example-group-3.png)</p>
</li>

<li>Copy the entire statement.
<p>You now have the required Relevance to create the wanted automatic group. This group is the Infrastructure systems or those endpoints that have either the relay service or the main gather service installed.</p></li>

<li>Switch to the BigFix console.</li>
<li>From the menu, select **Tools > Create New Automatic Computer Group**. The create New Automatic Computer Group window is displayed.
<p>![Create Group Dialog](/static/img/example-group-4.png)</p>
</li>

<li>Enter **Infrastructure Systems** for the **Group name** field.</li>
<li>Leave the **Create in site** and **Create in Domain fields** at the default value. For the bottom drop-down box, change the value from **Computer Name** to **Relevance Expression**.
<p>![Create Group Dialog](/static/img/example-group-5.png)</p>
</li>

<li>Click **Edit Relevance**. The Edit Relevance window is displayed.</li>
<li>In the Edit Relevance window, remove any current Relevance and paste the Relevance expression that you created in Step 18 to this window.
<p>![Edit Relevance Dialog](/static/img/example-group-6.png)</p>
</li>

<li>Click **OK** to save the Relevance and close this window.</li>
<li>Click **Create** to create the group.
<p>Within the BigFix console, you now see the group details, not the resulting Relevance for the group.</p></li>

<li>To create a group on non-infrastructure systems, you can create a custom copy of this group with a new name and change the condition per the following steps:

  <ol>
  <li>Change the condition of the Relevance check from **is true** to **is false**.</li>
  <li>Modify the Relevance query itself:
  {% qna %}
  Q: (NOT exists relay service) AND (NOT exists main gather service)
  {% endqna %}
  </li>
  <li>Use Group Membership by stating that any endpoint that is not a member of the **Infrastructure Systems** group is a member of the non-infrastructure group. As there are only two potential conditions for the original group, true or false, this action ensures that any endpoint that is not a member of the group is added to the non-infrastructure group.</li>
  </ol>
</li>
</ol>

---
title: Creating a Custom Action
---

You can create custom actions to fix specific problems or address issues across your
network that are not covered by the standard content.

To create a custom action:

1. Log on to the BigFix Console as a Master Operator.

2. Select **Tools > Take Custom action**.

3. In the **Take action** dialog provide a **Name** for your custom action. The value in this field can be sorted and filtered, keep it mind when defining your naming convention.

4. The Preset pull-down menu allows you pick a preset customized action. These are the the operations that you can run against a preset action:
 * **Preset:** Select a preset from the pull-down menu.
 * **Show only personal presets:** Check this box to filter the list of presets to just your personal ones.
 * **Save Preset:** Save the current set of action options for later use. A check box below that lets you save it as a public or private preset.
 * **Delete Preset:** Removes this preset from the selectable list.

5. Clicking on the different tabs you can define and customize the preset action:

 * **Target:** Select the targets from the provided list, or use properties or a specific list of computers to target the action.
 * **Execution:** Specify the deployment options and constraints, including repeated application and failure recovery.
 * **Users:** Determine how this action will respond to the presence or absence of users.
 * **Messages:** Provide a message to precede and accompany the action.
 * **Offer:** Create an action offering, allowing the user to choose whether or not to apply the action.
 * **Post-action:** Describe what actions need to be done to complete the action, including restarts or shutdowns.
 * **Applicability:** Allows you to override the original action relevance.
 * **Success Criteria:** Create specific criteria that you can use to determine if your action was successful.
 * **Action Script:** This tab allows you to create or modify an action script.

6. When you completed to customize the custom action and you are ready to deploy it, click **OK**.

Your custom action will be distributed to all the computers that have been selected or targeted. 
The actions will be applied using whatever constraints and schedules that you have specified.

You can also create actions when you Create Tasks or Create Fixlets.

**Note:** The original action included in the Fixlet or in the task is not overwritten by your custom action.


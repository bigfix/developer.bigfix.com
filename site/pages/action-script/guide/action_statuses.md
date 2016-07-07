---
title: Action Status Messages
---

Actions might report the following statuses back up to the BigFix Server while processing on the client: 

<dl>
   <dt>**Not Reported**</dt>
   <dd>No report on this action yet. No report has yet been received from the endpoint for the action taken. We cannot confirm if the action has been propagated, mirrored, gathered, processed, or reported until this status changes to something else.</dd>
   <dt>**Fixed**</dt>
   <dd>The action executed successfully. The TEM Client has run the action and the relevance is now false (meaning that not only did the action run, but it fixed the issue).</dd>
   <dt>**Running**</dt>
   <dd>The action is currently running.</dd>
   <dt>**Evaluating**</dt>
   <dd>Evaluating relevance and action constraints. The TEM Client has received the action targeted at it and will evaluate the action to see if it is time to run, the issue is still relevant, etc.</dd>
   <dt>**Completed**</dt>
   <dd>The action has completed and no other actions are required.</dd>
   <dt>**Failed**</dt>
   <dd>The action failed. The TEM Client has run the action and the issue is still relevant (even if the action ran successfully). Note that in the cases of patches, 'Failed' usually means the patch file was run, but failed to actually patch the computer.</dd>
   <dt>**Cancelled**</dt>
   <dd>The action was canceled by the user. The user clicked the "cancel" button when prompted with a message box.</dd>
   <dt>**Download Failed**</dt>
   <dd>A required download failed.</dd>
   <dt>**Locked**</dt>
   <dd>This computer is locked. The TEM Client is in the "Locked" state that prevents it from running actions until unlocked</dd>
   <dt>**Waiting**</dt>
   <dd>The TEM Client is waiting for some condition to actually run the action. The waiting conditions include: waiting for user input, waiting to retry after failure, waiting for a time/date range, waiting for a distribution time, waiting for a user to login, and waiting until the custom constraints property becomes relevant.</dd>
      <ul>  
	  <li>Action has failed and is waiting before trying again.</li>
      <li>Waiting on action dependency.</li>
      <li>Waiting to run in specified time range.</li>
      <li>Waiting until the action start time.</li>
      <li>This computer is not licensed.</li>
      <li>Waiting to satisfy temporal distribution time constraint.</li>
      <li>Waiting for active user condition.</li>
      </ul>	  
   </dd>
   <dt>**Pending Downloads**</dt>
   <dd>Waiting for downloads to be mirrored. The TEM Client is waiting to receive the complete file. This state will persist until the download makes it to the TEM Server -> TEM Relay -> TEM Client.</dd>
   <dt>**Pending Restart**</dt>
   <dd>Waiting for restart to complete action. The action was completed, but the action status of 'Fixed' or 'Failed' cannot be assessed until the computer is restarted.</dd>
   <dt>**Pending Message**</dt>
   <dd>Waiting for user to respond to message.</dd>
   <dt>**Pending Login**</dt>
   <dd>Waiting for user to log in.</dd>
   <dt>**Constrained**</dt>
   <dd>The computer doesn't meet the specified retrieved property constraint.</dd>
   <dt>**Expired**</dt>
   <dd>This action expired before it could be executed.</dd>
   <dt>**Postponed**</dt>
   <dd>The user postponed execution of this action.</dd>
   <dt>**Invalid Signature**</dt>
   <dd>The client was unable to verify the signature on this action.</dd>
   <dt>**Not Relevant**</dt>
   <dd>The Fixlet which this action addresses is not relevant on this machine. Before running the action, the TEM Client checked the relevance for the action and it is no longer true.</dd>
   <dt>**Pending Offer Acceptance**</dt>
   <dd>Waiting for user to accept this offer.</dd>
   <dt>**Offers Disabled**</dt>
   <dd>No user is able to accept this offer.</dd>
   <dt>**Disk Limited**</dt>
   <dd>The download size exceeds the maximum value set in the client setting _BESClient_Download_PreCacheStageDiskLimitMB, which can be modified through the Edit Computer Settings dialog.</dd>
   <dt>**Disk Free Limited**</dt>
   <dd>The remaining disk space is smaller than the value set in the client setting _BESClient_Download_MinimumDiskFreeMB. In order for the download to complete, space must be cleared on the endpoint, or the client setting must be changed using the Edit Computer Settings dialog.</dd>
   <dt>**Hash Mismatch**</dt>
   <dd>The download completed but the file failed a hash comparison. To troubleshoot, investigate the network between the agent and its parent to eliminate network problems.</dd>
   <dt>**Transcoding Error**</dt>
   <dd>The action failed transcoding from the deployment codepage.</dd>
   <dt>**Pending Client Restart**</dt>
   <dd>Waiting for client restart to complete action.</dd>
   <dt>**<i>error</i>**</dt>
   <dd><ul>
	 <li>An unknown error occurred.</li>
	 <li>The Fixlet context is missing or invalid.</li>
     <li>Invalid site context. The Fixlet site may no longer exist.</li>
     <li>Invalid action content: the action is empty.</li>
     <li>Invalid action content: the action type is invalid.</li>
     <li>Invalid action content: the action script contains a syntax error.</li>
     <li>This action contained invalid download syntax.</li>
     <li>The download manager encountered a configuration error.</li>
     <li>This action was not executed for unknown reasons.</li>
     <li>This action was run but could not be restarted due to a client UI translation error.</li>
     <li>This action was not executed due to an error encountered while translating the client UI elements.</li>
     <li>This action was not executed due to an error showing the client UI.</li>
     <li>This action failed to complete because the Management Extender plugin reported an error.</li>
     <li>This action was not executed because the operator who created it is not an administrator of this client</li>
   </ul></dd>
</dl>

**Note:** After an action expires, the action status is no longer updated.
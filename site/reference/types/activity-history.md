# type: activity history

The &lt;activity history&gt; inspectors keep track of the activity of a single logged-on user. You may iterate over all logged-on users and get the history for each user separately. User information is purged at log off and power off/client off, even if the user immediately logs back in. These inspectors retrieve information within a tracking window (defaulting to 14 days) or, if the window is still open, the start of that window. Information is in the form of a list of (interval, state) tuples. The first element of the list is the current state of the system. The event lists are fetched from the client each time &#39;activity history&#39; is referenced, so you should avoid referencing these inspectors more than once in a relevance statement. Note: Activity tracking only works while the Client UI is running. These inspectors only work with Windows 2000 or better.

# user interval &lt;activity history&gt; : system power interval

No documentation exists.

# user interval of &lt;activity history&gt; : system power interval

Returns a power interval (containing a time range and a power state, such as standby or idle) corresponding to the specified user activity history.

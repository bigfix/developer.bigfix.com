# type: fileset part

The &lt;fileset&gt; object has a property indicating a subset of files, called the &lt;fileset part&gt;. The three subsets are: root, share, and usr.

Each &lt;fileset part&gt; has its own state, and the interaction between the parts determines the overall &lt;fileset&gt; state.

# state of &lt;fileset part&gt; : string

Returns, as a string, the state of a fileset on AIX systems. Possible values returned by this inspector are: APPLYING, APPLIED, COMMITTING, COMMITTED, REJECTING, BROKEN, DEINSTALLING, APPLY-HOLD, COMMIT-HOLD, OBSOLETE, EFIXLOCKED, UNKNOWN.

If the state doesn’t match the state of any other &lt;fileset part&gt;, the state of &lt;fileset&gt; property is CONFLICTING.

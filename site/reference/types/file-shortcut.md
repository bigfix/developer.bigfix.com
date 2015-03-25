# type: file shortcut

Shortcuts to files can be constructed in the file system. The shortcut contains some additional properties that can be inspected.

# argument string of &lt;file shortcut&gt; : string

Returns the arguments that are passed to the application to which the shortcut points when the user attempts to open the shortcut.

# icon index of &lt;file shortcut&gt; : integer

The index number of the icon in the file containing the icon associated with the shortcut.

# icon pathname of &lt;file shortcut&gt; : string

The full pathname of the file containing the icon associated with the shortcut.

# pathname of &lt;file shortcut&gt; : string

Returns the full pathname of the object to which the shortcut points.Example: pathname of parent folder of system folder = pathname of windows folder - Checks that the system folder is located inside the Windows folder.

# start in pathname of &lt;file shortcut&gt; : string

Returns the full pathname the system sets the current directory when the user launches the shortcut.

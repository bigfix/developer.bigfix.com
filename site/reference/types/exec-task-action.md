# type: exec task action

The &lt;exec task action&gt; inspectors deal with Windows Exec Actions, which are specified by tasks triggered by various events like computer state changes or scheduled times. The Exec Action causes a program to run. For more information, see Exec Action at the MSDN site.

# argument string of &lt;exec task action&gt; : string

Returns the arguments associated with the command-line operation referenced by the exec task action.

# path of &lt;exec task action&gt; : string

Returns the path to the executable file specified in the task action.

# working directory of &lt;exec task action&gt; : string

Returns the the directory containing either the executable file or files used by the executable specified in the task action.

# task action

The &lt;task action&gt; inspectors grant access to the set of scheduled task actions. Actions have an ID and a type. The action types include starting COM handles, executing programs,  sending emails and displaying messages.

# id of <task action>

Returns the user-defined identifier for the specified action.

# type of <task action>

Returns the type of the specified task action. This is one of the following types:com handler: start a custom COM handler.email: send an email.exec: perform a command-line operation such as running a script, launching an executable, or, if the name of.

# <task action> as com handler task action

Casts the specified task action as a com handler task action.

# <task action> as email task action

Casts the specified task action as an email action.

# <task action> as exec task action

Casts the specified task action as an executable action.

# <task action> as show message task action

Casts the specified task action as a message display action.

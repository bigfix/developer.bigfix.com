# If, Then, Else

If-then-else clauses have the form:

````
if <conditional-expression> then <expression1> else <expression2>
````

Both `<expression1>` and `<expression2>` must have the same type, and
`<conditional- expression>` must be a singular boolean.

If `<conditional-expression>` is true, then `<expression1>` is evaluated and
returned; otherwise `<expression2>` is evaluated and returned.

If-then-else clauses have been implemented as late-binding, so potential missing
inspectors on the branch not taken are ignored. This makes it safe to write
cross-platform expressions without worrying about throwing errors for incorrect
OS-specific Inspectors. For instance, you can write:

{{#example}}
Q: if name of operating system contains "Win" then name of application "conf.exe" of registry else "conf.exe"
A: conf.exe
{{/example}}

On a non-Windows OS, this expression will execute the `else` expression and
avoid an attempt to inspect a non-existent registry.

If-statements can be useful for reporting user-defined errors:

{{#example}}
Q: if (year of current date as integer < 2006) then "Still good" else error "Expired"
E: User-defined error: Expired
{{/example}}

This expression throws a user-defined error if the argument is false.

{{#example}}
Q: if (name of operating system = "WinXP") then "wired" else if (name of operating system ="WinNT") then "tired" else "expired"
A: wired
{{/example}}

This expression does a three-way test of the operating system.

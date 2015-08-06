# type: cryptography

This is a global object that has several properties that expose the state of the cryptography controls. BigFix uses cryptographic functions throughout the BigFix Platform. Every time an operator logs in to BigFix, creates a new user, starts an action or subscribes to new content, authentication and signature routines are executed using cryptographic libraries based on the FIPS 140-2 standard.

# desired fips mode of &lt;cryptography&gt; : boolean

Returns `True` if the application (the client, console, or web reports, depending on the context) tried to enter FIPS 140-2 compliant mode.

# fips mode failure message of &lt;cryptography&gt; : string

Returns the error message returned by the cryptographic library if the application (the client, console, or web reports, depending on the context) tried to enter FIPS 140-2 compliant mode and failed.

# fips mode of &lt;cryptography&gt; : boolean

Returns `True` if the application (the client, console, or web reports, depending on the context) is operating in FIPS 140-2 mode (the mode provided by openssl). FIPS mode limits the set of ciphers and SSL protocols that can be used in the cryptographic library.

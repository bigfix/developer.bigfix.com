# type: cryptography

This is a global object that has several properties that expose the state of the cryptography controls. BigFix uses cryptographic functions throughout the BigFix Platform. Every time an operator logs in to BigFix, creates a new user, starts an action or subscribes to new content, authentication and signature routines are executed using cryptographic libraries including, if enabled, a dynamic module compliant with Federal Information Processing Standards (FIPS).

In this context, when we say a program is "operating in FIPS mode", we mean according to the 140 series of Federal Information Processing Standards (FIPS 140). This mode restricts the set of cryptographic ciphers and secure communication protocols (e.g. TLS) that can be used.

The library that BigFix uses to secure its communications and to operate in FIPS mode is OpenSSL.

# desired fips mode of &lt;cryptography&gt; : boolean

Returns `True` if the BigFix component tried to enter a FIPS compliant mode (any version).

# fips mode failure message of &lt;cryptography&gt; : string

Returns the error message returned by the cryptographic library if the BigFix component tried to enter a FIPS compliant mode and failed.

# fips mode of &lt;cryptography&gt; : boolean

Returns `True` if the BigFix component is operating in a FIPS mode (any version).

# fips_140_2 mode of &lt;cryptography&gt; : boolean

Returns `True` if the BigFix component is operating in FIPS 140-2 mode specifically.

{% qna %}
Q: fips_140_2 mode of cryptography
A: False
{% endqna %}

# fips_140_3 mode of &lt;cryptography&gt; : boolean

Returns `True` if the BigFix component is operating in FIPS 140-3 mode specifically.

{% qna %}
Q: fips_140_3 mode of cryptography
A: True
{% endqna %}

# version of &lt;cryptography&gt; : string

Returns the version string of the OpenSSL library in use.

{% qna %}
Q: version of cryptography
A: OpenSSL 1.0.1q-fips 3 Dec 2015
{% endqna %}

# type: x509 certificate

X.509 is a public key infrastructure standard, specifying formats for public key certificates and revocations. These inspectors interpret the certificate from a file in the PEM format. They can be used to analyze encryption credentials on decrypting relays or root servers.

# invalid after of &lt;x509 certificate&gt; : time

No documentation exists.

# invalid before of &lt;x509 certificate&gt; : time

Returns the date on which the certificate first becomes valid. This is useful for examining encryption certificates, where the &#39;invalid before date&#39; is the time when the encryption credentials were generated.

# issuer of &lt;x509 certificate&gt; : string

No documentation exists.

# public key algorithm of &lt;x509 certificate&gt; : string

No documentation exists.

# serial number of &lt;x509 certificate&gt; : string

No documentation exists.

# sha1 of &lt;x509 certificate&gt; : string

Returns the SHA1 hash of the given certificate, which uniquely identifies it.

# signature algorithm of &lt;x509 certificate&gt; : string

No documentation exists.

# subject common name of &lt;x509 certificate&gt; : string

No documentation exists.

# subject of &lt;x509 certificate&gt; : string

No documentation exists.

# version of &lt;x509 certificate&gt; : integer

No documentation exists.

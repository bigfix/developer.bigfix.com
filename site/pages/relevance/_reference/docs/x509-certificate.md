# type: x509 certificate

X.509 is a public key infrastructure standard, specifying formats for public key certificates and revocations. These inspectors interpret the certificate from a file in the PEM format. They can be used to analyze encryption credentials on decrypting relays or root servers.

# invalid before of &lt;x509 certificate&gt; : time

Returns the date on which the certificate first becomes valid. This is useful for examining encryption certificates, where the &#39;invalid before date&#39; is the time when the encryption credentials were generated.

# sha1 of &lt;x509 certificate&gt; : string

Returns the SHA1 hash of the given certificate, which uniquely identifies it.

# version of &lt;x509 certificate&gt; : integer

Returns a value (1, 2 or 3) that describes the version of the encoded certificate. 

# serial number of &lt;x509 certificate&gt; : integer

Returns the unique identifying number assigned by the CA. Normally, it is a positive integer no longer than 20 octets long (2<sup>160</sup>).

Non-conforming CAs may issue certificates with serial numbers that are zero, negative integers, or longer than the specified maximum, however.

# signature algorithm of &lt;x509 certificate&gt; : string

Returns the algorithm identifier used by the CA to sign the certificate. Signature algorithm descriptions can be found in [RFC5758](https://tools.ietf.org/html/rfc5758) and [RFC5480](https://tools.ietf.org/html/rfc5480) (which update [RFC3279](https://tools.ietf.org/html/rfc3279)), and [RFC4055](https://tools.ietf.org/html/rfc4055).

# issuer of &lt;x509 certificate&gt; : string

Returns the name of the entity that signed and issued the certificate. The issuer contains a non-empty distinguished name (DN).

For example, "C=US, ST=California, O=John Doe".

# not before of &lt;x509 certificate&gt; : time

Returns the beginning of the validity period of the certificate, encoded as differential to UTC time.

# invalid after of &lt;x509 certificate&gt; : time

Returns the end of the validity period of the certificate, encoded as differential to UTC time.

# subject of &lt;x509 certificate&gt; : string

Returns the entity associated with the public key. The subject contains a non-empty distinguished name (DN).

For example, "C=US, ST=California, O=John Doe".

# public key algorithm of &lt;x509 certificate&gt; : string

Returns the algorithm identifier used to generate the public key. Signature algorithm descriptions can be found in [RFC5758](https://tools.ietf.org/html/rfc5758) and [RFC5480](https://tools.ietf.org/html/rfc5480) (which update [RFC3279](https://tools.ietf.org/html/rfc3279)).

# subject common name of &lt;x509 certificate&gt; : string

Returns the entity associated with the public key. The subject contains a non-empty common name (CN).

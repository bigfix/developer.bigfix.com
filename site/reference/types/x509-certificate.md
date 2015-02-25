# x509 certificate

X.509 is a public key infrastructure standard, specifying formats for public key certificates and revocations. These inspectors interpret the certificate from a file in the PEM format. They can be used to analyze encryption credentials on decrypting relays or root servers.

# invalid before of [x509 certificate]

Returns the date on which the certificate first becomes valid. This is useful for examining encryption certificates, where the &#39;invalid before date&#39; is the time when the encryption credentials were generated.

# sha1 of [x509 certificate]

Returns the SHA1 hash of the given certificate, which uniquely identifies it.

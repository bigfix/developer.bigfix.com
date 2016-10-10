---
title: Shell script
---

This script is a simple Perl shell that allows you to retrieve a single relevance
evaluation. This example requires the **SOAP::Lite** module, version 0.71 or later. It
uses the **GetRelevanceResult** SOAP method.


```xml
use SOAP::Lite;
#arguments: [hostname] [username] [password] [relevance expression]
#hostname only, e.g. ’example.com’ rather than ’http://example.com/webreports’
my $host = $ARGV[0];
my $username = SOAP::Data->name(’username’ => $ARGV[1] );
my $password = SOAP::Data->name(’password’ => $ARGV[2] );
my $expr = SOAP::Data->name(’relevanceExpr’ => $ARGV[3] );
my $service = SOAP::Lite -> uri( ’http://’ . $host . ’/webreports?wsdl’ ) -> proxy( $host );
my $result = $service -> GetRelevanceResult( $expr, $username, $password );
if( $result->fault ) {
   print "faultcode: " . $result->faultcode . "\n";
   print "faultstring: " . $result->faultstring . "\n";
}
else {
   foreach my $answer ( $result->valueof( "//GetRelevanceResultResponse/a" ) ) {
     print $answer . "\n";
}
}
```

You pass four arguments to this script: host, username, password, and the
relevance expression that you want to evaluate. The host name is something like
```example.com```, denoting the location of your Web Reports server. After passing the
parameters to the SOAP module, a call is made to **GetRelevanceResult**. If there is
an error, it can be parsed here. Otherwise, the results of the relevance evaluation
(typically plural) are printed in a loop.

Add the following line at the top of the file to help with debugging:

```
use SOAP::Lite +trace => ’debug’;
```

The following line might be required to avoid a bug in **SOAP:Lite**:

```
$SOAP::Constants::DO_NOT_CHECK_CONTENT_TYPE = 1;
```

---
title: Create user example
---

This code creates a new user. All the required information about the new user is
embedded in the code:


```perl
use SOAP::Lite;

my $host = "http://localhost/webreports";

# The login credentials for an existing admin user
my $username = 'name';
my $password = 'password';

# The new user information
my $newUserLogin = 'new_admin';
my $newUserFullName = 'Mr. New User';
my $newUserPassword = 'new_password';
my $newUserRole = 'Administrator';

my $service = SOAP::Lite->uri( $host . '?wsdl' )->proxy( $host );
# this string includes embedded quotes by using backslash characters (\")
my $loginXML = "<h:RequestHeaderElement xsi:type=\"LoginHeader\" " .
" xmlns:h=\"http://schemas.example.com/webreports\
" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " .
" xmlns=\"http://schemas.example.com/webreports\
" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">" .
" <username>$username</username>" .
" <password>$password</password>" .
"</h:RequestHeaderElement>";

my $loginHeaders = SOAP::Header->type( 'xml' => $loginXML );

my $newUserInfo = SOAP::Data->name( 'user' => \SOAP::Data->value(
SOAP::Data->name( 'logonName' => $newUserLogin ),
SOAP::Data->name( 'fullName' => $newUserFullName ),
SOAP::Data->name( 'password' => $newUserPassword ),
SOAP::Data->name( 'role' => $newUserRole ) ) );

my $result = $service->CreateUser( $newUserInfo, $loginHeaders );
PrintResult( $result, "CreateUserResponse" );

sub PrintResult {
   my $result = shift;
   my $responseName = shift;
   
   if ( $result->fault ) {
      print "faultcode: " . $result->faultcode . "\n";
      print "faultstring: " . $result->faultstring . "\n";
   }
   else {
      print $result->result . "\n";
   foreach my $answer ( $result->valueof( "//$responseName/a" ) )
      { print $answer . "\n"; }
   }
}
```

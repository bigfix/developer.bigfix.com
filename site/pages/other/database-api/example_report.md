---
title: Example report generator
---

The following Perl script, with the appropriate dsn name and login supplied in the
DBI->connect line, accesses the database and print the contents of the four
principal views in HTML tables.

```

##
Example Perl cgi script which shows the contents of a Database
#

use strict;
use CGI;
use DBI;
use CGI::Carp qw(fatalsToBrowser);

$| = 1;

# Insert your own database details here
my $dbh = DBI->connect ("dbi:ODBC:bes_locke", "bigfix", "bigfix")
or die "unable to connect to db";

#-----------------------------------------------------------------------------------
# Create the HTML to output your report. Here, we refer to a computer named ’LOCKE’:
print "content-type: text/html\n\n";
print "<html><body>";
print "<h1>Contents of Database on LOCKE</h1>";

#.................................................
# Print out all column headings:
{
print "<h3>Column Headings</h3>";
print "<table width=100% bgcolor=#b0b0f0 border=1><tr>";
print "<td>ComputerID</td><td>Name</td>";
print "<td>Value</td><td>IsFailure</td></tr>";

# set up the SQL query:
my $query = "select ComputerID, Name, Value, IsFailure ";
$query .= "from BES_COLUMN_HEADINGS";
my $sth = $dbh->prepare($query);
$sth->execute();
my @row;
while(@row = $sth->fetchrow_array){
print "<tr><td>";
print join("</td><td>", @row);
print "</td></tr>";
}
print "</table>";
}

#.................................................
# Print out all relevant fixlets
{
print "<h3>Relevant Fixlets</h3>";
print "<table width=100% bgcolor=#f0b0b0 border=1>";
print "<tr><td>Sitename</td><td>ID</td>";
print "<td>ComputerID</td></tr>";

# set up the SQL query:
my $query = "select Sitename, ID, ComputerID from BES_RELEVANT_FIXLETS";
my $sth = $dbh->prepare($query);
$sth->execute();
my @row;
while(@row = $sth->fetchrow_array){
print "<tr><td>";
print join("</td><td>", @row);
print "</td></tr>";
}
print "</table>";
}

#.................................................
# Print out all actions
{
print "<h3>Actions</h3>";
print "<table width=100% bgcolor=#d080ff border=1>";
print "<tr><td>ActionID</td><td>ComputerID</td>";
print "<td>Name</td><td>Username</td><td>Start Time</td>";
print "<td>FixletID</td><td>Sitename</td><td>ActionStatus</td></tr>";

# set up the SQL query:
my $query = "select ActionID, ComputerID, Name, Username, StartTime, ";
$query .= "FixletID, Sitename, ActionStatus from BES_ACTIONS";
my $sth = $dbh->prepare($query);
$sth->execute();
my @row;
while(@row = $sth->fetchrow_array){
print "<tr><td>";
print join("</td><td>", @row);
print "</td></tr>";
}
print "</table>";
}

#.................................................
# Print out all known fixlets
{
print "<h3>Known Fixlets</h3>";
print "<table width=100% bgcolor=#b0f0b0 border=1>";
print "<tr><td>Sitename</td><td>ID</td><td>Name</td></tr>";

# set up the SQL query:
my $query = "select Sitename, ID, Name from BES_FIXLETS";
my $sth = $dbh->prepare($query);
$sth->execute();
my @row;
while(@row = $sth->fetchrow_array){
print "<tr><td>";
print join("</td><td>", @row);
print "</td></tr>";
}
}
print "</body></html>";

```
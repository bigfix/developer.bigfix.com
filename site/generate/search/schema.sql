create table PROPERTIES (
  SingularPhrase text not null,
  PluralPhrase text not null,
  IndexType text not null,
  DirectObjectType text not null,
  ResultType text not null,
  Markup text not null
);

create index PropertiesSingularPhrase on PROPERTIES (SingularPhrase);
create index PropertiesPluralPhrase on PROPERTIES (PluralPhrase);
create index PropertiesIndexType on PROPERTIES (IndexType);
create index PropertiesDirectObjectType on PROPERTIES (DirectObjectType);
create index PropertiesResultType on PROPERTIES (ResultType);

create table CASTS (
  ArgType text not null,
  Phrase text not null,
  ResultType text not null,
  Markup text not null
);

create index CastsArgType on CASTS (ArgType);
create index CastsPhrase on CASTS (Phrase);
create index CastsResultType on CASTS (ResultType);

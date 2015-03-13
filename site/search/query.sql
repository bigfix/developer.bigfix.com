select Markup, 0 as Priority from PROPERTIES where 
  SingularPhrase = $queryEqual or
  PluralPhrase = $queryEqual or
  IndexType = $queryEqual or
  DirectObjectType = $queryEqual or
  ResultType = $queryEqual
union
select Markup, 1 as Priority from CASTS where 
  ArgType = $queryEqual or
  Phrase = $queryEqual or
  ResultType = $queryEqual
union
select Markup, 2 as Priority from PROPERTIES where 
  SingularPhrase like $queryLike or
  PluralPhrase like $queryLike or
  IndexType like $queryLike or
  DirectObjectType like $queryLike or
  ResultType like $queryLike
union
select Markup, 3 as Priority from CASTS where 
  ArgType like $queryLike or
  Phrase like $queryLike or
  ResultType like $queryLike
order by Priority

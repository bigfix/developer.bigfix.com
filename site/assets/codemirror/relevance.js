/* global define */

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineMode("relevance", function() {
      
    var keywords = [
        'and',
        'as',
        'contains',
        'does not contain',
        'does not end with',
        'does not equal',
        'does not start with',
        'else',
        'ends with',
        'equals',
        'exist',
        'exist no',
        'exists',
        'exists no',
        'false',
        'if',
        'is',
        'is contained by',
        'is equal to',
        'is greater than',
        'is greater than or equal to',
        'is less than',
        'is less than or equal to',
        'is not',
        'is not contained by',
        'is not equal to',
        'is not greater than',
        'is not greater than or equal to',
        'is not less than',
        'is not less than or equal to',
        'it',
        'mod',
        'nil',
        'not',
        'nothing',
        'nothings',
        'null',
        'of',
        'or',
        'starts with',
        'then',
        'there do not exist',
        'there does not exist',
        'there exist',
        'there exist no',
        'there exists',
        'there exists no',
        'true',
        'whose'
    ];
  
    var operatorRegex = /^([+\/\-*&=<>]|mod\b)/i,
        numberRegex = /^[0-9]+\b/;
    
    var keywordsRegex = new RegExp("^((" + keywords
      .sort(function(a, b) {return b.length - a.length})
      .join(')|(')
      .replace(/\s+/g, '\\s+((a|an|the)\\s+)*')
      + "))\\b", 'i');
      
    var phraseRegex = new RegExp("^[a-zA-Z][a-zA-Z0-9_]*\\b");

    function tokenBase (stream, state) {
      var ch = stream.peek();
      
      if (state.instring) {
        if (ch == state.instring) {
          state.instring = false;
        }
        stream.next();
        return "string";
      } else if (ch == '"') {
        state.instring = ch;
        stream.next();
        return "string";
      } else if (stream.match(numberRegex)) {
          return "number";
      } else if (stream.match(operatorRegex)) {
        return "operator";
      } else if (stream.match(keywordsRegex)) {
        return "keyword";
      } else if (stream.match(phraseRegex)) {
        return "property";
      }
      stream.next();
    }

    return {
      startState: function () {
        return {};
      },
      token: function (stream, state) {
        return tokenBase(stream, state);
      }
    };
  });

  CodeMirror.defineMIME("text/relevance", "relevance");
});

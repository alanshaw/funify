var Tokenizer = require("tokenizer")

module.exports = function (cb) {
  var t = new Tokenizer(cb)

  t.addRule(/^"(?:(?:\\\n|\\"|[^"\n]))*?"?$/, "string1")
  t.addRule(/^'(?:(?:\\\n|\\'|[^'\n]))*?'?$/, "string2")
  t.addRule(/^\/\*[\s\S]*?\*\/$/, "comment1")
  t.addRule(/^\/\/.*?\n$/, "comment2")
  t.addRule(Tokenizer.whitespace)
  t.addRule(/^\b(?:var|let|for|if|else|in|class|fun|return|with|case|break|switch|export|new|while|do|throw|catch)\b$/, "keyword")
  t.addRule(/^\/(?:(?:\\\/|[^\/]))*?\/?$/, "regexp")
  t.addRule(/^[a-zA-Z_\$][a-zA-Z_\$0-9]*$/, "name")
  t.addRule(/^\d+(?:\.\d+)?(?:e[+-]?\d+)?$/, "number")
  t.addRule(/^[\(\)]$/, "parens")
  t.addRule(/^[{}]$/, "curly")
  t.addRule(/^[\[\]]$/, "square")
  t.addRule(/^[;.:\?\^%<>=!&|+\-,]$/, "punct")

  return t
}
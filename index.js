var tokenizer = require("./tokenizer")
  , through = require("through")

module.exports = function (file) {
  var t = null
  return through(function write (chunk) {
    var self = this

    if (!t) {
      t = tokenizer()
      t.on("token", function (token, type) {
        self.queue(type == "keyword" && token == "fun" ? "function" : token.toString())
      })
    }

    t.write(chunk)
  }, function end () {
    var self = this
    t.end(function () { self.queue(null) })
  })
}
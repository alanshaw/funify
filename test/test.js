var fs = require("fs")
  , funjs = require("../")
  , consoleStream = require("console-stream")

fs.createReadStream(__dirname + "/fixtures/hello.fjs", {encoding: "utf-8"}).pipe(funjs()).pipe(consoleStream())
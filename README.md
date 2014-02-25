funify [![Build Status](https://travis-ci.org/alanshaw/funify.png)](https://travis-ci.org/alanshaw/funify) [![Dependency Status](https://david-dm.org/alanshaw/funify.png?theme=shields.io)](https://david-dm.org/alanshaw/funify)
===
Browserify transform that turns funjs into js.

funjs is a language that compiles to javascript. The difference is that you declare functions with the keyword `fun` instead of `function`.

Here's some funjs:

```js
fun say (words) {
  console.log(words)
}
say("Hello funjs!")
```
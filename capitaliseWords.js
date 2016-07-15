/*

Challenge taken from www.codeeval.com:

CAPITALIZE WORDS
CHALLENGE DESCRIPTION:

Write a program which capitalizes the first letter of each word in a sentence.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

Hello world
javaScript language
a letter
1st thing

OUTPUT SAMPLE:

Print capitalized words in the following way.

Hello World
JavaScript Language
A Letter
1st Thing

*/

function capitalise(text){
  var words = text.split(" ");
  for (var i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = capitalise(line);
      console.log(answer_line);
    }
});

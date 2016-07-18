/*

Challenge taken from www.codeeval.com:

FIRST NON-REPEATED CHARACTER

CHALLENGE DESCRIPTION:

Write a program which finds the first non-repeated character in a string.

INPUT SAMPLE:

The first argument is a path to a file. The file contains strings.

For example:

yellow
tooth

OUTPUT SAMPLE:

Print to stdout the first non-repeated character, one per line.

For example:

y
h

*/

function firstNonRepeatedChar(text){
  for (var i = 0; i < text.length ; i++){
    if (text.indexOf(text[i]) === text.lastIndexOf(text[i])){
      return text[i];
    }
  }
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        var answer_line = firstNonRepeatedChar(line);
        console.log(answer_line);
    }
});

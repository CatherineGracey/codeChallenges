/*

Challenge taken from www.codeeval.com:

SUM OF DIGITS
CHALLENGE DESCRIPTION:

Given a positive integer, find the sum of its constituent digits.

INPUT SAMPLE:

The first argument will be a path to a filename containing positive integers, one per line. E.g.

23
496

OUTPUT SAMPLE:

Print to stdout, the sum of the numbers that make up the integer, one per line. E.g.

5
19

*/

function sumDigits(text){
  var output = 0;
  for (var i = 0; i < text.length; i++){
    output += parseInt(text[i]);
  }
  return output;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = sumDigits(line);
      console.log(answer_line);
    }
});

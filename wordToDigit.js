/*

Challenge taken from www.codeeval.com:

WORD TO DIGIT
CHALLENGE DESCRIPTION:


Having a string representation of a set of numbers you need to print this numbers.

All numbers are separated by semicolon. There are up to 20 numbers in one line. The numbers are "zero" to "nine"

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file is one test case. E.g.

zero;two;five;seven;eight;four
three;seven;eight;nine;two

OUTPUT SAMPLE:

Print numbers in the following way:

025784
37892

*/

function convertToDigit(text){
  var digit = "", words = text.split(";");
  var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for (var i = 0; i < words.length; i++){
    digit += digits.indexOf(words[i]);
  }
  return digit;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = convertToDigit(line);
      console.log(answer_line);
    }
});

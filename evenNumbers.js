/*

Challenge taken from www.codeeval.com:

EVEN NUMBERS
CHALLENGE DESCRIPTION:

Write a program which checks input numbers and determines whether a number is even or not.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

701
4123
2936

OUTPUT SAMPLE:

Print 1 if the number is even or 0 if the number is odd.

0
0
1

All numbers in input are integers > 0 and < 5000.

*/

function isItEven(number) {
  if (number % 2 === 0){
    console.log(1);
  } else {
    console.log(0);
  }
}
//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        var number = parseInt(line);
        isItEven(number);
    }
});

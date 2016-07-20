/*

FIBONACCI SERIES
CHALLENGE DESCRIPTION:

The Fibonacci series is defined as: F(0) = 0; F(1) = 1; F(n) = F(n–1) + F(n–2) when n>1. Given an integer n≥0, print out the F(n).

INPUT SAMPLE:

The first argument will be a path to a filename containing integer numbers, one per line. E.g.

5
12

OUTPUT SAMPLE:

Print to stdout, the fibonacci number, F(n). E.g.

5
144

*/

function getFibonacci(index){
  var fibonacci = [0, 1];
  for (var i = 2; i <= index; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci[index];
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        var number = getFibonacci(parseInt(line));
        console.log(number);
    }
});

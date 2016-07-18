/*

Challenge taken from www.codeeval.com:

N MOD M
CHALLENGE DESCRIPTION:

Given two integers N and M, calculate N Mod M (without using any inbuilt modulus operator).

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains two comma separated positive integers. E.g.

20,6
2,3

You may assume M will never be zero.

OUTPUT SAMPLE:

Print out the value of N Mod M

*/

function manualModulus(n, m){
  var whole = parseInt(n / m);
  var rem = n - (whole * m);
  return rem;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var values = line.split(",")
      var answer_line = manualModulus(parseInt(values[0]), parseInt(values[1]));
      console.log(answer_line);
    }
});

/*

Challenge taken from www.codeeval.com:

MULTIPLES OF A NUMBER
CHALLENGE DESCRIPTION:

Given numbers x and n, where n is a power of 2, print out the smallest multiple of n which is greater than or equal to x. Do not use division or modulo operator.

INPUT SAMPLE:

The first argument will be a path to a filename containing a comma separated list of two integers, one list per line. E.g.

13,8
17,16

OUTPUT SAMPLE:

Print to stdout, the smallest multiple of n which is greater than or equal to x, one per line. E.g.

16
32

*/

function nextMultiple(x, n){
  var output = n;
  while (output < x){
    output += n;
  }
  return output;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var values = line.split(",");
      var answer_line = nextMultiple(parseInt(values[0]), parseInt(values[1]));
      console.log(answer_line);
    }
});

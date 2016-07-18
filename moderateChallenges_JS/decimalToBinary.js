/*

Challenge taken from www.codeeval.com:

DECIMAL TO BINARY
CHALLENGE DESCRIPTION:

You are given a decimal (base 10) number, print its binary representation.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename containing decimal numbers greater or equal to 0, one per line.

Ignore all empty lines.

For example:

2
10
67
OUTPUT SAMPLE:

Print the binary representation, one per line.

For example:

10
1010
1000011

*/

function convertToBinary(digit){
  return digit.toString(2);
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        var answer_line = convertToBinary(parseInt(line));
        console.log(answer_line);
    }
});

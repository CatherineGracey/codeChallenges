/*

Challenge taken from www.codeeval.com:

NUMBER OF ONES
CHALLENGE DESCRIPTION:


Write a program which determines the number of 1 bits in the internal representation of a given integer.

INPUT SAMPLE:

The first argument is a path to a file. The file contains integers, one per line.

For example:

10
22
56

OUTPUT SAMPLE:

Print to stdout the number of ones in the binary form of each number.

For example:

2
3
3

*/

function countBinaryOnes(digit){
  var binary = digit.toString(2);
  var ones = 0;
  for (var i = 0; i < binary.length; i++){
    if (binary[i] === "1"){
      ones++;
    }
  }
  return ones;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        var answer_line = countBinaryOnes(parseInt(line));
        console.log(answer_line);
    }
});

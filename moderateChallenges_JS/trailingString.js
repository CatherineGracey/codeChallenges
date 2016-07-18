/*

Challenge taken from www.codeeval.com:

TRAILING STRING
CHALLENGE DESCRIPTION:


There are two strings: A and B. Print 1 if string B occurs at the end of string A. Otherwise, print 0.

INPUT SAMPLE:

The first argument is a path to the input filename containing two comma-delimited strings, one per line. Ignore all empty lines in the input file.

For example:

Hello World,World
Hello CodeEval,CodeEval
San Francisco,San Jose

OUTPUT SAMPLE:

Print 1 if the second string occurs at the end of the first string. Otherwise, print 0.

For example:

1
1
0

*/

function trailingString(full, partial){
  for (var i = full.length - 1, j = partial.length - 1; j >= 0; i--, j--){
    if (full[i] !== partial[j]){
      return 0;
    }
  }
  return 1;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        var values = line.split(",");
        var answer_line = trailingString(values[0], values[1])
        console.log(answer_line);
    }
});

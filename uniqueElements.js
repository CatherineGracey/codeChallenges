/*

Challenge taken from www.codeeval.com:

UNIQUE ELEMENTS
CHALLENGE DESCRIPTION:

You are given a sorted list of numbers with duplicates. Print out the sorted list with duplicates removed.

INPUT SAMPLE:

File containing a list of sorted integers, comma delimited, one per line. E.g.

1,1,1,2,2,3,3,4,4
2,3,4,5,5

OUTPUT SAMPLE:

Print out the sorted list with duplicates removed, one per line.
E.g.

1,2,3,4
2,3,4,5

*/

function noDuplicates(items){
  var sorted = [];
  sorted.push(items[0]);
  for (var i = 1; i < items.length; i++){
    if(items[i] !== sorted[sorted.length - 1]){
      sorted.push(items[i]);
    }
  }
  return sorted;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = noDuplicates(line.split(",")).join(",");
      console.log(answer_line);
    }
});

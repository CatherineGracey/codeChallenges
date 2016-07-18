/*

Challenge taken from www.codeeval.com:

COLUMN NAMES

CHALLENGE DESCRIPTION:

Microsoft Excel uses a special convention to name its column headers. The first 26 columns use the letters 'A' to 'Z'. Then, Excel names its column headers using two letters, so that the 27th and 28th column are 'AA' and 'AB'. After 'ZZ', Excel uses three letters.

Write a function that takes as input the number of the column, and returns its header. The input will not ask for a column that would be greater than 'ZZZ'.

INPUT SAMPLE:

The first argument is a path to a file. Each line of the input file contains one test case represented by one integer.

52
3702
OUTPUT SAMPLE:

For each test case your program must print one line containing the Excel column heading corresponding to the integer in the input.

AZ
ELJ
CONSTRAINTS:

The number of test cases is 40.
The input will not ask for a column that would be greater than 'ZZZ'.

*/

function getExcelColumn(column){
  var header = (column - 1).toString(26).split("");
  for (var i = 0; i < header.length; i++){
    header[i] = parseInt(header[i], 36);
    if (i === header.length - 1){
      header[i] = header[i] + 10;
    } else if (header[i] === 0){
      header[i] = "Z";
      header[i - 1] = parseInt(header[i - 1], 36);
      header[i - 1]--;
      header[i - 1] = header[i - 1].toString(36);
    } else {
      header[i] = header[i] + 9;
    }
    header[i] = header[i].toString(36);
  }
  if (header[0] === "9"){
    header.shift();
  }
  return header.join("").toUpperCase();
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var value = parseInt(line);
        var answer_line = getExcelColumn(value);
        console.log(answer_line);
    }
});

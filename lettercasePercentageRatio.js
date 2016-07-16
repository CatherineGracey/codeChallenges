/*

Challenge taken from www.codeeval.com:

LETTERCASE PERCENTAGE RATIO
CHALLENGE DESCRIPTION:

Your task is to write a program which determines (calculates) the percentage ratio of lowercase and uppercase letters.

INPUT SAMPLE:

Your program should accept a file as its first argument. Each line of input contains a string with uppercase and lowercase letters.

For example:

thisTHIS
AAbbCCDDEE
N
UkJ
OUTPUT SAMPLE:

For each line of input, print the percentage ratio of uppercase and lowercase letters rounded to the second digit after the point.

For example:

lowercase: 50.00 uppercase: 50.00
lowercase: 20.00 uppercase: 80.00
lowercase: 0.00 uppercase: 100.00
lowercase: 33.33 uppercase: 66.67

*/

function getPercentages(text){
  var upper = 0, lower = 0;
  for (var i = 0; i < text.length; i++){
    //Non-letters will return true for upper and lower case comparisons, so exclude them.
    if (text[i] === text[i].toUpperCase() && text[i] !== text[i].toLowerCase()){
      upper++;
    } else if (text[i] === text[i].toLowerCase() && text[i] !== text[i].toUpperCase()){
      lower++;
    }
  }
  var upperPerCent = ((upper / (upper + lower)) * 100).toFixed(2),
      lowerPerCent = ((lower / (upper + lower)) * 100).toFixed(2);
  return "lowercase: " + lowerPerCent + " uppercase: " + upperPerCent;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = getPercentages(line);
      console.log(answer_line);
    }
});

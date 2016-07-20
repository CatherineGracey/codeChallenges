/*

Challenge taken from www.codeeval.com:

DIGIT STATISTICS
CHALLENGE DESCRIPTION:

Given the numbers "a" and "n" find out how many times each digit from zero to nine is the last digit of the number in a sequence [ a, a2, a3, ... an-1, an ]

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line of input contains two space separated integers "a" and "n" E.g:

2 5
OUTPUT SAMPLE:

For each line of input print out how many times the digits zero, one, two ... nine occur as the last digit of numbers in the sequence E.g:

0: 0, 1: 0, 2: 2, 3: 0, 4: 1, 5: 0, 6: 1, 7: 0, 8: 1, 9: 0
In this example, the sequence consists of numbers 2, 4, 8, 16 and 32. Among the last digits, the digit two occurs twice, and each of the digits four, six and eight occurs once.

Constraints:
1 ≤ n ≤ 1 000 000 000 000,
2 ≤ a ≤ 9

*/

function countDigits(num1, num2){
  var digit, digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var prev = 1, current;
  for (var i = 1; i <= num2; i++ ){
    prev = prev * num1;
    current = prev.toString();
    digit = parseInt(current[current.length - 1]);
    digits[digit]++;
  }
  return digits;
}

function formatDigits(digits){
  var formatted = "";
  for (var i = 0; i <= 9; i++){
    formatted += i + ": " + digits[i];
    if (i < 9){
      formatted += ", "
    }
  }
  return formatted;
}

function getStatistics(line){
  var nums = line.split(" ");
  var num1 = parseInt(nums[0]), num2 = parseInt(nums[1]);
  var digits = countDigits(num1, num2);
  var statistics = formatDigits(digits);
  return statistics;
}

//Code for CodeEval submission:
var fs  = require("fs");
/*fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = getStatistics(line);
      console.log(answer_line);
    }
});*/

module.exports.countDigits = countDigits;
module.exports.formatDigits = formatDigits;
module.exports.getStatistics = getStatistics;

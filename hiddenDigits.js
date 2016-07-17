/*

Challenge taken from www.codeeval.com:

HIDDEN DIGITS
CHALLENGE DESCRIPTION:

In this challenge you're given a random string containing hidden and visible digits. The digits are hidden behind lower case latin letters as follows: 0 is behind 'a', 1 is behind ' b ' etc., 9 is behind 'j'. Any other symbol in the string means nothing and has to be ignored. So the challenge is to find all visible and hidden digits in the string and print them out in order of their appearance.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains a string. You may assume that there will be no white spaces inside the string. E.g.

abcdefghik
Xa,}A#5N}{xOBwYBHIlH,#W
(ABW>'yy^'M{X-K}q,
6240488
OUTPUT SAMPLE:

For each test case print out all visible and hidden digits in order of their appearance. Print out NONE in case there is no digits in the string. E.g.

012345678
05
NONE
6240488

*/

function findHiddenDigits(text){
  var digits = "";
  for (var i = 0; i < text.length; i++){
    switch(text[i]){
      case 'a':
      case '0':
        digits += '0';
        break;
      case '1':
      case 'b':
        digits += '1';
        break;
      case '2':
      case 'c':
        digits += '2';
        break;
      case '3':
      case 'd':
        digits += '3';
        break;
      case '4':
      case 'e':
        digits += '4';
        break;
      case '5':
      case 'f':
        digits += '5';
        break;
      case '6':
      case 'g':
        digits += '6';
        break;
      case '7':
      case 'h':
        digits += '7';
        break;
      case '8':
      case 'i':
        digits += '8';
        break;
      case '9':
      case 'j':
        digits += '9';
        break;
    }
  }
  if (digits.length > 0){
    return digits;
  } else {
    return "NONE";
  }
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = findHiddenDigits(line);
      console.log(answer_line);
    }
});

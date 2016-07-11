/*

Challenge taken from www.codeeval.com:

SWAP CASE
CHALLENGE DESCRIPTION:

Write a program which swaps letters' case in a sentence. All non-letter characters should remain the same.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

Hello world!
JavaScript language 1.8
A letter

OUTPUT SAMPLE:

Print results in the following way.

hELLO WORLD!
jAVAsCRIPT LANGUAGE 1.8
a LETTER

*/

function swapCase(text){
  var output = "";
  for (var i = 0; i < text.length; i++){
    //Check to see if the character is capitalised.
    //Punctuation returns true for upper and lower case comparisons.
    if (text[i] === text[i].toUpperCase()){
      output += text[i].toLowerCase();
    } else {
      output += text[i].toUpperCase();
    }
  }
  return output;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = swapCase(line);
      console.log(answer_line);
    }
});

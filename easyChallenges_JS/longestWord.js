/*

Challenge taken from www.codeeval.com:

LONGEST WORD
CHALLENGE DESCRIPTION:

In this challenge you need to find the longest word in a sentence. If the sentence has more than one word of the same length you should pick the first one.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Input example is the following

some line with text
another line
Each line has one or more words. Each word is separated by space char.

OUTPUT SAMPLE:

Print the longest word in the following way.

some
another

*/

function findLongestWord(text){
  var word = "", words = text.split(" ");
  for (var i = 0; i < words.length; i++){
    if (words[i].length > word.length){
      word = words[i];
    }
  }
  return word;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = findLongestWord(line);
      console.log(answer_line);
    }
});

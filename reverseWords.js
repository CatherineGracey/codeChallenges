/*

Challenge taken from www.codeeval.com:

REVERSE WORDS
CHALLENGE DESCRIPTION:

Write a program which reverses the words in an input sentence.

INPUT SAMPLE:

The first argument is a file that contains multiple sentences, one per line. Empty lines are also possible.

For example:

Hello World
Hello CodeEval

OUTPUT SAMPLE:

Print to stdout each sentence with the reversed words in it, one per line. Empty lines in the input should be ignored. Ensure that there are no trailing empty spaces in each line you print.

For example:

World Hello
CodeEval Hello

*/

function reverseOrder(words){
  var reversed = [];
  while (words.length > 0){
    var word = words.pop();
    reversed.push(word);
  }
  return reversed;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var values = line.split(" ");
        var answer_line = reverseOrder(values).join(" ");
        console.log(answer_line);
    }
});

/*

Challenge taken from www.codeeval.com:

REMOVE CHARACTERS
CHALLENGE DESCRIPTION:

Write a program which removes specific characters from a string.

INPUT SAMPLE:

The first argument is a path to a file. The file contains the source strings and the characters that need to be scrubbed. Each source string and characters you need to scrub are delimited by comma.

For example:

how are you, abc
hello world, def

OUTPUT SAMPLE:

Print to stdout the scrubbed strings, one per line. Ensure that there are no trailing empty spaces on each line you print.

For example:

how re you
hllo worl

*/

function scrubCharacters(text, chars){
  var output = "";
  for (var i = 0; i < text.length; i++){
    if (chars.indexOf(text[i]) === -1){
      output += text[i];
    }
  }
  return output;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var values = line.split(",")
      var answer_line = scrubCharacters(values[0], values[1].trim());
      console.log(answer_line);
    }
});

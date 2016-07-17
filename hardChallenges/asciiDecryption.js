/*

Challenge taken from www.codeeval.com:

ASCII DECRYPTION
CHALLENGE DESCRIPTION:

You are an analyst at the Central Intelligence Agency, and you have intercepted a top secret encrypted message which contains numbers. Each number is obtained by taking an ASCII code of the original character and adding some unknown constant N.

For example, you can encrypt the word 'test' with the condition that N = 11.

'test' to ASCII -> 116 101 115 116 -> add N to each number-> 127 112 126 127

Based on previous intelligence reports, you know that the original message includes two identical words consisting of X characters and you know the last letter in the word.

Your challenge is to decrypt the message.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename.

Each line of input consists of three parts: length of a word, which is repeated twice, the last letter of this word, and an encrypted message separated with space:

5 | s | 92 112 109 40 118 109 109 108 123 40 119 110 40 124 112 109 40
117 105 118 129 40 119 125 124 127 109 113 111 112 40 124 112 109 40 118
109 109 108 123 40 119 110 40 124 112 109 40 110 109 127 54 40 53 40 91
120 119 107 115

OUTPUT SAMPLE:

For each line of input print out decrypted message:

The needs of the many outweigh the needs of the few. - Spock

*/

function parseLetters(letters){
  for (var i = 0; i < letters.length; i++){
    letters[i] = parseInt(letters[i]);
  }
  return letters;
}

function findMatchedWord(len, letters){
  var word = [];
  for (var i = 0; i < letters.length; i++){
    for (var j = i + 1; j < letters.length; j++){
      //Check if the letter appears again in the array after this instance.
      if (letters[i] === letters[j]){
        //Check if the following letters match.
        for (var k = 0; k < len; k++){
          if (letters[i + k] === letters[j + k] && letters[i + k] > 64){
            word[k] = letters[i + k];
          } else {
            k = len + 10;
          }
        }
        if (word.length === len){
          return word;
        }
      } else {
        //Not a match, so clear the array
        word = [];
      }
    }
  }
  return word;
}

function calculateKey(char, letter){
  var key = letter - char.charCodeAt(0);
  return key;
}

function translate(letters, key){
  var char, trans = "";
  for (var i = 0; i < letters.length; i++){
    char = letters[i] - key;
    trans += String.fromCharCode(char);
  }
  return trans;
}

function decrypt(text){
  var encryption = text.split(" | ");
  var len = parseInt(encryption[0]);
  var char = encryption[1];
  var letters = parseLetters(encryption[2].split(" "));
  var word = findMatchedWord(len, letters);
  var key = calculateKey(char, word[word.length - 1]);
  var trans = translate(letters, key);
  return trans;
}

//Code for CodeEval submission:
//Uncomment to upload.
/*var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = decrypt(line);
      console.log(answer_line);
    }
});*/

module.exports.parseLetters = parseLetters;
module.exports.decrypt = decrypt;
module.exports.findMatchedWord = findMatchedWord;
module.exports.calculateKey = calculateKey;
module.exports.translate = translate;

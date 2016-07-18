/*

Challenge taken from www.codeeval.com:

LOWEST UNIQUE NUMBER
CHALLENGE DESCRIPTION:

There is a game where each player picks a number from 1 to 9, writes it on a paper and gives to a guide. A player wins if his number is the lowest unique. We may have 10-20 players in our game.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename.

You're a guide and you're given a set of numbers from players for the round of game. E.g. 2 rounds of the game look this way:

3 3 9 1 6 5 8 1 5 3
9 2 9 9 1 8 8 8 2 1 1

OUTPUT SAMPLE:

Print a winner's position or 0 in case there is no winner. In the first line of input sample the lowest unique number is 6. So player 5 wins.

5
0

*/

function findLowestUnique(values){
  //Highest allowed number in the game is 10.
  var lowest = 10;
  for (var i = 0; i < values.length; i++){
    if (values[i] < lowest && values.indexOf(values[i]) === values.lastIndexOf(values[i])){
      lowest = values[i];
    }
  }
  if (lowest === 10){
    return 0;
  } else {
    return values.indexOf(lowest) + 1;
  }
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var values = line.split(" ");
      for(var i = 0; i < values.length; i++){
        values[i] = parseInt(values[i]);
      }
      var answer_line = findLowestUnique(values);
      console.log(answer_line);
    }
});

/*

Challenge taken from www.codeeval.com:

TRICK OR TREAT
CHALLENGE DESCRIPTION:

Everyone knows what Halloween is and how children love it. Children in costumes travel from house to house asking for treats with a phrase "Trick or treat". After that, they divide the treats equally among all. This year, they collected tons of candies, and need your help to share everything equally.
You know that children receive different number of candies depending on their costume: vampire gets 3 candies from one house, zombie – 4 candies, and witch – 5 candies.
That is, three children in three different costumes get 3+4+5=12 candies from one house.

INPUT SAMPLE:

The first argument is a path to a file. Each line includes a test case with number of vampires, zombies, witches, and houses that they visited.

For example:

Vampires: 1, Zombies: 1, Witches: 1, Houses: 1
Vampires: 3, Zombies: 2, Witches: 1, Houses: 10

OUTPUT SAMPLE:

You need to print number of candies that each child will get. If the number is not integer, round it to the lower: for example, if the resulting number is 13.666, round it to 13.

For example:

4
36

CONSTRAINTS:

Number of vampires, zombies, witches, and houses can be from 0 to 100.
If the final number of candies is not integer, round it to the lower.
The number of test cases is 40.

*/

function trickOrTreat(vampires, zombies, witches, houses){
  var children = vampires + zombies + witches;
  var candyPerHouse = (vampires * 3) + (zombies * 4) + (witches * 5);
  var candyTotal = candyPerHouse * houses;
  var candyPerChild = Math.floor(candyTotal / children);
  console.log(candyPerChild);
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        var values = line.split(" ");
        var vampires = parseInt(values[1]);
        var zombies = parseInt(values[3]);
        var witches = parseInt(values[5]);
        var houses = parseInt(values[7]);
        trickOrTreat(vampires, zombies, witches, houses);
    }
});

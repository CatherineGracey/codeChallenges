/*

Challenge taken from www.codeeval.com:

OVERLAPPING RECTANGLES
CHALLENGE DESCRIPTION:

Given two axis aligned rectangles A and B, determine if the two overlap. The rectangles considered overlapping if they have at least one common point.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains 8 comma separated co-ordinates. The co-ordinates are upper left x of A, upper left y of A, lower right x of A, lower right y of A, upper left x of B, upper left y of B, lower right x of B, lower right y of B. E.g.

-3,3,-1,1,1,-1,3,-3
-3,3,-1,1,-2,4,2,2

OUTPUT SAMPLE:

Print out True or False if A and B intersect. E.g.

False
True

*/

function testOverlap(line) {
  var values = line.split(",");
  var answer_line = overlapping(values);
  console.log(answer_line);
}

function overlapping(values){
  var ax1 = parseInt(values[0]),
      ay1 = parseInt(values[1]),
      ax2 = parseInt(values[2]),
      ay2 = parseInt(values[3]),
      bx1 = parseInt(values[4]),
      by1 = parseInt(values[5]),
      bx2 = parseInt(values[6]),
      by2 = parseInt(values[7]);
  //Not setting overlap to a boolean value because capitalisation of the output seems important for this challenge.
  var overlap = "False";
  //Check if there is overlap on the x axis
  if ((ax1 <= bx1 && bx1 <= ax2) || (ax1 <= bx2 && bx2 <= ax2) || (bx1 <= ax1 && ax1 <= bx2) || (bx1 <= ax2 && ax2 <= bx2)){
    //Check if there is overlap on the y axis
    if ((ay1 >= by1 && by1 >= ay2) || (ay1 >= by2 && by2 >= ay2) || (by1 >= ay1 && ay1 >= by2) || (by1 >= ay2 && ay2 >= by2)){
      overlap = "True";
    }
  }
  return overlap;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        var values = line.split(",");
        var answer_line = overlapping(values);
        console.log(answer_line);
    }
});

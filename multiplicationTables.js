/*

Challenge taken from www.codeeval.com:

MULTIPLICATION TABLES
CHALLENGE DESCRIPTION:


Print out the grade school multiplication table upto 12*12.

INPUT SAMPLE:

There is no input for this program.

OUTPUT SAMPLE:

Print out the table in a matrix like fashion, each number formatted to a width of 4 (The numbers are right-aligned and strip out leading/trailing spaces on each line). The first 3 line will look like:

1   2   3   4   5   6   7   8   9  10  11  12
2   4   6   8  10  12  14  16  18  20  22  24
3   6   9  12  15  18  21  24  27  30  33  36

*/

//Code for CodeEval submission:

function multiply(base){
  var next, output = base.toString();
  for (var i = 2; i < 13; i++){
    next = (base * i).toString();
    switch (next.length) {
      case 1:
        output += "   " + next;
        break;
      case 2:
        output += "  " + next;
        break;
      default:
        output += " " + next;
    }
  }
  return output;
}

for (var i = 1; i < 13; i++){
  console.log(multiply(i));
}

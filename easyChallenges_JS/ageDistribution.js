/*

Challenge taken from www.codeeval.com:

AGE DISTRIBUTION
CHALLENGE DESCRIPTION:

You're responsible for providing a demographic report for your local school district based on age. To do this, you're going determine which 'category' each person fits into based on their age.
The person's age will determine which category they should be in:

If they're from 0 to 2 the child should be with parents print : 'Still in Mama's arms'
If they're 3 or 4 and should be in preschool print : 'Preschool Maniac'
If they're from 5 to 11 and should be in elementary school print : 'Elementary school'
From 12 to 14: 'Middle school'
From 15 to 18: 'High school'
From 19 to 22: 'College'
From 23 to 65: 'Working for the man'
From 66 to 100: 'The Golden Years'
If the age of the person less than 0 or more than 100 - it might be an alien - print: "This program is for humans"
INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line of input contains one integer - age of the person:

0
19
OUTPUT SAMPLE:

For each line of input print out where the person is:

Still in Mama's arms
College

*/

function findWhere(age){
  if (0 > age || age > 100){
    return "This program is for humans";
  } else if (age < 3){
    return "Still in Mama's arms";
  } else if (age < 5){
    return "Preschool Maniac";
  } else if (age < 12){
    return "Elementary school";
  } else if (age < 15){
    return "Middle school";
  } else if (age < 19){
    return "High school";
  } else if (age < 23){
    return "College";
  } else if (age < 65){
    return "Working for the man";
  } else {
    return "The Golden Years";
  }
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var answer_line = findWhere(parseInt(line));
      console.log(answer_line);
    }
});

/*

Challenge taken from www.codeeval.com:

ODD NUMBERS
CHALLENGE DESCRIPTION:


Print the odd numbers from 1 to 99.

INPUT SAMPLE:

There is no input for this program.

OUTPUT SAMPLE:

Print the odd numbers from 1 to 99, one number per line.

*/

function printOddNumbers(start, end){
  for (var i = start; i <= end; i++){
    if (i % 2 !== 0){
      console.log(i);
    }
  }
}

printOddNumbers(1, 99);

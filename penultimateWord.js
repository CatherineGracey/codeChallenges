/*

Challenge taken from www.codeeval.com:



*/

function secondLast(list){
  var item = list[list.length - 2];
  return item;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var values = line.split(" ")
      var answer_line = secondLast(values);
      console.log(answer_line);
    }
});

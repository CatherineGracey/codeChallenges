/*

Challenge taken from www.codeeval.com:

GLUE SHREDDED PIECES

CHALLENGE DESCRIPTION:

Imagine that you are taking part in the investigation of a criminal organization. Having determined its location, you came there and found out that the criminals had recently left that place. But it is not a dead end, because there are lots of shredded documents in the room. On investigating these documents, you came to conclusion that the criminals had not been very careful. Firstly, the papers are shredded horizontally, and you can read some pieces of text. Secondly, there are many copies of the same documents, and the pieces of text overlap each other.

For example, you can put pieces together and get the original text:

evil pl
 vil pla
  il plan

The answer is ‘evil plan’.

Your task is to print out the original text. Due to repetitions in the text, you will sometimes get identical pieces.

INPUT SAMPLE:

Your program should accept a path to a file as its first argument. Each line in the file is one test case with the pieces of shredded text separated by a pipe. Each test case starts and finishes with symbol '|'.

For example:

|deEva|lan t|to ha|evil |ankin|il-ev|o hac| to h|vil p|an to|The e|CodeE| evil|plan
|hack |Eval |ack C|l ran|king.|l-evi|evil-|-evil|l pla|il pl| hack|al ra|vil-e|odeEv|
he ev|n to |ck Co|eEval|nking| rank| Code|e evi|ranki|k Cod| plan|val r|
OUTPUT SAMPLE:

Print to stdout the original text for each test case.

For example:

The evil-evil plan to hack CodeEval ranking.

CONSTRAINTS:

For the text with the length t shredded into pieces with the length n, there are t - (n - 1) pieces of text in the input file. Each piece of text is shifted by one character. For example, the word ‘secret’ and n = 4:

secr
 ecre
  cret

There is only one correct answer for each test case.
The minimum number of pieces is 125, the maximum number is 975.
The minimum length of a piece of text is 8, the maximum length is 28.
The number of test cases is 20.

*/

function reassemble(pieces){
  var fits, confirm, i, j, k, l, text = pieces.shift();
  //Add fragments to the end of the text.
  for (i = 0; i < pieces.length; i++ ){
    fits = false;
    //Is the last character of the text a match for this fragment?
    if (pieces[i][pieces[i].length - 2] === text[text.length - 1]){
      //Check to see if the rest of the fragment fits the text.
      fits = true;
      for (j = 1; j < pieces[i].length - 1; j++){
        if (pieces[i][pieces[i].length - 2 - j] !== text[text.length - 1 - j]){
          fits = false;
        }
      }
      //If fits is true the fragment aligns. Now find a next fragment that matches the placement.
      if (fits){
        for (k = 0; k < pieces.length; k++){
          confirm = false;
          //Does the last character of the fragment match the confirmation fragment?
          if (pieces[i][3] === pieces[k][0]){
            confirm = true;
            for (l = 1; l < pieces[k].length - 3; l++){
              if (pieces[i][l + 3] !== pieces[k][l]){
                confirm = false;
              }
            }
            if (confirm){
              fits = pieces.splice(i, 1);
              text = text + fits[0][fits[0].length - 1];
              i = -1;
              break;
            }
          }
        }
      }
    }
  }
  //Add fragments to the start of the text.
  for (i = 0; i < pieces.length; i++ ){
    fits = false;
    //Is the first character of the text a match for this fragment?
    //console.log(pieces[i], text);
    if (pieces[i][1] === text[0]){
      //Check to see if the rest of the fragment fits the text.
      fits = true;
      for (j = 1; j < pieces[i].length - 1; j++){
        if (pieces[i][j + 1] !== text[j]){
          fits = false;
        }
      }
      //If fits is true the fragment aligns. Now find a next fragment that matches the placement.
      if (fits){
        for (k = 0; k < pieces.length; k++){
          confirm = false;
          //Does the first character of the fragment match the confirmation fragment?
          if (pieces[i][0] === pieces[k][3]){
            confirm = true;
            for (l = 1; l < pieces[k].length - 3; l++){
              if (pieces[i][l] !== pieces[k][l + 3]){
                confirm = false;
              }
            }
            if (confirm){
              fits = pieces.splice(i, 1);
              text = fits[0][0] + text;
              i = -1;
              break;
            }
          }
        }
      }
    }
  }
  //Add the final pieces.
  for (i = 0; i < pieces.length; i++){
    fits = false;
    if (pieces[i][pieces[i].length - 2] === text[text.length - 1]){
      fits = true;
      for (j = 1; j < pieces[i].length - 1; j++){
        if (pieces[i][pieces[i].length - 2 - j] !== text[text.length - 1 - j]){
          fits = false;
        }
      }
      if (fits){
        fits = pieces.splice(i, 1);
        text = text + fits[0][fits[0].length - 1];
        i = -1;
      }
    }
  }
  //Add the first pieces.
  for (i = 0; i < pieces.length; i++){
    fits = false;
    if (pieces[i][1] === text[0]){
      fits = true;
      for (j = 1; j < pieces[i].length - 1; j++){
        if (pieces[i][j + 1] !== text[j]){
          fits = false;
        }
      }
      if (fits){
        fits = pieces.splice(i, 1);
        text = fits[0][0] + text;
        i = -1;
      }
    }
  }
  return text;
}

//Code for CodeEval submission:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var values = line.split("|");
      if (values[0] === ""){
        values.shift();
      }
      if (values[values.length - 1] === ""){
        values.pop();
      }
      var answer_line = reassemble(values);
      console.log(answer_line);
    }
});

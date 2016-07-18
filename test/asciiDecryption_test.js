var expect = require('chai').expect;
var challenge = require('../hardChallenges_JS/asciiDecryption.js');

describe('ASCII Decryption Challenge', function(){

  describe('parseLetters', function(){
    var parseLetters = challenge.parseLetters;
    /*function parseLetters(letters){
      for (var i = 0; i < letters.length; i++){
        letters[i] = parseInt(letters[i]);
      }
      return letters;
    }*/
    var test = parseLetters(["116","101","115","116"]);

    it('Should return an array.', function(){
      expect(test).to.be.a('array');
    });

    it('The array should be populated with numbers.', function (){
      expect(test[0]).to.be.a('number');
      expect(test[3]).to.be.a('number');
    });

    it('The array should be populated with the correct numbers', function(){
      expect(test[0]).to.equal(116);
      expect(test[2]).to.equal(115);
    });
  });

  describe('findMatchedWord', function(){
    var findMatchedWord = challenge.findMatchedWord;

    var len = 5;
    var letters = [92, 112, 109, 40, 118, 109, 109, 108, 123, 40, 119, 110, 40, 124, 112, 109, 40, 117, 105, 118, 129, 40, 119, 125, 124, 127, 109, 113, 111, 112, 40, 124, 112, 109, 40, 118, 109, 109, 108, 123, 40, 119, 110, 40, 124, 112, 109, 40, 110, 109, 127, 54, 40, 53, 40, 91, 120, 119, 107, 115];
    var test = findMatchedWord(len, letters);

    it('Should return an array.', function(){
      expect(test).to.be.a('array');
    });

    it('Should return the correct length', function(){
      expect(test.length).to.equal(len);
    });

    it('Should return the correct values', function(){
      expect(test).to.deep.equal([118, 109, 109, 108, 123]);
    });
  });

  describe('calculateKey', function(){
    var calculateKey = challenge.calculateKey;
    /*function calculateKey(char, letter){
      var key = letter - char.charCodeAt(0);
      return key;
    }*/
    var char = "t";//116
    var letter = 127;
    var key = calculateKey(char, letter);
    it('Should return a number.', function(){
      expect(key).to.be.a('number');
    });
    it('Should return the correct number.', function(){
      expect(key).to.equal(11);
    });
  });

  describe('translate', function(){
    var translate = challenge.translate;
    /*function translate(letters, key){
      var char, trans = "";
      for (var i = 0; i < letters.length; i++){
        char = letters[i] - key;
        trans += String.fromCharCode(char);
      }
      return trans;
    }*/
    var test = translate([127, 112, 126, 127], 11);
    it('Should return a string.', function(){
      expect(test).to.be.a("string");
    });
    it('Should correctly decrypt the string.', function(){
      expect(test).to.equal("test");
    });
  });

  describe('decrypt', function(){
    var decrypt = challenge.decrypt;
    /*function decrypt(text){
      var encryption = text.split(" | ");
      var len = encryption[0];
      var char = encryption[1];
      var letters = parseLetters(encryption[2].split(" "));
      var word = findMatchedWord(len, letters);
      var key = calculateKey(char, word[word.length - 1]);
      var trans = translate(letters, key);
      return trans;
    }*/
    var test = decrypt("5 | s | 92 112 109 40 118 109 109 108 123 40 119 110 40 124 112 109 40 117 105 118 129 40 119 125 124 127 109 113 111 112 40 124 112 109 40 118 109 109 108 123 40 119 110 40 124 112 109 40 110 109 127 54 40 53 40 91 120 119 107 115");
    it('Should return a string.', function(){
      expect(test).to.be.a("string");
    });
    it('Should return the correct string.', function(){
      expect(test).to.equal("The needs of the many outweigh the needs of the few. - Spock");
    });

    var codeEval = decrypt("5 | r | 95 117 123 38 121 110 117 123 114 106 38 116 107 124 107 120 38 103 121 113 38 103 116 127 117 116 107 38 108 117 120 38 103 116 127 122 110 111 116 109 50 38 116 107 124 107 120 38 51 38 103 116 106 38 107 121 118 107 105 111 103 114 114 127 38 108 120 117 115 38 122 110 117 121 107 38 125 110 117 38 103 120 107 38 115 117 120 107 38 118 117 125 107 120 108 123 114 38 122 110 103 116 38 127 117 123 121 107 114 108 52 38 51 38 83 111 113 110 103 111 114 38 72 123 114 109 103 113 117 124 50 38 90 110 107 38 83 103 121 122 107 120 38 103 116 106 38 83 103 120 109 103 120 111 122 103");
    it('Should return the correct string.', function(){
      expect(codeEval).to.equal("You should never ask anyone for anything, never - and especially from those who are more powerful than youself. - Mikhail Bulgakov, The Master and Margarita");
    });

  });

});

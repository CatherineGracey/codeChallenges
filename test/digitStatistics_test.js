var expect = require('chai').expect;
var challenge = require('../hardChallenges_JS/digitStatistics.js');

describe('Digit Statistics Challenge', function(){

  describe('buildSequence', function(){
    var buildSequence = challenge.buildSequence;
    var num1 = 2, num2 = 5;
    var test = buildSequence(num1, num2);//[2, 4, 8, 16, 32]

    it('Should return an array.', function(){
      expect(test).to.be.a("array");
    });

    it('Should return the correct length', function(){
      expect(test.length).to.equal(num2);
    });

    it('The array should be populated with numbers.', function (){
      expect(test[0]).to.be.a('number');
      expect(test[3]).to.be.a('number');
    });

    it('The array should be populated with the correct numbers', function(){
      expect(test).to.deep.equal([2, 4, 8, 16, 32]);
    });
  });

  describe('countDigits', function(){
    var countDigits = challenge.countDigits;
    var sequence = [2, 4, 8, 16, 32];
    var test = countDigits(sequence);

    it('Should return an array.', function(){
      expect(test).to.be.a("array");
    });

    it('Should return the correct length', function(){
      expect(test.length).to.equal(10);
    });

    it('The array should be populated with the correct numbers', function(){
      expect(test).to.deep.equal([0, 0, 2, 0, 1, 0, 1, 0, 1, 0]);
    });
  });

  describe('formatDigits', function(){
    var formatDigits = challenge.formatDigits;
    var digits = [0, 0, 2, 0, 1, 0, 1, 0, 1, 0];
    var test = formatDigits(digits);

    it('Should return a string.', function(){
      expect(test).to.be.a("string");
    });

    it('Should return the correct string', function(){
      expect(test).to.equal("0: 0, 1: 0, 2: 2, 3: 0, 4: 1, 5: 0, 6: 1, 7: 0, 8: 1, 9: 0");
    });
  });

  describe('getStatistics', function(){
    var getStatistics = challenge.getStatistics;
    var line = "2 5";
    var test = getStatistics(line);

    it('Should return a string.', function(){
      expect(test).to.be.a("string");
    });

    it('Should return the correct string', function(){
      expect(test).to.equal("0: 0, 1: 0, 2: 2, 3: 0, 4: 1, 5: 0, 6: 1, 7: 0, 8: 1, 9: 0");
    });
  });

});

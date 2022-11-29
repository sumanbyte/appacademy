const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let myWord;

  beforeEach(()=>{
    myWord = new Word('someword')
  })
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(myWord.word).equal('someword')
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect({word: 'someword'}).to.have.property('word')
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word1 = new Word('apple')
      let word2 = new Word('')
      let word3 = new Word('hhhh')
      let actual1 = word1.removeVowels()
      let actual2 = word2.removeVowels()
      let actual3 = word3.removeVowels()
      let expected1 = 'ppl'
      let expected2 = ''
      let expected3 = 'hhhh'

      expect(actual1).to.equal(expected1)
      expect(actual2).to.equal(expected2)
      expect(actual3).to.equal(expected3)
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word1 = new Word('elephant')
      let word2 = new Word('')
      let word3 = new Word('eeeeee')

      let actual1, actual2, actual3;
      let expected1, expected2, expected3;

      actual1 = word1.removeConsonants()
      actual2 = word2.removeConsonants()
      actual3 = word3.removeConsonants()

      expected1 = 'eea'
      expected2 = ''
      expected3 = 'eeeeee'

      expect(actual1).to.equal(expected1)
      expect(actual2).to.equal(expected2)
      expect(actual3).to.equal(expected3)

    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word1, word2, word3, expected1,expected2, expected3, actual1, actual2, actual3;

      word1 = new Word('apple')
      word2 = new Word('')
      word3 = new Word('shock')

      actual1 = word1.pigLatin()
      actual2 = word2.pigLatin()
      actual3 = word3.pigLatin()

      expected1 = 'appleyay'
      expected2 = undefined
      expected3 = 'ockshay'

      expect(actual1).to.equal(expected1)
      expect(actual2).to.equal(expected2)
      expect(actual3).to.equal(expected3)

    });
  });
});
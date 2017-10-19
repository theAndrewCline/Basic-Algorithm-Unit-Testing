const expect = require('chai').expect;

const findLongestWord = require('../algorithms/longestWord.js').findLongestWord;

describe('findLongestWord()' , function () {
  it('findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.' , function () {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('number');
  });

  it('findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.' , function () {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
  });

  it('findLongestWord("May the force be with you") should return 5.' , function () {
    expect(findLongestWord('May the force be with you')).to.equal(5);
  });

  it('findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.' , function () {
    expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).to.equal(8);
    });

  it('findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.") should return 8.' , function () {
    expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).to.equal(19);
  });
});

const expect = require('chai').expect;

const reverseString = require('../algorithms/reverseString.js').reverseString;

describe('reverseString()' , function() {
  it('Should return a string' , function () {
    expect(reverseString('hello')).to.be.a('string');
  });

  it('Passing "hello" should return "olleh"' , function () {
    expect(reverseString('hello')).to.equal('olleh');
  });

  it('Passing "Howdy" should return "ydwoH"' , function () {
    expect(reverseString('Howdy')).to.equal('ydwoH');
  });

  it('Passing "Greetings from Earth" should return "htraE morf sgniteerG"' , function () {
    expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
  });
});

const expect = require('chai').expect;

const palindrome = require('../algorithms/palindrome.js').palindrome;

describe('palindrome()' , function () {
  it('Should return a boolean' , function () {
    expect(palindrome('eye')).to.be.a('boolean');
  });

  it('Should return true when "eye" is passed' , function () {
    expect(palindrome('eye')).to.be.ok;
  });

  it('Should return true when "_eye" is passed' , function () {
    expect(palindrome('_eye')).to.be.ok;
  });

  it('Should return true when "race car" is passed' , function () {
    expect(palindrome('race car')).to.be.ok;
  });

  it('Should return false when "not a palindrome" is passed' , function () {
    expect(palindrome('not a palindrome')).to.be.false;
  });

  it('Should return true when "A man, a plan, a canal. Panama" is passed' , function () {
    expect(palindrome('A man, a plan, a canal. Panama')).to.be.ok;
  });

  it('Should return true when "never odd or even" is passed' , function () {
    expect(palindrome('never odd or even')).to.be.ok;
  });

  it('Should return false when "nope" is passed' , function () {
    expect(palindrome('nope')).to.be.false;
  });

  it('Should return false when "almostomla" is passed' , function () {
    expect(palindrome('almostomla')).to.be.false;
  });

  it('Should return true when "My age is 0, 0 si ega ym." is passed' , function () {
    expect(palindrome('My age is 0, 0 si ega ym.')).to.be.ok;
  });

  it('Should return false when "1 eye for of 1 eye." is passed' , function () {
    expect(palindrome('1 eye for of 1 eye.')).to.be.false;
  });

  it('Should return true when "0_0 (: /-\ :) 0-0" is passed' , function () {
    expect(palindrome('0_0 (: /-\ :) 0-0')).to.be.ok;
  });

  it('Should return false when "five|\_/|four" is passed' , function () {
    expect(palindrome('five|\_/|four')).to.be.false;
  });
});

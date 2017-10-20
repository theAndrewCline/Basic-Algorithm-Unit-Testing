const expect = require('chai').expect;

const titleCase = require('../algorithms/titleCase.js').titleCase;

describe('titleCase()' , function () {
  it('titleCase("I\'m a little tea pot") should return a string.' , function () {
    expect(titleCase("I\'m a little tea pot")).to.be.a('string');
  });

  it('titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot".' , function() {
    expect(titleCase("I\'m a little tea pot")).to.equal('I\'m A Little Tea Pot');
  });

  it('titleCase("sHoRt AnD sToUt") should return "Short And Stout".' , function() {
    expect(titleCase("sHoRt AnD sToUt")).to.equal('Short And Stout');
  });

  it('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".' , function() {
    expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal('Here Is My Handle Here Is My Spout');
  });
});

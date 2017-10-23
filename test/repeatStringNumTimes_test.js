const expect = require('chai').expect;

const repeatStringNumTimes = require('../algorithms/repeatStringNumTimes.js').repeatStringNumTimes;

describe('repeatStringNumTimes()' , function () {
  it('repeatStringNumTimes("*", 3) should return "***".' , function() {
    expect(repeatStringNumTimes("*", 3)).to.equal('***');
  });

  it('repeatStringNumTimes("abc", 3) should return "abcabcabc".' , function () {
    expect(repeatStringNumTimes("abc", 3)).to.equal('abcabcabc');
  });

  it('repeatStringNumTimes("abc", 4) should return "abcabcabcabc".' , function () {
    expect(repeatStringNumTimes("abc", 4)).to.equal('abcabcabcabc');
  });

  it('repeatStringNumTimes("abc", 1) should return "abc".' , function () {
    expect(repeatStringNumTimes("abc", 1)).to.equal('abc');
  });

  it('repeatStringNumTimes("*", 8) should return "********".', function () {
    expect(repeatStringNumTimes("*", 8)).to.equal('********');
  });

  it('repeatStringNumTimes("abc", -2) should return ""' , function () {
    expect(repeatStringNumTimes("abc", -2)).to.equal('');
  });

});

const expect = require('chai').expect;

const getIndexToIns = require('../algorithms/getIndexToIns.js').getIndexToIns;

describe('getIndexToIns()' , function () {
  it('getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.' , function () {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).to.equal(3);
  });

  it('getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.' , function () {
    expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.equal(2);
  });

  it('getIndexToIns([40, 60], 50) should return 1.' , function () {
    expect(getIndexToIns([40, 60], 50)).to.equal(1);
  });

  it('getIndexToIns([3, 10, 5], 3) should return 0.' , function () {
    expect(getIndexToIns([3, 10, 5], 3)).to.equal(0);
  });

  it('getIndexToIns([5, 3, 20, 3], 5) should return 2.' , function () {
    expect(getIndexToIns([5, 3, 20, 3], 5)).to.equal(2);
  });

  it('getIndexToIns([2, 20, 10], 19) should return 2.' , function () {
    expect(getIndexToIns([2, 20, 10], 19)).to.equal(2);
  });

  it('getIndexToIns([2, 5, 10], 15) should return 3.' , function () {
    expect(getIndexToIns([2, 5, 10], 15)).to.equal(3);
  });
});

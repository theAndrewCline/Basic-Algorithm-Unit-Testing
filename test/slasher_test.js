const expect = require('chai').expect;

const slasher = require('../algorithms/slasher.js').slasher; 

describe('slasher()', function () {
  it('slasher([1, 2, 3], 2) should return [3].', function () {
    expect(slasher([1, 2, 3], 2)).to.deep.equal([3]);
  });

  it('slasher([1, 2, 3], 0) should return [1, 2, 3].' , function () {
    expect(slasher([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it('slasher([1, 2, 3], 9) should return [].' , function () {
    expect(slasher([1, 2, 3], 9)).to.deep.equal([]);
  });

  it('slasher([1, 2, 3], 4) should return [].' , function () {
    expect(slasher([1, 2, 3], 4)).to.deep.equal([]);
  });

  it('slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].' , function () {
    expect(slasher(["burgers", "fries", "shake"], 1)).to.deep.equal(["fries", "shake"]);
  });

  it('slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].', function () {
    expect(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)).to.deep.equal(["cheese", 4]);
  });
});

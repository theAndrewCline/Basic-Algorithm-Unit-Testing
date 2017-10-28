const expect = require('chai').expect;

const destroyer = require('../algorithms/destroyer').destroyer;

describe('destroyer()' , function () {
  it('destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].' , function () {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).to.deep.equal([1 , 1]);
  });

  it('destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].' , function () {
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).to.deep.equal([1, 5, 1]);
  });

  it('destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].' , function () {
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).to.deep.equal([1]);
  });

  it('destroyer([2, 3, 2, 3], 2, 3) should return [].' , function () {
    expect(destroyer([2, 3, 2, 3], 2, 3)).to.deep.equal([]);
  });

  it('destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].' , function () {
    expect(destroyer(["tree", "hamburger", 53], "tree", 53)).to.deep.equal;
  });
});

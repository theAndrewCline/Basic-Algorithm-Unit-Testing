const expect = require('chai').expect;

const bouncer = require('../algorithms/bouncer').bouncer;

describe('bouncer()', function() {
  it('bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].', function() {
    expect(bouncer([7, "ate", "", false, 9])).to.deep.equal([7, "ate", 9]);
  });

  it('bouncer(["a", "b", "c"]) should return ["a", "b", "c"].', function() {
    expect(bouncer(["a", "b", "c"])).to.deep.equal(["a", "b", "c"]);
  });

  it('bouncer([false, null, 0, NaN, undefined, ""]) should return [].', function() {
    expect(bouncer([false, null, 0, NaN, undefined, ""])).to.deep.equal([]);
  });

  it('bouncer([1, null, NaN, 2, undefined]) should return [1, 2]', function() {
    expect(bouncer([1, null, NaN, 2, undefined, ])).to.deep.equal([1, 2]);
  });
});

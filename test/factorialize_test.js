const expect = require('chai').expect;

const factorialize = require('../algorithms/factorialize').factorialize

describe('factorialize()' , function () {
  it('Should return a number' , function () {
    expect(factorialize(5)).to.be.a('number');
  });

  it('Should return 120 when passed 5' , function () {
    expect(factorialize(5)).to.equal(120);
  });

  it('Should return 3628800 when passed 10' , function () {
    expect(factorialize(10)).to.equal(3628800);
  });

  it('Should return 2432902008176640000 when passed 20' , function () {
    expect(factorialize(20)).to.equal(2432902008176640000);
  });

  it('Should return 1 when passed 0' , function () {
    expect(factorialize(0)).to.equal(1);
  });
});

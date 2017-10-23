const expect = require('chai').expect;

const confirmEnding = require('../algorithms/confirmingEnding.js').confirmingEnding;

describe('confirmingEnding()' , function(){
  it('confirmEnding("Bastian", "n") should return true.' , function () {
    expect(confirmEnding("Bastian", "n")).to.be.ok;
  });

  it('confirmEnding("Connor", "n") should return false.' , function () {
    expect(confirmEnding("Connor", "n")).to.be.false;
  });

  it('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.' , function() {
    expect(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).to.be.false;
  });

  it('confirmEnding("He has to give me a new name", "name") should return true.', function () {
    expect(confirmEnding("He has to give me a new name", "name")).to.be.ok;
  });

  it('confirmEnding("Open sesame", "same") should return true.', function () {
    expect(confirmEnding("Open sesame", "same")).to.be.ok;
  });

  it('confirmEnding("Open sesame", "pen") should return false.' , function () {
    expect(confirmEnding("Open sesame", "pen")).to.be.false;
  });

  it('confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.' , function () {
    expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).to.be.false;
  });
});

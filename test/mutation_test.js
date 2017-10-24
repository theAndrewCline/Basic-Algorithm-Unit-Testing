const expect = require('chai').expect;

const mutation = require('../algorithms/mutation.js').mutation;

describe('mutation()', function() {
  it('mutation(["hello", "hey"]) should return false.', function() {
    expect(mutation(["hello", "hey"])).to.be.false;
  });

  it('mutation(["hello", "Hello"]) should return true.', function() {
    expect(mutation(["hello", "Hello"])).to.be.ok;
  });

  it('mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.', function() {
    expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).to.be.ok
  });

  it('mutation(["Mary", "Army"]) should return true.', function() {
    expect(mutation(["Mary", "Army"])).to.be.ok;
  });

  it('mutation(["Mary", "Aarmy"]) should return true.', function() {
    expect(mutation(["Mary", "Aarmy"])).to.be.ok;
  });

  it('mutation(["Alien", "line"]) should return true.', function() {
    expect(mutation(["Alien", "line"])).to.be.ok;
  });

  it('mutation(["floor", "for"]) should return true.', function() {
    expect(mutation(["floor", "for"])).to.be.ok;
  });

  it('mutation(["hello", "neo"]) should return false.', function() {
    expect(mutation(["hello", "neo"])).to.be.false;
  });

  it('mutation(["voodoo", "no"]) should return false.', function() {
    expect(mutation(["voodoo", "no"])).to.be.false;
  });
});

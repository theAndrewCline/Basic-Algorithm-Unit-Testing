const expect = require('chai').expect;

const truncateString = require('../algorithms/truncateString.js').truncateString;

describe('truncateString()', function () {
  it('truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".', function () {
    expect(truncateString("A-tisket a-tasket A green and yellow basket", 11)).to.equal('A-tisket...');
  });

  it('truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".' , function () {
    expect(truncateString("Peter Piper picked a peck of pickled peppers", 14)).to.equal('Peter Piper...');
  });

  it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".' , function () {
    expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)).to.equal('A-tisket a-tasket A green and yellow basket');
  });

  it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".' , function () {
    expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)).to.equal('A-tisket a-tasket A green and yellow basket');
  });

  it('truncateString("A-", 1) should return "A...".' , function () {
    expect(truncateString("A-", 1)).to.equal('A...');
  });

  it('truncateString("Absolutely Longer", 2) should return "Ab...".', function () {
    expect(truncateString("Absolutely Longer", 2)).to.equal('Ab...')
  });

});

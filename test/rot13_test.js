const expect = require('chai').expect; 

const rot13 = require('../algorithms/rot13.js').rot13; 

describe('rot13' , function () {
  it('rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"', function () {
     expect(rot13("SERR PBQR PNZC")).to.equal('FREE CODE CAMP'); 
  });

  it('rot13("SERR CVMMN!") should decode to "FREE PIZZA!"' , function () {
     expect(rot13("SERR CVMMN!")).to.equal('FREE PIZZA!'); 
  });

  it('rot13("SERR YBIR?") should decode to "FREE LOVE?"', function () {
     expect(rot13("SERR YBIR?")).to.equal('FREE LOVE?');  
  });

  it('rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."', function () {
     expect(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")).to.equal('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');  
  });
});
function largestOfFour(array) {


  var ansArr = [];

  for (var i = 0; i < array.length; i ++) {
    var large = 0;
    for (var j =  0; j < array[i].length; j ++) {
      if (array[i][j] > large) {

        large = array[i][j];
      }
    }
    ansArr.push(large);
    large = 0;
  }

  return ansArr;
}

module.exports.largestOfFour = largestOfFour;

function getIndexToIns(arr , num) {

  arr.push(num);

  arr.sort(function (a , b) {
    return a - b;
  });

  for(var i = 0; i < arr.length; i ++) {
    if (num === arr[i]) {
      return i
    }
  }
}
module.exports.getIndexToIns = getIndexToIns;

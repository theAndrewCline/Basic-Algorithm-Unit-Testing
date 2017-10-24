function chunkArrayInGroups(arr , size) {

  var l = arr.length/size;
  var newArr = [];

  for (var i = 0; i < l; i ++) {
    newArr.push(arr.slice(0 , size));
    arr = arr.slice(size);
  }

  return newArr;

}

module.exports.chunkArrayInGroups = chunkArrayInGroups;

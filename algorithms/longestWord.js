function findLongestWord(str) {
  var array = str.split(' '); // split strings at space
  var word = 'a';
  for (var i = 0; i < array.length; i ++) {
    if (array[i].length > word.length) {
      word = array[i];
    }
  }

return word.length;

}

module.exports.findLongestWord = findLongestWord;

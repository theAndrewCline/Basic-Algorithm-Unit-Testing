function factorialize(num) {
  var arr = [];

  if (num === 0) {
    return 1;
  } else {
      for (var i = 1; i <= num; i++) {
         arr.push(i);
       }

        var newNum = arr.reduce(function(sum , value){
            return sum * value;
         });

  return newNum;
  }
}

module.exports.factorialize = factorialize;

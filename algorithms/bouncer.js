function bouncer(arr) {
  var trueArr = arr.filter(function(item) {
    if (item) {
      return item;
    }
  });

  return trueArr;

}

module.exports.bouncer = bouncer;

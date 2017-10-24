function mutation(arr) {
  var str = arr[0]
  var reArr = arr[1].split('');
  var reStr = ''
  var boolean = true;

  for (var i = 0; i < reArr.length; i++) {
    var regexp = new RegExp(reArr[i], 'i');
    if (regexp.test(str) === false) boolean = false;
  }
  return boolean
}

module.exports.mutation = mutation;

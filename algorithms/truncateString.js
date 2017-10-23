function truncateString(str , num) {
  var newStr;

  if(str.length <= num) {
    return str;
  } else if (num <= 3) {
    newStr = str.slice(0 , num);
    newStr += "...";
    return newStr;
  } else {
    newStr = str.slice(0 , num - 3);
    newStr += "...";
    return newStr;
  }
}

module.exports.truncateString = truncateString;

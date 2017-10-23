function confirmingEnding(str , target) {
  var regexp = new RegExp(target + '$');
  return regexp.test(str);
}

module.exports.confirmingEnding = confirmingEnding;

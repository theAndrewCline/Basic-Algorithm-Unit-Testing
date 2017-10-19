function palindrome(str) {

  if  (str.replace(/[\W_]/g , '').toLowerCase() ===
       str.replace(/[\W_]/g , '').toLowerCase().split('').reverse().join('') ) {
    return true;
  } else {
    return false;
  }
}

module.exports.palindrome = palindrome;

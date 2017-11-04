function rot13(str) {

    var arr = [];

    for (var i = 0; i < str.length; i++) { 
        var num = str.charCodeAt(i);
        num += 13; 

        if( num > 90) {
            num -= 26;
        }
        if( str[i] === ' ' || str[i] === '.' || str[i] === '!' || str[i] === '?') {
            arr.push(str[i]);
        } else {
            arr.push(String.fromCharCode(num)); 
        }
    }

    var newStr = arr.join('');
    return newStr; 
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");

module.exports.rot13 = rot13; 
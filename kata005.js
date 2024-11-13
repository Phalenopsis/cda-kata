function caesarCrypt(str) {
    var result = "";
    for (var i = 0; i < str.length; i += 1) {
        var asciiCodeLetter = str.charCodeAt(i);
        var asciiCodeLetterEncrypted = asciiCodeLetter + 3;
        if ((asciiCodeLetterEncrypted > 90 &&
            asciiCodeLetterEncrypted < 94) ||
            (asciiCodeLetterEncrypted > 122 &&
                asciiCodeLetterEncrypted < 126)) {
            asciiCodeLetterEncrypted -= 26;
        }
        var letterCrypted = String.fromCharCode(asciiCodeLetterEncrypted);
        result += letterCrypted;
    }
    return result;
}
var input = "a";
console.log(caesarCrypt(input));
input = "z";
console.log(caesarCrypt(input));
input = "J";
console.log(caesarCrypt(input));
input = "X";
console.log(caesarCrypt(input));

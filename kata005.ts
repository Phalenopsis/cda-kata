function caesarCrypt(str: string): string {
    let result: string = "";
    for (let i = 0; i < str.length; i += 1) {
        const asciiCodeLetter: number = str.charCodeAt(i);
        let asciiCodeLetterEncrypted: number = asciiCodeLetter + 3;
        if ((asciiCodeLetterEncrypted > 90 &&
            asciiCodeLetterEncrypted < 94) ||
            (asciiCodeLetterEncrypted > 122 &&
                asciiCodeLetterEncrypted < 126)) {
            asciiCodeLetterEncrypted -= 26
        }
        const letterCrypted: string = String.fromCharCode(asciiCodeLetterEncrypted);
        result += letterCrypted
    }
    return result;
}

let input: string = "a";
console.log(caesarCrypt(input));
input = "z";
console.log(caesarCrypt(input));
input = "J";
console.log(caesarCrypt(input));
input = "X";
console.log(caesarCrypt(input));
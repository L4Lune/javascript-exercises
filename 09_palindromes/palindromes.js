const palindromes = function (string) {
    const replaced = string.replace(/[^a-z0-9]/gi, '');
    console.log(replaced);
    let replacedLower = replaced.toLowerCase();
    console.log(replacedLower);

    let stringArray = replacedLower.split('');
    console.log(stringArray);
   
    let reversedArray = stringArray.reverse();
    console.log(reversedArray);

    let reversedString = reversedArray.join("");
    console.log(reversedString);

    if (replacedLower === reversedString) {
        return true
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;

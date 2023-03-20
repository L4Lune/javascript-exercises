const reverseString = function(string) {
    let stringArray = string.split('');
    console.log(stringArray);

    let reversedArray = stringArray.reverse();
    console.log(reversedArray);

    let reversedString = reversedArray.join("");
    console.log(reversedString);

    return reversedString;
};



// Do not edit below this line
module.exports = reverseString;

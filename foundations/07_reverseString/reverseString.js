const reverseString = function(word) {
    // Split string with ""
    let strArr = word.split("");

    // Call array.reverse()
    strArr.reverse();

    // Call array.join()
    return reversedString = strArr.join("");
};

// Do not edit below this line
module.exports = reverseString;

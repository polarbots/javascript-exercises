const repeatString = function(string, num) {
    // If num is negative, return `ERROR`
    if (num < 0) {
        return `ERROR`;
    }

    // Create a for loop from i = 0 to num
    // Add string to itself
    let newString = "";
    for (let i = 0; i < num; i++) {
        newString += string;
    }

    // return string after loop
    return newString;
};

// Do not edit below this line
module.exports = repeatString;

const palindromes = function (str) {
    // Compare first and last letter and then move first and last pointer forward and back respectively
    // First remove all spaces and punctuation
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "");

    // Make it all lower case
    let cleanStrLower = cleanStr.toLowerCase()

    for (let left = 0, right = cleanStrLower.length-1; left < right; left++, right--) {
        if (cleanStrLower[left] !== cleanStrLower[right]) {
            return false
        }
    }
    return true

    // Or I could just reverse the string and compare

};

// Do not edit below this line
module.exports = palindromes;

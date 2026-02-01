const removeFromArray = function(arr, ...numToRemoveArr) {

    // Filter for if num is not in numToRemoveArr
    // Resulting array will be array with numbers "removed"
    return arr.filter((num) => !numToRemoveArr.includes(num));

};

// Do not edit below this line
module.exports = removeFromArray;

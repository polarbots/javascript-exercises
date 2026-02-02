const sumAll = function(num1, num2) {
    // First check that both num1 and num2 are positive ints
    if (!((Number.isInteger(num1) && num1 > -1) && (Number.isInteger(num2) && num2 > -1))) {
        return `ERROR`;
    }

    // Check if num1 is bigger than num2
    // If so, set num2 to start, num1 to end
    // else, num1 is start, num2 is end
    let start = 0;
    let end = 0;
    if (num1 > num2) {
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }

    // In a for loop, set initial val to start, stop when equal end, i++
    // Inside loop, sum the value of i with sum
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    // return sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

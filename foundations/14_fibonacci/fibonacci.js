const fibonacci = function(input) {
    // Convert input to int
    const numInt = Math.round(input)

    if (numInt < 0) {
        return "OOPS"
    }

    // // Using Binet's formula
    // const goldenRatio = (1+5**0.5)/2;
    // const numerator = goldenRatio**numInt - (1-goldenRatio)**numInt;
    // return Math.round(numerator/(5**0.5));

    const zeroNum = 0;
    const firstNum = 1;
    let result = 1;
    let prevPrevResult = zeroNum;
    let prevResult = firstNum;

    if (numInt === 0) {
        return zeroNum
    } else if (numInt === 1) {
        return firstNum
    } else {
        for (let i = 2; i <= numInt; i++) {
            result = prevResult + prevPrevResult;
            prevPrevResult = prevResult;
            prevResult = result;

        }
        return prevResult
    }
};

// Do not edit below this line
module.exports = fibonacci;
